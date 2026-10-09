import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { InteriorContact } from "@/components/layout/InteriorPage";
import { shell } from "@/lib/site-styles";
import { therapeuticAreas } from "@/lib/therapeutic-areas";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return therapeuticAreas.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = therapeuticAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | Therapeutic Areas | TruMinds Clinical`,
    description: area.detail,
  };
}

export default async function TherapeuticAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = therapeuticAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  const currentIndex = therapeuticAreas.findIndex((item) => item.slug === slug);
  const relatedAreas = [
    therapeuticAreas[(currentIndex + 1) % therapeuticAreas.length],
    therapeuticAreas[(currentIndex + 2) % therapeuticAreas.length],
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#071f35] text-white">
        <div className="absolute inset-0 -z-20 md:left-[38%]">
          <Image
            src={area.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: area.imagePosition }}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,31,53,.48),#071f35_92%)] md:bg-[linear-gradient(90deg,#071f35_0%,#071f35_28%,rgba(7,31,53,.82)_48%,rgba(7,31,53,.16)_100%)]" />
        <div className={`${shell} py-16 md:py-28`}>
          <Link
            href="/#therapeutic-areas"
            className="mb-16 inline-flex items-center gap-2 text-base text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbdf]"
          >
            <ArrowLeft size={18} aria-hidden="true" /> All therapeutic areas
          </Link>
          <h1 className="max-w-205 text-[clamp(3rem,6vw,6rem)] leading-[1.02] font-semibold tracking-[-.055em]">
            {area.title}
          </h1>
          <p className="mt-7 max-w-170 text-[clamp(1.15rem,1.7vw,1.5rem)] leading-relaxed text-[#d5e7ec]">
            {area.detail}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className={`${shell} grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24`}>
          <h2 className="text-[clamp(2.3rem,3.5vw,3.7rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
            Research shaped
            <br />
            <span className="text-[#0068a5]">around the science.</span>
          </h2>
          <div>
            <p className="text-xl leading-relaxed text-[#203d52]">
              {area.overview}
            </p>
            <p className="mt-6 text-base leading-[1.8] text-[#587084]">
              {area.approach}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f8f9] py-20 md:py-28">
        <div className={shell}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-180 text-[clamp(2.2rem,3.4vw,3.6rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
              What thoughtful delivery looks like.
            </h2>
            <p className="max-w-105 text-base leading-relaxed text-[#587084]">
              Focused considerations for the people, evidence and operations
              behind each study.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {area.focus.map((item) => (
              <article
                className="rounded-[1.5rem] border border-[#dcebed] bg-white p-7 shadow-[0_14px_34px_rgba(5,50,74,.06)] md:p-8"
                key={item.title}
              >
                <span className="block h-1 w-12 rounded-full bg-[#00aaa9]" />
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#0a2038]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#587084]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className={shell}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-[clamp(2.2rem,3.4vw,3.6rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
              Explore more therapeutic areas.
            </h2>
            <Link
              href="/#therapeutic-areas"
              className="inline-flex items-center gap-2 border-b border-[#0068a5] pb-2 text-base font-semibold text-[#0068a5] transition-colors hover:text-[#004f80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"
            >
              View all areas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {relatedAreas.map((item) => (
              <Link
                href={`/therapeutic-areas/${item.slug}`}
                key={item.slug}
                className="group relative flex min-h-80 items-end overflow-hidden rounded-[1.5rem] bg-[#092b42] p-7 text-white shadow-[0_16px_35px_rgba(5,50,74,.12)] transition-[translate,scale,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_26px_50px_rgba(5,50,74,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] focus-visible:-translate-y-2 motion-reduce:transition-none"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-[scale] duration-700 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071f35]/95 via-[#071f35]/30 to-transparent" />
                <span className="relative z-10 flex w-full items-end justify-between gap-4">
                  <span>
                    <strong className="block text-2xl font-semibold">
                      {item.title}
                    </strong>
                    <span className="mt-2 block max-w-100 text-base leading-snug text-white/85">
                      {item.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InteriorContact />
    </>
  );
}
