import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight, Globe2, Mail, MapPin, MessageSquare, Phone, UsersRound } from "lucide-react";
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
      <section aria-labelledby="contact-page-title" className="bg-[#08253d] text-white">
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="py-6 sm:py-8"><ol className="flex flex-wrap items-center gap-3 text-lg font-medium text-[#c6dfe7]"><li><Link href="/" className="transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">Home</Link></li><li className="flex items-center gap-3"><ChevronRight size={17} aria-hidden="true" /><span aria-current="page" className="text-white">Contact us</span></li></ol></nav>
          <div className="grid items-start gap-10 pt-4 pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:gap-16 lg:pt-6 lg:pb-16 xl:gap-24">
            <div className="min-w-0"><span className="mb-5 flex items-center gap-3 text-lg font-medium text-[#77dbd7]"><span className="h-px w-9 shrink-0 bg-[#77dbd7]" aria-hidden="true" />{copy.hero.eyebrow}</span><h1 id="contact-page-title" className="max-w-230 text-4xl font-semibold leading-[1.08] tracking-[-.028em] text-white [overflow-wrap:anywhere] sm:text-5xl md:text-6xl xl:text-7xl">{copy.hero.title} <span className="text-[#77dbd7]">{copy.hero.highlight}</span></h1><p className="mt-6 max-w-155 text-lg font-medium leading-[1.8] text-[#e0edf1]">{copy.hero.description}</p></div>
            <div className="min-w-0 space-y-6 lg:pt-2">
              <a href={`mailto:${contactDetails.email}`} className="group flex min-w-0 items-start gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/5 text-[#77dbd7] transition-colors duration-300 group-hover:bg-white/10 motion-reduce:transition-none"><Mail size={24} strokeWidth={1.65} aria-hidden="true" /></span><span className="min-w-0 pt-0.5"><span className="block text-lg font-medium leading-snug text-[#bcd7e1]">{copy.hero.emailLabel}</span><span className="mt-2 block text-lg font-medium leading-relaxed text-white transition-colors group-hover:text-[#77dbd7]">{emailName}@<wbr />{emailDomain}</span></span></a>
              <a href={contactDetails.phoneHref} className="group flex items-start gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/5 text-[#77dbd7] transition-colors duration-300 group-hover:bg-white/10 motion-reduce:transition-none"><Phone size={24} strokeWidth={1.65} aria-hidden="true" /></span><span className="min-w-0 pt-0.5"><span className="block text-lg font-medium leading-snug text-[#bcd7e1]">{copy.hero.phoneLabel}</span><span className="mt-2 block whitespace-nowrap text-lg font-medium leading-relaxed text-white transition-colors group-hover:text-[#77dbd7]">{contactDetails.phone}</span></span></a>
              <Link href="#our-offices" className="group inline-flex min-h-12 items-center gap-3 border-b border-[#77dbd7]/60 pb-2 text-lg font-medium text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{copy.hero.officeLabel}<ArrowDownRight size={21} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

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
