import Link from "next/link";
import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import { therapeuticPages, therapeuticPageCopy } from "@/lib/therapeutic-pages";

const colors: Record<string, { ink: string; surface: string }> = {
  oncology: { ink: "#0068a5", surface: "#e5f2f8" },
  cardiovascular: { ink: "#b64250", surface: "#fff0f1" },
  neuroscience: { ink: "#6852a4", surface: "#f4f0ff" },
  immunology: { ink: "#007f84", surface: "#e5f7f6" },
  infectious: { ink: "#a96a15", surface: "#fff4df" },
  rare: { ink: "#4f66b3", surface: "#edf1ff" },
  endocrinology: { ink: "#337f5c", surface: "#eaf6ef" },
  ophthalmology: { ink: "#117a9a", surface: "#e8f6fb" },
};

export function TherapeuticAtlas({ currentSlug }: { currentSlug: string }) {
  return <nav aria-label={therapeuticPageCopy.atlasNavigationLabel} className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" data-therapeutic-atlas>
    {therapeuticPages.map(area => {
      const current = area.slug === currentSlug;
      const palette = colors[area.content.icon] ?? colors.oncology;
      return <Link key={area.slug} href={`/therapeutic-areas/${area.slug}`} prefetch={false} aria-current={current ? "page" : undefined} className={`group relative flex min-h-30 min-w-0 items-center gap-4 overflow-hidden rounded-2xl border p-5 transition-[border-color,background-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${current ? "border-[#123e56] bg-[#082b43]" : "border-[#d2e4e9] bg-white hover:border-[#83bdcc] hover:bg-[#f8fcfc]"}`}>
        <span className="grid size-16 shrink-0 place-items-center rounded-2xl transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none" style={{ backgroundColor: current ? "#16445d" : palette.surface, color: current ? "#8ce3de" : palette.ink }}><TherapeuticIcon name={area.content.icon} size={36} /></span>
        <span className={`min-w-0 text-[22px] font-semibold leading-snug tracking-tight ${current ? "text-white" : "text-[#12364b]"}`}>{area.title}</span>
        <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-200 ${current ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`} style={{ backgroundColor: current ? "#72d8d3" : palette.ink }} aria-hidden="true" />
      </Link>;
    })}
  </nav>;
}
