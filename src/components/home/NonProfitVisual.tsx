"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const pills = [
  { x: 56, y: 265, width: 138, height: 370 },
  { x: 227, y: 70, width: 146, height: 610 },
  { x: 407, y: 110, width: 138, height: 370 },
];

function pillRotation({ x, y, width, height }: (typeof pills)[number]) {
  return `rotate(-24 ${x + width / 2} ${y + height / 2})`;
}

const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760">${pills
  .map(
    (pill) =>
      `<rect x="${pill.x}" y="${pill.y}" width="${pill.width}" height="${pill.height}" rx="${pill.width / 2}" transform="${pillRotation(pill)}" fill="white"/>`,
  )
  .join("")}</svg>`;
const maskImage = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

export function NonProfitVisual({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  const imageFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameElement = imageFrameRef.current;
    if (!frameElement) return;

    let frame = 0;
    const updateFixedImagePosition = () => {
      frame = 0;
      const bounds = frameElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const imageHeight = Math.max(viewportHeight, bounds.width * 1.5, 620);
      const imageWidth = imageHeight * (2 / 3);

      // Keep the image anchored to the viewport while its pill mask scrolls.
      frameElement.style.setProperty("--photo-width", `${imageWidth}px`);
      frameElement.style.setProperty("--photo-height", `${imageHeight}px`);
      frameElement.style.setProperty(
        "--photo-left",
        `${(bounds.width - imageWidth) / 2}px`,
      );
      frameElement.style.setProperty(
        "--photo-top",
        `${(viewportHeight - imageHeight) / 2 - bounds.top}px`,
      );
    };
    const schedulePositionUpdate = () => {
      if (!frame)
        frame = window.requestAnimationFrame(updateFixedImagePosition);
    };

    updateFixedImagePosition();
    const resizeObserver = new ResizeObserver(schedulePositionUpdate);
    resizeObserver.observe(frameElement);
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
  }, []);

  return (
    <div
      className={`relative mx-auto aspect-15/19 w-full max-w-180 lg:w-[calc(100%-96px)] min-[1800px]:translate-x-16 ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 600 760"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="non-profit-pill-depth"
            x="-30%"
            y="-30%"
            width="170%"
            height="170%"
          >
            <feDropShadow
              dx="9"
              dy="14"
              stdDeviation="7"
              floodColor="#0068a5"
              floodOpacity="0.28"
            />
          </filter>
        </defs>
        <g filter="url(#non-profit-pill-depth)">
          {pills.map((pill) => (
            <rect
              key={pill.x}
              x={pill.x}
              y={pill.y}
              width={pill.width}
              height={pill.height}
              rx={pill.width / 2}
              transform={pillRotation(pill)}
              fill="#d4e3e9"
              stroke="#8cc9df"
              strokeWidth="3"
            />
          ))}
        </g>
      </svg>
      <div
        ref={imageFrameRef}
        className="absolute inset-0 bg-[#d4e3e9]"
        style={{
          maskImage,
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskImage: maskImage,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      >
        <Image
          src="/images/editorial/non-profit.jpg"
          alt="Volunteers organizing food and clothing for a community"
          width={1200}
          height={1800}
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 1023px) 100vw, 900px"
          className="absolute max-w-none object-cover"
          style={{
            width: "var(--photo-width, 100%)",
            height: "var(--photo-height, 100%)",
            left: "var(--photo-left, 0px)",
            top: "var(--photo-top, 0px)",
          }}
        />
      </div>
    </div>
  );
}
