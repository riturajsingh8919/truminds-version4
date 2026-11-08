import therapeuticCatalog from "@/data/therapeutic-catalog.json";
import productCatalog from "@/data/truform-catalog.json";
import givingBackCatalog from "@/data/giving-back-catalog.json";

export type HeaderLink = { label: string; href: string };
export type HeaderItem = HeaderLink & { children?: HeaderLink[]; activePrefixes?: string[] };

export const headerNavigation: HeaderItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", children: [
    { label: "Full-service CRO", href: "/services/full-service-cro" },
    { label: "TruMinds AI", href: "/services/truminds-ai" },
    { label: "FSP services", href: "/services/fsp-services" },
    { label: "Clinical staffing", href: "/services/clinical-staffing" },
  ] },
  { label: "Therapeutic Areas", href: "/therapeutic-areas", children: therapeuticCatalog.map(area => ({ label: area.title, href: `/therapeutic-areas/${area.slug}` })) },
  { label: "Products", href: "/products", activePrefixes: ["/truminds-ai/"], children: productCatalog.map(product => ({ label: product.title, href: `/truminds-ai/${product.slug}` })) },
  { label: "Giving Back", href: "/giving-back", children: givingBackCatalog.map(area => ({ label: area.title, href: `/giving-back/${area.slug}` })) },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact-us" },
];

export function isHeaderItemActive(pathname: string, item: HeaderItem) {
  return pathname === item.href || pathname.startsWith(`${item.href}/`) || Boolean(item.activePrefixes?.some(prefix => pathname.startsWith(prefix)));
}
