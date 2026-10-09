"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { aiServices } from "@/lib/truminds-ai";

export function AiServicesCarousel() {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClickUntil = useRef(0);
  const lastWheelAt = useRef(0);
  const lastInteractionAt = useRef(0);

  useEffect(() => {
    if (hovered || focused) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interval = window.setInterval(() => {
      if (
        document.visibilityState !== "visible" ||
        reducedMotion.matches ||
        Date.now() - lastInteractionAt.current < 5000
      )
        return;
      setActive((current) => (current + 1) % aiServices.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [hovered, focused]);

  function move(direction: -1 | 1) {
    lastInteractionAt.current = Date.now();
    setActive(
      (current) =>
        (current + direction + aiServices.length) % aiServices.length,
    );
  }

  return (
    <div
      className="mt-10 sm:mt-14"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="TruMinds AI services"
        className="relative -mx-5 h-102.5 w-[calc(100%+40px)] touch-pan-y overflow-hidden select-none md:mx-0 md:w-full sm:h-145 xl:h-157.5"
        onPointerDown={(event) => {
          pointerStart.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          if (!pointerStart.current) return;
          const distanceX = event.clientX - pointerStart.current.x;
          const distanceY = event.clientY - pointerStart.current.y;
          pointerStart.current = null;
          if (
            Math.abs(distanceX) < 45 ||
            Math.abs(distanceX) < Math.abs(distanceY)
          )
            return;
          suppressClickUntil.current = Date.now() + 500;
          move(distanceX < 0 ? 1 : -1);
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
        onWheel={(event) => {
          if (
            Math.abs(event.deltaX) < 25 ||
            Math.abs(event.deltaX) < Math.abs(event.deltaY)
          )
            return;
          if (Date.now() - lastWheelAt.current < 650) return;
          lastWheelAt.current = Date.now();
          move(event.deltaX > 0 ? 1 : -1);
        }}
        onClickCapture={(event) => {
          if (Date.now() < suppressClickUntil.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {aiServices.map((service, index) => {
          const offset =
            ((index - active + aiServices.length + aiServices.length / 2) %
              aiServices.length) -
            aiServices.length / 2;
          const position =
            offset === 0
              ? "z-20 translate-x-0 scale-100 opacity-100"
              : offset === 1
                ? "z-10 translate-x-[91%] scale-[.88] opacity-75 sm:translate-x-[104%]"
                : offset === -1
                  ? "z-10 -translate-x-[91%] scale-[.88] opacity-75 sm:-translate-x-[104%]"
                  : offset > 1
                    ? "z-0 translate-x-[210%] scale-[.75] opacity-0"
                    : "z-0 -translate-x-[210%] scale-[.75] opacity-0";
          const isVisible = Math.abs(offset) <= 1;
          const hoverScale =
            offset === 0
              ? "hover:scale-[1.025] focus-visible:scale-[1.025]"
              : "hover:scale-[.92] focus-visible:scale-[.92]";

          return (
            <div
              aria-hidden={!isVisible}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              key={service.slug}
            >
              <Link
                href={`/truminds-ai/${service.slug}`}
                draggable={false}
                aria-label={`Explore ${service.title}: ${service.shortDescription}`}
                aria-current={offset === 0 ? "true" : undefined}
                tabIndex={isVisible ? 0 : -1}
                className={`group relative block aspect-4/5 w-[min(70vw,390px)] shrink-0 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#d3e5ec] transition-[translate,scale,opacity] duration-1000 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] sm:w-[min(42vw,455px)] xl:w-[min(32vw,480px)] motion-reduce:transition-none ${isVisible ? "pointer-events-auto" : "pointer-events-none"} ${position} ${hoverScale}`}
              >
                <div className="relative h-[65%] overflow-hidden bg-[#0a3655]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) 70vw, (max-width: 1279px) 42vw, 32vw"
                    draggable={false}
                    className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                    style={{ objectPosition: service.imagePosition }}
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#071f35]/50 to-transparent" />
                  <span className="absolute top-5 left-5 rounded-full border border-white/40 bg-[#082b44]/55 px-3 py-1.5 text-xs font-bold tracking-[.15em] text-white backdrop-blur-md">
                    {service.number} /{" "}
                    {String(aiServices.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative -mt-4 flex h-[calc(35%+1rem)] flex-col justify-center rounded-t-[1.4rem] bg-white px-5 py-3 sm:px-8 sm:py-5">
                  <span className="hidden text-xs font-semibold tracking-[.14em] text-[#008d99] uppercase sm:block">
                    TruMinds AI
                  </span>
                  <span className="mt-2 flex items-center justify-between gap-3">
                    <strong className="text-[clamp(1.5rem,2.2vw,2rem)] leading-tight font-semibold tracking-[-.04em] text-[#0a2038]">
                      {service.title}
                    </strong>
                    <ArrowUpRight
                      className="size-6 shrink-0 text-[#0068a5] transition-[translate] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-2 line-clamp-2 text-base leading-snug text-[#587084]">
                    {service.shortDescription}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous TruMinds AI service"
          className="absolute top-1/2 left-0 z-30 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#bdd8e0] bg-white/90 text-[#0068a5] shadow-[0_12px_35px_rgba(5,50,74,.18)] backdrop-blur-md transition-[translate,background-color,box-shadow] duration-300 hover:-translate-x-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(5,50,74,.25)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] sm:left-3 sm:size-14 motion-reduce:transition-none"
        >
          <ArrowLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next TruMinds AI service"
          className="absolute top-1/2 right-0 z-30 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#bdd8e0] bg-white/90 text-[#0068a5] shadow-[0_12px_35px_rgba(5,50,74,.18)] backdrop-blur-md transition-[translate,background-color,box-shadow] duration-300 hover:translate-x-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(5,50,74,.25)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] sm:right-3 sm:size-14 motion-reduce:transition-none"
        >
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-center text-sm font-semibold tracking-[.2em] text-[#527184] tabular-nums sm:mt-0">
        {String(active + 1).padStart(2, "0")}{" "}
        <span className="mx-2 text-[#9bb5c2]">/</span>{" "}
        {String(aiServices.length).padStart(2, "0")}
      </p>
      <p className="sr-only" aria-live={hovered || focused ? "polite" : "off"}>
        {aiServices[active].title}, {active + 1} of {aiServices.length}
      </p>
    </div>
  );
}
