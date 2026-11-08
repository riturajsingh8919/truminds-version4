import Link from "next/link";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { givingBackCopy } from "@/lib/giving-back";

type GivingBackHeroProps = {
  pagePath: string;
  title: string;
  highlight?: string;
  headline?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  icon?: string;
  inner?: boolean;
};

const action = "inline-flex min-h-11 items-center border-b border-[#0068a5] text-lg font-medium text-[#0068a5] transition-colors hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]";

export function GivingBackHero({ title, highlight, headline, description, pagePath, inner = false }: GivingBackHeroProps) {
  return (
    <InnerPageHero titleId="giving-page-title" title={title} highlight={highlight} breadcrumbLabel={inner ? title : givingBackCopy.givingBackLabel} concept={headline} description={description} pagePath={pagePath} eyebrow={givingBackCopy.givingBackLabel} parent={inner ? { label: givingBackCopy.givingBackLabel, href: "/giving-back" } : { label: "Home", href: "/" }} actions={<>
      <Link href={inner ? "#giving-focus" : "#giving-pathways"} className={action}>{inner ? givingBackCopy.initiativesAction : givingBackCopy.pathwaysAction}</Link>
      <Link href={inner ? "#giving-overview" : "#giving-purpose"} className="inline-flex min-h-11 items-center text-lg font-medium text-[#234b61] underline underline-offset-4 hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{givingBackCopy.overviewAction}</Link>
    </>} />
  );
}
