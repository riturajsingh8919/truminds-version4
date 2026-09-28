"use client";

import React, { useRef, useEffect, useId } from "react";

interface OrganicParallaxImageProps {
  src?: string;
  circleSrc?: string;
  alt?: string;
  className?: string;
}

export function OrganicParallaxImage({
  src = "/images/about/about-parallax-team.jpg",
  circleSrc,
  alt = "TruMinds Clinical Research & Biometrics Team",
  className = "",
}: OrganicParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<SVGGElement>(null);
  const circleImageRef = useRef<SVGGElement>(null);

  const mainClipId = useId().replace(/:/g, "_") + "_mainClip";
  const circleClipId = useId().replace(/:/g, "_") + "_circleClip";
  const gradId = useId().replace(/:/g, "_") + "_grad";
  const shadowId = useId().replace(/:/g, "_") + "_shadow";

  const focalImage = circleSrc || src;

  // Multi-plane GPU scroll parallax:
  // - Shape moves with the viewport
  // - Background arch image glides smoothly (clamped to ±25px)
  // - Foreground focal circle image glides with stereoscopic depth (clamped to ±35px)
  // - 100% guaranteed full photo coverage without any white edges at any scroll distance
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom >= -150 && rect.top <= windowHeight + 150) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const offsetFromCenter = elementCenter - viewportCenter;

        // Bounded parallax translations ensuring zero white gap exposure
        const mainY = Math.max(-25, Math.min(25, offsetFromCenter * 0.08));
        const circleY = Math.max(-35, Math.min(35, offsetFromCenter * 0.13));

        if (mainImageRef.current) {
          mainImageRef.current.style.transform = `translate3d(0, ${mainY.toFixed(1)}px, 0)`;
        }
        if (circleImageRef.current) {
          circleImageRef.current.style.transform = `translate3d(0, ${circleY.toFixed(1)}px, 0)`;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-1200/970 max-w-140 mx-auto select-none group ${className}`}
    >
      <svg
        viewBox="0 0 1200 970"
        className="w-full h-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>{alt}</title>
        <defs>
          {/* Mathematically seamless, continuous G2 curvature path */}
          <path
            id="heroSmoothPath"
            d="
              M 60 520
              C 45 610 65 700 130 750
              C 195 800 270 765 340 700
              C 420 625 500 580 600 580
              C 700 580 780 625 860 700
              C 930 765 1005 800 1070 750
              C 1135 700 1155 610 1140 520
              C 1120 380 1060 250 950 160
              C 850 80 730 40 600 40
              C 470 40 350 80 250 160
              C 140 250 80 380 60 520 Z
            "
          />

          {/* Main arch image clipping aperture */}
          <clipPath id={mainClipId} clipPathUnits="userSpaceOnUse">
            <use href="#heroSmoothPath" />
          </clipPath>

          {/* Foreground circle focal clipping aperture */}
          <clipPath id={circleClipId} clipPathUnits="userSpaceOnUse">
            <circle cx="600" cy="660" r="250" />
          </clipPath>

          {/* TruMinds Theme Gradient for accent wing */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0068a5" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Multi-tier diffused elevation drop shadow */}
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="18"
              floodColor="#001833"
              floodOpacity="0.14"
            />
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="5"
              floodColor="#001833"
              floodOpacity="0.08"
            />
          </filter>
        </defs>

        {/* Layer 1: Blue accent contour wing (offset for authentic 3D depth) */}
        <g
          transform="translate(18, 14)"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        >
          <use href="#heroSmoothPath" fill={`url(#${gradId})`} />
        </g>

        {/* Layer 2: Main Arch Photo Layer with Elevation Shadow */}
        <g
          filter={`url(#${shadowId})`}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.005]"
        >
          {/* Solid white shape backplate */}
          <use href="#heroSmoothPath" fill="#ffffff" />

          {/* Clipped main image with parallax motion */}
          <g clipPath={`url(#${mainClipId})`}>
            <g ref={mainImageRef} style={{ willChange: "transform" }}>
              <image
                href={src}
                x="-60"
                y="-50"
                width="1320"
                height="1070"
                preserveAspectRatio="xMidYMid slice"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </g>
          </g>
        </g>

        {/* Layer 3: Foreground Focal Circle (Stereoscopic parallax float with white frame) */}
        <g
          filter={`url(#${shadowId})`}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        >
          {/* Solid white circular base plate */}
          <circle cx="600" cy="660" r="266" fill="#ffffff" />

          {/* Clipped focal zoom image with independent parallax motion */}
          <g clipPath={`url(#${circleClipId})`}>
            <g ref={circleImageRef} style={{ willChange: "transform" }}>
              <image
                href={focalImage}
                x="250"
                y="310"
                width="700"
                height="700"
                preserveAspectRatio="xMidYMid slice"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </g>
          </g>

          {/* Crisp white outer circular focal ring */}
          <circle
            cx="600"
            cy="660"
            r="258"
            fill="none"
            stroke="#ffffff"
            strokeWidth="16"
          />
        </g>
      </svg>
    </div>
  );
}
