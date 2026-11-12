import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe2, Mail, MapPin, MessageSquare, Phone, UsersRound } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CountryFlag } from "@/components/common/CountryFlag";
import { WorldPresenceMap } from "@/components/home/WorldPresenceMap";
import copy from "@/data/contact-page.json";
import { contactDetails, contactOffices, officeMapUrl } from "@/lib/contact";
import { section, shell, title } from "@/lib/site-styles";

const journeyIcons = { message: MessageSquare, people: UsersRound, next: ArrowRight };

export function ContactPageContent() {
  const [emailName, emailDomain] = contactDetails.email.split("@");
  return (
    <>
      <InnerPageHero pagePath="/contact-us" titleId="contact-page-title" title={copy.hero.title} highlight={copy.hero.highlight} breadcrumbLabel="Contact us" description={copy.hero.description}>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] lg:gap-8">
          <a href={`mailto:${contactDetails.email}`} className="group flex min-w-0 items-start gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"><Mail size={23} className="mt-1 shrink-0 text-[#008995]" aria-hidden="true" /><span className="min-w-0"><span className="block text-lg font-medium leading-relaxed text-[#426272]">{copy.hero.emailLabel}</span><span className="mt-1 block text-lg font-medium leading-relaxed text-[#0068a5] group-hover:underline">{emailName}@<wbr />{emailDomain}</span></span></a>
          <a href={contactDetails.phoneHref} className="group flex min-w-0 items-start gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"><Phone size={23} className="mt-1 shrink-0 text-[#008995]" aria-hidden="true" /><span><span className="block text-lg font-medium leading-relaxed text-[#426272]">{copy.hero.phoneLabel}</span><span className="mt-1 block text-lg font-medium leading-relaxed text-[#0068a5] group-hover:underline">{contactDetails.phone}</span></span></a>
          <Link href="#our-offices" className="inline-flex min-h-11 w-fit items-center gap-3 text-lg font-medium text-[#0068a5] underline underline-offset-4 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"><MapPin size={23} className="shrink-0" aria-hidden="true" />{copy.hero.officeLabel}</Link>
        </div>
      </InnerPageHero>

      <section id="our-offices" aria-labelledby="contact-offices-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-10 xl:grid-cols-[minmax(0,.95fr)_minmax(0,1.15fr)] xl:gap-14 2xl:gap-20`}>
          <div className="min-w-0 xl:sticky xl:top-28"><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.offices.eyebrow}</span><h2 id="contact-offices-title" className={title}>{copy.offices.title}<br /><span className="text-[#0068a5]">{copy.offices.highlight}</span></h2><p className="mt-6 max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.offices.description}</p><div className="mt-8"><WorldPresenceMap showOffices={false} /></div><span className="mt-5 flex items-center gap-3 text-lg font-medium text-[#173f55]"><Globe2 size={22} className="shrink-0 text-[#008995]" aria-hidden="true" />{copy.offices.count}</span><p className="mt-3 text-lg font-medium leading-relaxed text-black">{copy.offices.mapHint}</p></div>
          <ul aria-label="TruMinds office addresses" className="grid min-w-0 gap-4 sm:grid-cols-2">
            {contactOffices.map((office, index) => {
              const wide = index === contactOffices.length - 1;
              return (
                <li key={office.id} id={`office-${office.id}`} className={`flex min-w-0 scroll-mt-28 flex-col rounded-2xl border border-[#d5e6eb] bg-[#f8fbfc] p-5 transition-colors duration-300 hover:border-[#94c8d2] motion-reduce:transition-none ${wide ? "sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6" : ""}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3"><span className="grid h-10 w-12 shrink-0 place-items-center rounded-xl border border-[#d5e5e9] bg-white"><CountryFlag code={office.flag} /></span><h3 className="min-w-0 text-2xl font-semibold tracking-tight text-[#0a2038]">{office.name}</h3></div>
                    <address className="mt-3 text-lg font-medium leading-[1.7] text-black not-italic">{office.address.map(line => <span key={line} className="block">{line}</span>)}</address>
                  </div>
                  <a href={officeMapUrl(office)} target="_blank" rel="noopener noreferrer" aria-label={`${copy.offices.directionsLabel}: ${office.name} (opens in a new tab)`} className={`group mt-3 inline-flex min-h-11 w-fit items-center gap-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-3 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${wide ? "sm:mt-0 sm:shrink-0" : ""}`}><MapPin size={19} className="shrink-0" aria-hidden="true" />{copy.offices.directionsLabel}<ArrowUpRight size={19} className="shrink-0" aria-hidden="true" /></a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="contact" aria-label="Send an enquiry to TruMinds" className="copy-on-light scroll-mt-24 bg-[#f2f8f9] py-16 md:py-20">
        <div className={shell}>
          <div className="mx-auto max-w-280 [&>form]:border [&>form]:border-[#d3e5e9] [&>form]:bg-white [&>form]:shadow-[0_14px_40px_rgba(8,43,67,.06)] [&>form]:lg:p-10"><ContactForm heading /></div>
          <div className="mx-auto mt-10 max-w-280 border-t border-[#cfe1e7] pt-7"><h2 className="text-2xl font-semibold tracking-tight text-[#0a2038]">{copy.journey.title}</h2><ol className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">{copy.journey.steps.map(step => { const Icon = journeyIcons[step.icon as keyof typeof journeyIcons]; return <li key={step.title} className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#cfe4e9] bg-white text-[#008995]"><Icon size={23} strokeWidth={1.65} aria-hidden="true" /></span><div className="min-w-0"><h3 className="text-lg font-medium leading-snug text-[#173f55]">{step.title}</h3><p className="mt-2 text-lg font-medium leading-relaxed text-black">{step.description}</p></div></li>; })}</ol></div>
        </div>
      </section>
    </>
  );
}
