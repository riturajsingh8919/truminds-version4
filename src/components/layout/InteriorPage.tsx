import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { bodyCopy, shell } from "@/lib/site-styles";

export function InteriorHero({
  title,
  description,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07192d] text-white">
      <div className="absolute inset-0 -z-20 md:left-[38%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,25,45,.25),#07192d_78%)] md:bg-[linear-gradient(90deg,#07192d_0%,#07192d_28%,rgba(7,25,45,.89)_48%,rgba(7,25,45,.24)_100%)]" />
      <div className={`${shell} py-16 md:py-24`}>
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <ArrowLeft size={17} aria-hidden="true" /> Back to home
        </Link>
        <h1 className="max-w-200 text-[clamp(3rem,5.8vw,6.5rem)] leading-[1.02] font-semibold tracking-[-.06em]">
          {title}
        </h1>
        <p className="mt-7 max-w-152.5 text-[clamp(1.1rem,1.5vw,1.35rem)] leading-relaxed text-[#d4e4ea]">
          {description}
        </p>
      </div>
    </section>
  );
}

export function InteriorContact() {
  return (
    <section className="bg-[#dff3f2]">
      <div
        className={`${shell} flex flex-col justify-between gap-6 py-16 md:flex-row md:items-center`}
      >
        <div>
          <h2 className="text-[clamp(2rem,3vw,3.2rem)] leading-tight font-semibold tracking-tight text-[#092b41]">
            Let&apos;s keep the conversation moving.
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-3 border-b border-[#0068a5] pb-2 font-bold text-[#0068a5]"
          href="/#consultation"
        >
          Get in touch <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function InteriorStory({
  title,
  paragraphs,
  values,
}: {
  title: string;
  paragraphs: string[];
  values?: { title: string; text: string }[];
}) {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className={shell}>
          <div className="mx-auto max-w-187.5">
            <h2 className="max-w-187.5 text-[clamp(2.2rem,3.3vw,3.7rem)] leading-[1.1] font-semibold tracking-tight text-[#0a2940]">
              {title}
            </h2>
            {paragraphs.map((paragraph) => (
              <p className={`${bodyCopy} mt-6 max-w-187.5`} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      {values && (
        <section className="bg-[#f2f8f9] py-20 md:py-24">
          <div className={shell}>
            <h2 className="sr-only">Guiding principles</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value, index) => (
                <article
                  className="border-t-2 border-[#02aaa8] bg-white p-7"
                  key={value.title}
                >
                  <span className="text-xs font-bold text-[#008795]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-7 text-2xl font-semibold text-[#0a2940]">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#607a88]">
                    {value.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
