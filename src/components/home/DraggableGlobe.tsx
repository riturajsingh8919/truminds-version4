"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const DRAG_SPEED = 0.005;
const ROTATION_SPEED = 0.00016;
const countries = [
  { name: "United States", location: [38.9, -77.0] as [number, number] },
  { name: "Canada", location: [43.7, -79.4] as [number, number] },
  { name: "United Kingdom", location: [51.5, -0.1] as [number, number] },
  { name: "India", location: [12.9, 77.6] as [number, number] },
];

function projectLocation(
  [latitude, longitude]: [number, number],
  phi: number,
  theta: number,
) {
  const lat = (latitude * Math.PI) / 180;
  const lon = (longitude * Math.PI) / 180 - Math.PI;
  const x = -Math.cos(lat) * Math.cos(lon);
  const y = Math.sin(lat);
  const z = Math.cos(lat) * Math.sin(lon);
  const horizontal = Math.cos(phi) * x + Math.sin(phi) * z;
  const vertical =
    Math.sin(phi) * Math.sin(theta) * x +
    Math.cos(theta) * y -
    Math.cos(phi) * Math.sin(theta) * z;
  const depth =
    -Math.sin(phi) * Math.cos(theta) * x +
    Math.sin(theta) * y +
    Math.cos(phi) * Math.cos(theta) * z;

  return {
    x: (horizontal * 1.05 + 1) / 2,
    y: (1 - vertical * 1.05) / 2,
    visible: depth > 0.2,
  };
}

