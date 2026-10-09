import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { InteriorContact } from "@/components/layout/InteriorPage";
import { aiServices } from "@/lib/truminds-ai";
import { shell } from "@/lib/site-styles";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return aiServices.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = aiServices.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | TruMinds AI | TruMinds Clinical`,
    description: service.shortDescription,
  };
}

export default async function AiServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = aiServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const currentIndex = aiServices.findIndex((item) => item.slug === slug);
  const otherServices = [
    aiServices[(currentIndex - 1 + aiServices.length) % aiServices.length],
    aiServices[(currentIndex + 1) % aiServices.length],
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#071f35] text-white">
        <div className="absolute inset-0 -z-20 md:left-[38%]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: service.imagePosition }}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,31,53,.50),#071f35_88%)] md:bg-[linear-gradient(90deg,#071f35_0%,#071f35_29%,rgba(7,31,53,.85)_47%,rgba(7,31,53,.24)_100%)]" />
        <div className={`${shell} py-16 md:py-28`}>
          <Link
            href="/#truform"
            className="mb-16 inline-flex items-center gap-2 text-base text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={18} aria-hidden="true" /> All TruMinds AI services
          </Link>
          <p className="text-sm font-bold tracking-[.18em] text-[#7de0df] uppercase">
            TruMinds AI / {service.number}
          </p>
          <h1 className="mt-5 max-w-200 text-[clamp(3rem,6vw,6rem)] leading-[1.02] font-semibold tracking-[-.055em]">
            {service.title}
          </h1>
          <p className="mt-7 max-w-170 text-[clamp(1.15rem,1.7vw,1.5rem)] leading-relaxed text-[#d5e7ec]">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className={`${shell} grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24`}>
          <h2 className="text-[clamp(2.3rem,3.5vw,3.7rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
            From information
            <br />
            <span className="text-[#0068a5]">to understanding.</span>
          </h2>
          <div>
            <p className="text-xl leading-relaxed text-[#203d52]">{service.intro}</p>
            <p className="mt-6 text-base leading-[1.8] text-[#587084]">{service.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f8f9] py-20 md:py-28">
        <div className={shell}>
          <h2 className="max-w-190 text-[clamp(2.2rem,3.4vw,3.6rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
            Built for the way study teams work.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.highlights.map((highlight, index) => (
              <div className="rounded-[1.5rem] border border-[#dcebed] bg-white p-7 shadow-[0_16px_35px_rgba(5,50,74,.06)] md:p-8" key={highlight.title}>
                <span className="text-sm font-bold text-[#008f9a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#0a2038]">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#587084]">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className={shell}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-[clamp(2.2rem,3.4vw,3.6rem)] leading-tight font-semibold tracking-[-.05em] text-[#0a2038]">
              Explore more TruMinds AI services.
            </h2>
            <Link href="/#truform" className="inline-flex items-center gap-2 border-b border-[#0068a5] pb-2 text-base font-semibold text-[#0068a5] hover:text-[#004f80]">
              View all services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {otherServices.map((item) => (
              <Link
                href={`/truminds-ai/${item.slug}`}
                key={item.slug}
                className="group relative flex min-h-72 items-end overflow-hidden rounded-[1.5rem] bg-[#092b42] p-7 text-white shadow-[0_16px_35px_rgba(5,50,74,.12)] transition-[translate,scale,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_26px_50px_rgba(5,50,74,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] focus-visible:-translate-y-2 motion-reduce:transition-none"
              >
                <Image src={item.image} alt="" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-[scale] duration-700 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none" style={{ objectPosition: item.imagePosition }} />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071f35]/95 via-[#071f35]/30 to-transparent" />
                <span className="relative z-10 flex w-full items-end justify-between gap-4">
                  <span>
                    <strong className="block text-2xl font-semibold">{item.title}</strong>
                    <span className="mt-2 block max-w-100 text-base leading-snug text-white/85">{item.shortDescription}</span>
                  </span>
                  <ArrowUpRight className="size-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
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
