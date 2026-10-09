import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  hoverDescription: string;
  image: string;
  alt: string;
  href: string;
  imagePosition: string;
};

export function ServiceCard({
  title,
  description,
  hoverDescription,
  image,
  alt,
  href,
  imagePosition,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${title}: ${hoverDescription}`}
      className="group relative isolate block transform-gpu overflow-hidden rounded-[1.75rem] bg-white text-[#0a2038] shadow-[0_18px_38px_rgba(0,8,25,.25)] ring-1 ring-white/10 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] hover:shadow-[0_32px_65px_rgba(0,8,25,.42)] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_translateY(-10px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbdf] focus-visible:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_translateY(-10px)] motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#12384d]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition-[scale] duration-1000 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="relative z-10 -mt-4 flex min-h-38 flex-col justify-center rounded-t-[1.25rem] bg-white px-5 py-5 text-center sm:px-6">
        <h3 className="text-[clamp(1.2rem,1.65vw,1.5rem)] leading-tight font-semibold tracking-[-.025em]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-base leading-[1.45] text-[#597185]">
          {description}
        </p>
      </div>
      <div aria-hidden="true" className="absolute inset-0 z-20 flex translate-y-full flex-col bg-[linear-gradient(155deg,#ffffff_0%,#f7fbfc_58%,#e4f2f5_100%)] p-6 transition-[translate] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none sm:p-7">
        <div className="translate-y-4 opacity-0 transition-[opacity,translate] duration-500 delay-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <span className="mb-5 block h-1 w-12 rounded-full bg-[#00aaa9]" />
          <strong className="block text-[clamp(1.65rem,2vw,2.15rem)] leading-tight font-semibold tracking-[-.04em]">
            {title}
          </strong>
          <p className="mt-6 text-base leading-[1.6] text-[#38546a]">
            {hoverDescription}
          </p>
        </div>
        <span className="mt-auto inline-flex items-center justify-between border-t border-[#c6dfe6] pt-5 text-base font-semibold text-[#0068a5]">
          Read more <ArrowUpRight size={21} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
