"use client";

import { useEffect, useRef } from "react";

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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateFixedImagePosition = () => {
      frame = 0;
      const bounds = image.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const viewportHeight = window.innerHeight;
      const aspectRatio = imageAspectRatio > 0 ? imageAspectRatio : 1;
      const travel = reducedMotion.matches ? 0 : Math.min(bounds.height * .06, 32);
      const imageHeight = Math.max(bounds.height + travel, bounds.width / aspectRatio);
      const imageWidth = imageHeight * aspectRatio;
      const minimumTop = bounds.height - imageHeight;
      const viewportTop = (viewportHeight - imageHeight) / 2 - bounds.top;
      const imageTop = reducedMotion.matches
        ? minimumTop / 2
        : Math.max(minimumTop, Math.min(0, viewportTop));

      // Fit the photo to its shape, then bound its fixed-scroll movement so no edge is exposed.
      image.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
      image.style.backgroundPosition = `${(bounds.width - imageWidth) / 2}px ${imageTop}px`;
    };
    const schedulePositionUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFixedImagePosition);
    };

    updateFixedImagePosition();
    const resizeObserver = new ResizeObserver(schedulePositionUpdate);
    resizeObserver.observe(image);
    window.addEventListener("scroll", schedulePositionUpdate, { passive: true });
    window.addEventListener("resize", schedulePositionUpdate);
    reducedMotion.addEventListener("change", schedulePositionUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedulePositionUpdate);
      window.removeEventListener("resize", schedulePositionUpdate);
      reducedMotion.removeEventListener("change", schedulePositionUpdate);
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
        className="absolute inset-[3px] bg-[#cbd5de] bg-no-repeat"
        style={{
          ...maskStyle,
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
    </div>
  );
}