export function DraggableGlobe() {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const labelOffsetsRef = useRef(countries.map(() => ({ x: 0, y: 0 })));
  const hoverRef = useRef({ x: 0, y: 0, active: false });
  const phiRef = useRef(0.1);
  const thetaRef = useRef(0.13);
  const pointerRef = useRef<{ id: number; x: number; y: number } | null>(null);
  const visibleRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const lastInteractionRef = useRef(0);

  useEffect(() => {
    const frame = frameRef.current;
    const canvas = canvasRef.current;
    if (!frame || !canvas) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionPreference.matches;
    };
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    const globe = createGlobe(canvas, {
      width: frame.clientWidth,
      height: frame.clientWidth,
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 0,
      diffuse: 1.15,
      mapSamples: 14000,
      mapBrightness: 1.65,
      baseColor: [0.12, 0.35, 0.43],
      markerColor: [0.02, 0.56, 0.61],
      glowColor: [0.81, 0.94, 0.96],
      markers: countries.map(({ location }) => ({ location, size: 0.055 })),
      arcs: [
        { from: countries[0].location, to: countries[1].location },
        { from: countries[0].location, to: countries[2].location },
        { from: countries[1].location, to: countries[2].location },
        { from: countries[2].location, to: countries[3].location },
      ],
      arcColor: [0.05, 0.5, 0.59],
      arcWidth: 0.65,
      arcHeight: 0.12,
    });
    const globeWrapper = canvas.parentElement;

    let animationFrame = 0;
    let lastFrame = 0;
    const render = (time: number) => {
      if (visibleRef.current) {
        const elapsed = lastFrame ? Math.min(time - lastFrame, 64) : 16;
        if (
          !reducedMotionRef.current &&
          !pointerRef.current &&
          time - lastInteractionRef.current > 1600
        ) {
          phiRef.current += elapsed * ROTATION_SPEED;
        }
        globe.update({ phi: phiRef.current, theta: thetaRef.current });

        const size = frame.clientWidth;
        countries.forEach((country, index) => {
          const label = labelsRef.current[index];
          if (!label) return;
          const position = projectLocation(
            country.location,
            phiRef.current,
            thetaRef.current,
          );
          const x = position.x * size;
          const y = position.y * size;
          const hover = hoverRef.current;
          const distance = Math.hypot(x - hover.x, y - hover.y);
          const strength =
            hover.active && distance < 130 ? ((130 - distance) / 130) ** 2 : 0;
          const targetX = distance > 0 ? ((x - hover.x) / distance) * strength * 23 : 0;
          const targetY = distance > 0 ? ((y - hover.y) / distance) * strength * 23 : 0;
          const offset = labelOffsetsRef.current[index];
          offset.x += (targetX - offset.x) * 0.18;
          offset.y += (targetY - offset.y) * 0.18;
          label.style.left = `${x}px`;
          label.style.top = `${y}px`;
          label.style.transform = `translate(calc(-50% + ${offset.x}px), calc(-100% - 13px + ${offset.y}px))`;
          label.style.opacity =
            position.visible && position.x > 0.14 && position.x < 0.86 ? "1" : "0";
        });
      }
      lastFrame = time;
      animationFrame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      const size = frame.clientWidth;
      if (size > 0) globe.update({ width: size, height: size });
    });
    resizeObserver.observe(frame);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) globe.update({ phi: phiRef.current, theta: thetaRef.current });
      },
      { rootMargin: "100px" },
    );
    visibilityObserver.observe(frame);
    globe.update({ phi: phiRef.current, theta: thetaRef.current });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      motionPreference.removeEventListener("change", updateMotionPreference);
      globe.destroy();
      if (globeWrapper && globeWrapper !== frame && globeWrapper.parentElement === frame) {
        frame.insertBefore(canvas, globeWrapper);
        globeWrapper.remove();
      }
    };
  }, []);

  return (
    <div ref={frameRef} className="relative aspect-square w-full max-w-155">
      <canvas
        ref={canvasRef}
        role="button"
        tabIndex={0}
        aria-label="Globe showing connected talent markets in the United States, Canada, the United Kingdom and India. Drag or use the arrow keys to rotate."
        className="block h-full w-full cursor-grab touch-none rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] active:cursor-grabbing"
        onKeyDown={(event) => {
          const movements: Record<string, [number, number]> = {
            ArrowLeft: [-0.18, 0],
            ArrowRight: [0.18, 0],
            ArrowUp: [0, -0.18],
            ArrowDown: [0, 0.18],
            Enter: [0.35, 0],
            " ": [0.35, 0],
          };
          const movement = movements[event.key];
          if (!movement) return;
          event.preventDefault();
          phiRef.current += movement[0];
          thetaRef.current = Math.max(-0.8, Math.min(0.8, thetaRef.current + movement[1]));
          lastInteractionRef.current = performance.now();
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          pointerRef.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          lastInteractionRef.current = performance.now();
        }}
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          hoverRef.current = {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
            active: true,
          };
          const pointer = pointerRef.current;
          if (!pointer || pointer.id !== event.pointerId) return;
          phiRef.current += (event.clientX - pointer.x) * DRAG_SPEED;
          thetaRef.current = Math.max(
            -0.8,
            Math.min(0.8, thetaRef.current + (event.clientY - pointer.y) * DRAG_SPEED),
          );
          pointer.x = event.clientX;
          pointer.y = event.clientY;
          lastInteractionRef.current = performance.now();
        }}
        onPointerUp={(event) => {
          if (pointerRef.current?.id === event.pointerId) pointerRef.current = null;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          lastInteractionRef.current = performance.now();
        }}
        onPointerCancel={() => {
          pointerRef.current = null;
          lastInteractionRef.current = performance.now();
        }}
        onLostPointerCapture={() => {
          pointerRef.current = null;
        }}
        onPointerLeave={() => {
          hoverRef.current.active = false;
        }}
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {countries.map((country, index) => (
          <span
            key={country.name}
            ref={(element) => {
              labelsRef.current[index] = element;
            }}
            className="absolute inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#b9dce3] bg-white/93 px-3 py-1.5 text-xs font-semibold text-[#0b4056] opacity-0 shadow-[0_8px_24px_rgba(12,62,82,.16)] backdrop-blur-sm transition-opacity duration-300 will-change-transform sm:text-sm motion-reduce:transition-none"
          >
            <span className="relative size-2 shrink-0 rounded-full bg-[#008ba0]">
              <span className="absolute inset-0 rounded-full bg-[#008ba0] opacity-70 animate-ping motion-reduce:animate-none" />
            </span>
            {country.name}
          </span>
        ))}
      </div>
    </div>
  );
}
