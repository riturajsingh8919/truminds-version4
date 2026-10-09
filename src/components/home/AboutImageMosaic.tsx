"use client";

import { useEffect, useId, useRef, useState } from "react";

const rows = [
  { y: 68, start: 300, count: 2 },
  { y: 170, start: 120, count: 5 },
  { y: 272, start: 180, count: 4 },
  { y: 374, start: 120, count: 5 },
  { y: 476, start: 60, count: 6 },
  { y: 578, start: 120, count: 5 },
  { y: 680, start: 180, count: 3 },
];

const hexagons = rows.flatMap(({ y, start, count }) =>
  Array.from({ length: count }, (_, index) => ({ x: start + index * 120, y })),
);

function hexagonPoints(x: number, y: number) {
  return [
    `${x},${y - 66}`,
    `${x + 57},${y - 33}`,
    `${x + 57},${y + 33}`,
    `${x},${y + 66}`,
    `${x - 57},${y + 33}`,
    `${x - 57},${y - 33}`,
  ].join(" ");
}

const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 760">${hexagons
  .map(({ x, y }) => `<polygon points="${hexagonPoints(x, y)}" fill="white"/>`)
  .join("")}</svg>`;
const maskImage = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

export function AboutImageMosaic({
  imageSrc = "/images/about/about-parallax-team.jpg",
  imageAlt = "Clinical research colleagues reviewing study data together",
  imageAspectRatio = 1200 / 896,
}: {
  imageSrc?: string;
  imageAlt?: string;
  imageAspectRatio?: number;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const depthId = useId();

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let frame = 0;
    const updateFixedImagePosition = () => {
      frame = 0;
      const bounds = image.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const imageHeight = Math.max(viewportHeight, 620);
      const imageWidth = imageHeight * imageAspectRatio;

      // Cancel the shape's vertical scroll movement so the photo stays in place.
      image.style.backgroundSize = `auto ${imageHeight}px`;
      image.style.backgroundPosition = `${(bounds.width - imageWidth) / 2}px ${(viewportHeight - imageHeight) / 2 - bounds.top}px`;
    };
    const schedulePositionUpdate = () => {
      if (!frame)
        frame = window.requestAnimationFrame(updateFixedImagePosition);
    };

    updateFixedImagePosition();
    setReady(true);
    const resizeObserver = new ResizeObserver(schedulePositionUpdate);
    resizeObserver.observe(image);
    window.addEventListener("scroll", schedulePositionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", schedulePositionUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedulePositionUpdate);
      window.removeEventListener("resize", schedulePositionUpdate);
    };
  }, [imageAspectRatio]);

  return (
    <div className="relative mx-auto aspect-18/19 w-full max-w-170">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 720 760"
        aria-hidden="true"
      >
        <defs>
          <filter id={depthId} x="-25%" y="-25%" width="150%" height="160%">
            <feDropShadow
              dx="7"
              dy="11"
              stdDeviation="5"
              floodColor="#568cf4"
              floodOpacity="0.38"
            />
          </filter>
        </defs>
        <g filter={`url(#${depthId})`}>
          {hexagons.map(({ x, y }, index) => (
            <polygon
              points={hexagonPoints(x, y)}
              fill="#cbd5de"
              stroke="#96b8ef"
              strokeWidth="2"
              key={index}
            />
          ))}
        </g>
      </svg>
      <div
        ref={imageRef}
        role="img"
        aria-label={imageAlt}
        className={`absolute inset-0 bg-[#cbd5de] bg-no-repeat transition-opacity duration-500 motion-reduce:transition-none ${ready ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: "auto 100vh",
          backgroundPosition: "center center",
          maskImage,
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskImage: maskImage,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}
