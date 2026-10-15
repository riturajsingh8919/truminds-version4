"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { leadership } from "@/data/leadership";
import { section, shell, title } from "@/lib/site-styles";

type CarouselPosition = {
  index: number;
  visible: number;
  canPrevious: boolean;
  canNext: boolean;
};

const initialPosition: CarouselPosition = {
  index: 0,
  visible: 1,
  canPrevious: false,
  canNext: true,
};

export function LeadershipSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const second = track.children[1] as HTMLElement | undefined;
    if (!first || !second) return;

    const step = second.offsetLeft - first.offsetLeft;
    if (!step) return;
    const visible = Math.max(1, Math.round((track.clientWidth + (step - first.clientWidth)) / step));
    const maximumIndex = Math.max(0, leadership.length - visible);
    const index = Math.min(maximumIndex, Math.round(track.scrollLeft / step));
    const maximumScroll = track.scrollWidth - track.clientWidth;
    setPosition({
      index,
      visible,
      canPrevious: track.scrollLeft > 2,
      canNext: track.scrollLeft < maximumScroll - 2,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    const frame = requestAnimationFrame(updatePosition);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [updatePosition]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex === null || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const maximumIndex = Math.max(0, leadership.length - position.visible);
    const nextIndex = Math.max(0, Math.min(maximumIndex, position.index + direction));
    const first = track.children[0] as HTMLElement;
    const target = track.children[nextIndex] as HTMLElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: reducedMotion ? "instant" : "smooth" });
  }

  function openBio(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setSelectedIndex(index);
  }

  const selected = selectedIndex === null ? null : leadership[selectedIndex];

  return (
    <section id="leadership-team" aria-labelledby="leadership-title" className={`${section} bg-[#f2f8f9]`}>
      <div className={shell}>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-x-10 gap-y-7 md:mb-11">
          <div>
            <span className="text-sm font-semibold tracking-[.16em] text-[#008a98] uppercase">The people behind TruMinds</span>
            <h2 id="leadership-title" className={`${title} mt-3`}>Leadership <span className="text-[#0068a5]">team.</span></h2>
            <p className="mt-5 max-w-170 text-lg leading-relaxed text-[#4d6b7d]">Meet the leaders guiding our clinical research, technology and partnerships. Explore their stories and the experience they bring to our work.</p>
          </div>
          <div className="flex items-center gap-3" aria-label="Leadership carousel controls">
            <button type="button" onClick={() => move(-1)} disabled={!position.canPrevious} aria-label="Previous leaders" aria-controls="leadership-carousel" className="grid size-12 cursor-pointer place-items-center rounded-full border border-[#bcd5dd] bg-white text-[#0068a5]  transition-[transform,background-color,border-color,color] duration-300 hover:-translate-x-1 hover:border-[#0068a5] hover:bg-[#0068a5] hover:text-white  disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 disabled:hover:border-[#bcd5dd] disabled:hover:bg-white disabled:hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><ArrowLeft size={21} aria-hidden="true" /></button>
            <button type="button" onClick={() => move(1)} disabled={!position.canNext} aria-label="Next leaders" aria-controls="leadership-carousel" className="grid size-12 cursor-pointer place-items-center rounded-full border border-[#0068a5] bg-[#0068a5] text-white  transition-[transform,background-color] duration-300 hover:translate-x-1 hover:bg-[#005480]  disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><ArrowRight size={21} aria-hidden="true" /></button>
          </div>
        </div>

        <div
          id="leadership-carousel"
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Leadership team profiles"
          tabIndex={0}
          onScroll={updatePosition}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth rounded-[1.75rem] pb-5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:scroll-auto"
        >
          {leadership.map((leader, index) => (
            <article key={leader.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${leadership.length}: ${leader.name}`} className="leadership-slide group flex flex-col rounded-[1.6rem] border border-[#d7e7eb] bg-white transition-colors duration-500 hover:border-[#b3d7e0] motion-reduce:transition-none">
              <div className="relative aspect-[1.25] overflow-hidden rounded-t-[1.5rem] bg-[#d7e9ee]">
                <Image src={leader.image} alt={`Portrait of ${leader.name}`} fill sizes="(max-width: 639px) 88vw, (max-width: 1023px) 48vw, 33vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#052f49]/25 to-transparent" />
              </div>
              <div className="h-1 bg-linear-to-r from-[#00a7a9] via-[#007d9f] to-[#0068a5]" aria-hidden="true" />
              <div className="flex min-h-66 flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[1.45rem] leading-tight font-semibold tracking-[-.025em] text-[#0b3043]">{leader.name}</h3>
                <p className="mt-2 min-h-11 text-sm leading-snug font-semibold text-[#007d91] sm:text-base">{leader.role}</p>
                <p className="mt-3 line-clamp-2 text-[.95rem] leading-relaxed text-[#617b88]">{leader.summary}</p>
                <button type="button" onClick={(event) => openBio(index, event.currentTarget)} className="mt-auto inline-flex w-fit cursor-pointer items-center gap-2 pt-5 text-sm font-bold text-[#0068a5] transition-[gap,color] duration-300 hover:gap-3 hover:text-[#004d78] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">View biography <ArrowUpRight size={18} aria-hidden="true" /></button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-6">
          <p className="text-sm font-semibold tracking-[.08em] text-[#527184] tabular-nums" aria-live="polite">{String(position.index + 1).padStart(2, "0")}–{String(Math.min(leadership.length, position.index + position.visible)).padStart(2, "0")} <span className="mx-1 text-[#94afba]">/</span> {String(leadership.length).padStart(2, "0")}</p>
          <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#d2e4e9] sm:w-48" aria-hidden="true"><div className="h-full rounded-full bg-[#008ea3] transition-[width] duration-300" style={{ width: `${((position.index + position.visible) / leadership.length) * 100}%` }} /></div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="leadership-dialog-title"
        onClose={() => {
          setSelectedIndex(null);
          lastTriggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-auto w-[min(960px,calc(100vw-32px))] max-w-none overflow-hidden rounded-[1.75rem] border border-[#c5dce3] bg-white p-0 text-[#12364a]  backdrop:bg-[#031e31]/70 backdrop:backdrop-blur-[5px]"
      >
        {selected && (
          <>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close biography" className="absolute top-4 right-4 z-20 grid size-11 cursor-pointer place-items-center rounded-full border border-[#cddfe4] bg-white text-[#1a5268]  transition-[transform,background-color,color] hover:rotate-90 hover:bg-[#0068a5] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><X size={20} aria-hidden="true" /></button>
            <div className="max-h-[calc(100dvh-32px)] overflow-y-auto md:grid md:max-h-[min(780px,calc(100dvh-32px))] md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
              <div className="bg-[#e8f2f4] p-5 sm:p-7 md:sticky md:top-0 md:self-start md:p-8">
                <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-[#d5e8ed] ">
                  <Image src={selected.image} alt={`Portrait of ${selected.name}`} fill sizes="(max-width: 767px) 85vw, 340px" className="object-cover object-top" />
                </div>
                <p className="mt-5 hidden text-sm font-semibold tracking-[.16em] text-[#008a98] uppercase md:block">TruMinds leadership</p>
              </div>
              <div className="px-6 pt-5 pb-9 sm:px-9 md:px-10 md:pt-16 md:pb-12">
                <span className="text-xs font-bold tracking-[.18em] text-[#008a98] uppercase">Leadership profile</span>
                <h3 id="leadership-dialog-title" className="mt-3 pr-9 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight font-semibold tracking-[-.035em] text-[#0a2e43]">{selected.name}</h3>
                <p className="mt-2 text-lg font-semibold text-[#007f91]">{selected.role}</p>
                <div className="mt-6 h-px bg-[#d5e5e9]" aria-hidden="true" />
                <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#496676]">
                  {selected.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
