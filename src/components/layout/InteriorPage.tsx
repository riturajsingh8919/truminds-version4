import { InnerPageHero } from "@/components/layout/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bodyCopy, shell } from "@/lib/site-styles";

export function InteriorHero({ title, description, pagePath, label }: { title: string; description: string; pagePath: string; label: string }) {
  return <InnerPageHero titleId="interior-page-title" title={title} breadcrumbLabel={label} description={description} pagePath={pagePath} />;
}

export function InteriorContact() {
  return (
    <section className="bg-[#dff3f2]">
      <div
        className={`${shell} flex flex-col justify-between gap-6 py-16 md:flex-row md:items-center`}
      >
        <div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight font-semibold tracking-tight text-[#092b41]">
            Let&apos;s keep the conversation moving.
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5]"
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
      <section className="copy-on-light py-20 md:py-28">
        <div className={shell}>
          <div className="mx-auto max-w-187.5">
            <h2 className="max-w-187.5 text-4xl md:text-5xl xl:text-6xl leading-[1.1] font-semibold tracking-tight text-[#0a2940]">
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
        <section className="copy-on-light bg-[#f2f8f9] py-20 md:py-24">
          <div className={shell}>
            <h2 className="sr-only">Guiding principles</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value, index) => (
                <article
                  className="border-t-2 border-[#02aaa8] bg-white p-7"
                  key={value.title}
                >
                  <span className="text-lg font-medium text-[#006b78]">
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
