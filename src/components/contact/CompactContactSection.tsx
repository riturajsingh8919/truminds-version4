import { Mail, Phone } from "lucide-react";
import { CompactContactForm } from "@/components/contact/CompactContactForm";
import { contactDetails } from "@/lib/contact";
import { shell } from "@/lib/site-styles";

export function CompactContactSection() {
  const [name, domain] = contactDetails.email.split("@");
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-[#082b3e] py-10 text-white md:py-12" data-compact-contact>
      <div className={`${shell} grid items-center gap-7 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-12`}>
        <div className="min-w-0"><span className="text-lg font-medium text-[#8ce3de]">Contact our team</span><h2 id="contact-title" className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">Let&apos;s talk about your program.</h2><p className="mt-4 max-w-130 text-lg font-medium leading-relaxed text-[#d0e3e9]">Share your question and we will help connect you with the right expertise.</p><div className="mt-5 grid gap-3"><a href={`mailto:${contactDetails.email}`} className="inline-flex w-fit max-w-full items-start gap-3 text-lg font-medium text-white transition-colors hover:text-[#8ce3de] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8ce3de]"><Mail size={20} className="mt-1 shrink-0 text-[#8ce3de]" aria-hidden="true" /><span className="min-w-0">{name}@<wbr />{domain}</span></a><a href={contactDetails.phoneHref} className="inline-flex w-fit items-center gap-3 text-lg font-medium text-white transition-colors hover:text-[#8ce3de] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8ce3de]"><Phone size={20} className="shrink-0 text-[#8ce3de]" aria-hidden="true" />{contactDetails.phone}</a></div></div>
        <CompactContactForm />
      </div>
    </section>
  );
}
