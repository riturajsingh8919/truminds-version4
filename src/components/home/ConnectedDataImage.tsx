"use client";

import { useEffect, useRef, useState } from "react";

export function ConnectedDataImage({
  imageSrc = "/about-main.jpg",
  imageAlt = "Two laboratory researchers reviewing a clipboard together",
  imageAspectRatio = 1,
  mirrored = false,
}: {
  imageSrc?: string;
  imageAlt?: string;
  imageAspectRatio?: number;
  mirrored?: boolean;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const maskUrl = mirrored
    ? "/images/shapes/truminds-research-prism-mirror.svg"
    : "/images/shapes/truminds-research-prism.svg";
  const maskStyle = {
    maskImage: `url("${maskUrl}")`,
    WebkitMaskImage: `url("${maskUrl}")`,
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  };

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

      // Keep the photo fixed in the viewport while the shaped window scrolls.
      image.style.backgroundSize = `auto ${imageHeight}px`;
      image.style.backgroundPosition = `${(bounds.width - imageWidth) / 2}px ${(viewportHeight - imageHeight) / 2 - bounds.top}px`;
    };
    const schedulePositionUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFixedImagePosition);
    };

    updateFixedImagePosition();
    setReady(true);
    const resizeObserver = new ResizeObserver(schedulePositionUpdate);
    resizeObserver.observe(image);
    window.addEventListener("scroll", schedulePositionUpdate, { passive: true });
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
      <div
        className="absolute inset-0 bg-[linear-gradient(145deg,#00aeb2_0%,#0068a5_54%,#004a85_100%)] drop-shadow-[0_16px_24px_rgba(8,57,82,.15)]"
        style={maskStyle}
        aria-hidden="true"
      />
      <div
        ref={imageRef}
        role="img"
        aria-label={imageAlt}
        className={`absolute inset-[3px] bg-[#cbd5de] bg-no-repeat transition-opacity duration-500 motion-reduce:transition-none ${ready ? "opacity-100" : "opacity-0"}`}
        style={{
          ...maskStyle,
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: "auto 100vh",
          backgroundPosition: "center center",
        }}
      />
    </div>
  );
}
