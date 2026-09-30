import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Database,
  FileCheck2,
  FileText,
  HeartHandshake,
  Layers3,
  Microscope,
  Network,
  ScanHeart,
  ShieldCheck,
  Shuffle,
} from "lucide-react";
import {
  bodyCopy,
  eyebrow,
  eyebrowLine,
  lede,
  section,
  shell,
  tealButton,
  textLink,
  title,
} from "@/lib/site-styles";

const photo = "/images/editorial/";
const services = [
  {
    number: "01",
    title: "Full-service CRO",
    description:
      "Clinical operations, biometrics, safety and regulatory expertise across the development journey.",
    image: "services-cro.jpg",
    alt: "Clinicians reviewing a study together",
    href: "/#consultation",
  },
  {
    number: "02",
    title: "TruMinds AI",
    description:
      "Purposeful technology that helps teams work with clinical data more clearly and efficiently.",
    image: "services-ai.jpg",
    alt: "Clinical researchers reviewing information at a computer",
    href: "/#truform",
  },
  {
    number: "03",
    title: "FSP services",
    description:
      "Specialist teams that work alongside yours, with the flexibility to adapt as programs evolve.",
    image: "services-fsp.jpg",
    alt: "Scientists discussing research in a laboratory",
    href: "/#consultation",
  },
  {
    number: "04",
    title: "Clinical staffing",
    description:
      "Experienced clinical and technical professionals matched to the work that matters most.",
    image: "services-staffing.jpg",
    alt: "Doctor speaking with a patient in a clinical office",
    href: "/#consultation",
  },
];
const modules = [
  { title: "EDC", detail: "Electronic data capture", icon: Database },
  { title: "SDTM", detail: "Study data standards", icon: Layers3 },
  { title: "ADaM", detail: "Analysis-ready datasets", icon: BarChart3 },
  { title: "TLF", detail: "Tables, listings and figures", icon: FileText },
  { title: "DocuVault", detail: "Document management", icon: FileCheck2 },
  {
    title: "eConsent",
    detail: "Digital informed consent",
    icon: ClipboardCheck,
  },
  {
    title: "Adjudication",
    detail: "Endpoint review workflows",
    icon: ScanHeart,
  },
  { title: "RBQM", detail: "Risk-based quality oversight", icon: ShieldCheck },
  { title: "CTMS", detail: "Trial management", icon: Network },
  { title: "RTSM", detail: "Randomization and supply", icon: Shuffle },
];
const areas = [
  {
    title: "Oncology & Hematology",
    image: "area-oncology.jpg",
    detail: "Research built around complex evidence and evolving care.",
  },
  {
    title: "Cardiovascular",
    image: "area-cardiovascular.jpg",
    detail: "Thoughtful support for cardiovascular development programs.",
  },
  {
    title: "Neuroscience",
    image: "area-neuroscience.jpg",
    detail: "Clearer data pathways for complex CNS studies.",
  },
  {
    title: "Immunology",
    image: "area-immunology.jpg",
    detail: "Clinical expertise for changing immune science.",
  },
  {
    title: "Infectious Diseases",
    image: "area-infectious.jpg",
    detail: "Agile research support when timing and rigor matter.",
  },
  {
    title: "Rare Diseases",
    image: "area-rare.jpg",
    detail: "Careful execution when every data point counts.",
  },
  {
    title: "Endocrinology",
    image: "area-endocrinology.jpg",
    detail: "Evidence-centered support across metabolic research.",
  },
  {
    title: "Ophthalmology",
    image: "area-ophthalmology.jpg",
    detail: "Specialist attention to precise clinical endpoints.",
  },
];
const insights = [
  {
    category: "Clinical data",
    title: "Making clinical data ready for the next decision",
    description: "How clear data standards support more confident study teams.",
    image: "resources.jpg",
    href: "/resources#clinical-data",
  },
  {
    category: "Study delivery",
    title: "The value of connected clinical operations",
    description:
      "Why coordination across functions matters from study startup to submission.",
    image: "services-fsp.jpg",
    href: "/resources#study-delivery",
  },
  {
    category: "Technology",
    title: "Where technology can simplify trial work",
    description:
      "Practical opportunities to reduce manual steps in clinical research.",
    image: "services-ai.jpg",
    href: "/resources#technology",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`${eyebrow} ${light ? "text-[#80e6df]" : ""}`}>
      <span className={eyebrowLine} />
      {children}
    </p>
  );
}
function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={textLink} href={href}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative isolate flex min-h-190 items-end overflow-hidden bg-[#07192e] text-white md:min-h-[min(850px,86vh)] md:items-center"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={photo + "hero-team.jpg"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/editorial/hero-team.jpg"
          aria-hidden="true"
        >
          <source src="/videos/clinical-research-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,25,46,.55),rgba(7,25,46,.65)_38%,#07192e_100%)] md:bg-[linear-gradient(90deg,#07192e_0%,rgba(7,25,46,.96)_26%,rgba(7,25,46,.66)_55%,rgba(7,25,46,.24)_100%)]" />
      <div className={`${shell} relative z-10 pb-16 pt-64 md:py-28`}>
        <Eyebrow light>TruMinds Clinical</Eyebrow>
        <h1
          id="home-title"
          className="max-w-5xl text-[clamp(2.35rem,5.9vw,5.4rem)] leading-[1.06] font-semibold tracking-[-.04em]"
        >
          <span className="block">Contract Research</span>
          <span className="block">Organization Partner</span>
          <span className="block text-[#79dcd5]">for All Your Services</span>
        </h1>
        <p className="mt-8 mb-8 max-w-147.5 text-[clamp(1.1rem,1.55vw,1.4rem)] leading-relaxed text-[#dce8ef]">
          An experienced clinical research partner bringing people, science and
          technology together for the work ahead.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className={tealButton} href="/#consultation">
            Start a conversation <ArrowRight size={18} />
          </Link>
          <Link
            className="inline-flex min-h-14 items-center justify-center rounded-sm border border-white/60 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            href="/#services"
          >
            Explore our services
          </Link>
        </div>
      </div>
      <Link
        href="/#about-us"
        className="absolute right-[4vw] bottom-8 hidden items-center gap-3 text-xs tracking-wider uppercase md:flex"
      >
        Discover more <ArrowDownRight size={20} />
      </Link>
    </section>
  );
}

export function AboutSection() {
  const proof = [
    { value: "25+", label: "years of combined clinical research expertise" },
    {
      value: "6 / 10",
      label: "top pharmaceutical companies in our client base",
    },
    { value: "I–IV", label: "clinical trial phases supported" },
    { value: "4", label: "core markets served across life sciences" },
  ];
  return (
    <section id="about-us" aria-labelledby="about-title" className={section}>
      <div className={shell}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <Eyebrow>About us</Eyebrow>
            <h2 id="about-title" className={title}>
              Trusted by Experience.
              <br />
              <span className="text-[#0068a5]">Driven by Results.</span>
            </h2>
            <p className={`${lede} mt-8 mb-5`}>
              A global clinical research partner combining scientific expertise,
              technology and operational excellence across the clinical
              development journey.
            </p>
            <p className={`${bodyCopy} mb-8`}>
              TruMinds Clinical supports pharmaceutical, biotechnology, CRO and
              medical device organizations with services tailored to each
              program. Our teams connect clinical operations, biometrics and
              specialized talent to help research move forward with clarity.
            </p>
            <TextLink href="/#services">Discover our approach</TextLink>
          </div>
          <div className="relative">
            <div className="relative aspect-[1.17] overflow-hidden bg-slate-100">
              <Image
                src={photo + "about-lab.jpg"}
                alt="Scientists collaborating at a laboratory bench"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 bg-[#0068a5] px-5 py-4 text-sm font-semibold text-white shadow-lg">
              <Microscope size={18} />
              Science with people at its center
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 border-t border-l border-[#dce6eb]">
          {proof.map((item, index) => (
            <div
              className="flex min-h-42.5 flex-col border-r border-b border-[#dce6eb] bg-[#f8fbfc] p-5 md:min-h-48.75 md:p-8"
              key={item.label}
            >
              <span className="text-[.7rem] font-extrabold tracking-widest text-[#7895a4]">
                0{index + 1}
              </span>
              <strong className="mt-auto text-[clamp(2.5rem,5vw,5rem)] leading-none font-semibold tracking-[-.07em] text-[#0068a5]">
                {item.value}
              </strong>
              <span className="mt-2 text-sm leading-snug text-[#324f63]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={`${section} bg-[#08253d]`}
    >
      <div className={shell}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow light>Services & solutions</Eyebrow>
            <h2 id="services-title" className={`${title} text-white`}>
              The right expertise,
              <br />
              <span className="text-[#6addd8]">at every stage.</span>
            </h2>
          </div>
          <p className="max-w-97.5 text-[1.07rem] leading-relaxed text-[#b8c9d7]">
            From full-service delivery to embedded specialist teams, we shape
            our support around the needs of your study.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.number}
              className="group relative flex min-h-90 flex-col justify-between overflow-hidden bg-[#0b3546] p-7 text-white md:min-h-105 md:p-9"
            >
              <Image
                src={photo + service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,31,45,.2),rgba(2,37,48,.28)_35%,rgba(2,28,43,.95)_100%)] transition-colors duration-500 group-hover:bg-[#023f46]/80" />
              <span className="relative text-xs font-bold tracking-widest text-white/85">
                {service.number} / 04
              </span>
              <span className="relative block">
                <strong className="block max-w-lg text-[clamp(1.9rem,2.5vw,2.8rem)] leading-tight font-semibold">
                  {service.title}
                </strong>
                <span className="mt-3 block max-w-lg text-base leading-relaxed text-white/85">
                  {service.description}
                </span>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#8fe8e1] transition-all group-hover:gap-5">
                  Explore this service <ArrowRight size={18} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section
      id="truform"
      aria-labelledby="platform-title"
      className={`${section} bg-[#f2f8f9]`}
    >
      <div
        className={`${shell} grid items-start gap-12 xl:grid-cols-[.75fr_1.25fr] xl:gap-20`}
      >
        <div className="xl:sticky xl:top-36">
          <Eyebrow>TruMinds AI</Eyebrow>
          <h2 id="platform-title" className={title}>
            One connected
            <br />
            <span className="text-[#0068a5]">clinical ecosystem.</span>
          </h2>
          <p className={`${lede} mt-8`}>
            Meet TruForm, the unified eClinical platform that connects study
            operations, data and delivery.
          </p>
          <p className={`${bodyCopy} my-5`}>
            Ten complementary capabilities work together across the clinical
            trial lifecycle, giving teams a clearer path from capture to
            submission.
          </p>
          <TextLink href="/#consultation">Talk to us about TruForm</TextLink>
        </div>
        <div className="overflow-hidden border border-[#d8e8eb] bg-white shadow-[0_25px_70px_rgba(6,44,65,.08)]">
          <div className="flex flex-wrap items-center gap-4 bg-[#092b42] p-6 text-white md:p-8">
            <span className="grid size-11 place-items-center bg-[#02bbb4] text-[#092b42]">
              <Activity size={24} />
            </span>
            <div>
              <span className="block text-[.65rem] font-bold tracking-widest text-[#9ad9d7] uppercase">
                The unified eClinical platform
              </span>
              <strong className="text-2xl">TruForm</strong>
            </div>
            <span className="ml-auto border border-white/25 px-3 py-2 text-xs">
              10 connected modules
            </span>
          </div>
          <div className="grid sm:grid-cols-2">
            {modules.map(({ title: name, detail, icon: Icon }, index) => (
              <div
                className="group flex min-h-26 items-center gap-4 border-r border-b border-[#e2edf0] p-4 transition-colors hover:bg-[#eaf7f7] md:p-5"
                key={name}
              >
                <span className="self-start text-[.65rem] font-bold text-[#8ca4ae]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-10 shrink-0 place-items-center bg-[#e7f5f5] text-[#008d99]">
                  <Icon size={21} />
                </span>
                <span className="min-w-0">
                  <strong className="block text-[.98rem] text-[#0b3048]">
                    TruForm {name}
                  </strong>
                  <small className="text-xs text-[#64808d]">{detail}</small>
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 text-center text-xs font-bold tracking-wider text-[#557687] uppercase">
            Connected from study setup to submission
          </div>
        </div>
      </div>
    </section>
  );
}

export function TherapeuticSection() {
  return (
    <section
      id="therapeutic-areas"
      aria-labelledby="areas-title"
      className={section}
    >
      <div className={shell}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>Therapeutic areas</Eyebrow>
            <h2 id="areas-title" className={title}>
              Expertise shaped
              <br />
              <span className="text-[#0068a5]">around the science.</span>
            </h2>
          </div>
          <p className="max-w-97.5 text-[1.07rem] leading-relaxed text-[#62798a]">
            Thoughtful clinical support across specialized fields, with the
            flexibility to meet each study on its own terms.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Link
              href="/#consultation"
              key={area.title}
              className="group relative flex aspect-[.88] min-h-75 flex-col justify-end overflow-hidden bg-[#163a48] p-6 text-white"
            >
              <Image
                src={photo + area.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,34,48,.08),rgba(1,34,48,.82))] transition-colors duration-500 group-hover:bg-[#023a41]/90 group-focus-visible:bg-[#023a41]/90" />
              <span className="relative z-10">
                <span className="block text-xs font-bold text-[#9ce8e3]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="mt-2 block text-[clamp(1.4rem,1.75vw,1.8rem)] leading-tight font-semibold">
                  {area.title}
                </strong>
                <span className="mt-3 block max-h-0 overflow-hidden text-sm leading-relaxed opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100">
                  {area.detail}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#9ce8e3]">
                  Discuss your study <ArrowRight size={16} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GivingBackSection() {
  return (
    <section
      id="giving-back"
      aria-labelledby="giving-title"
      className="bg-[#eef6f6]"
    >
      <div
        className={`${shell} grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28`}
      >
        <div className="relative aspect-[1.18] overflow-hidden">
          <Image
            src={photo + "giving-back.jpg"}
            alt="Community volunteers sharing supplies"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>Giving back</Eyebrow>
          <HeartHandshake
            size={36}
            className="mb-5 text-[#02aaa8]"
            strokeWidth={1.3}
          />
          <h2 id="giving-title" className={title}>
            Progress means
            <br />
            <span className="text-[#0068a5]">more together.</span>
          </h2>
          <p className={`${lede} my-7`}>
            The work we do in clinical research is rooted in people. Our
            commitment to giving back reflects that same belief in care,
            connection and opportunity.
          </p>
          <TextLink href="/giving-back">Explore Giving Back</TextLink>
        </div>
      </div>
    </section>
  );
}

export function PurposeSection() {
  const cards = [
    {
      label: "Non-profit",
      title: "A wider view of impact.",
      text: "Learn about the values behind our community-focused work and the difference we hope to support.",
      image: "non-profit.jpg",
      alt: "Volunteers organizing donations",
      href: "/non-profit",
      cta: "Explore our non-profit focus",
    },
    {
      label: "Resources",
      title: "Ideas for better research.",
      text: "Explore perspectives on clinical data, study delivery and practical technology for life sciences.",
      image: "resources.jpg",
      alt: "Researcher working with a microscope",
      href: "/resources",
      cta: "Browse resources",
    },
  ];
  return (
    <section aria-labelledby="purpose-title" className={section}>
      <div className={shell}>
        <Eyebrow>Beyond the study</Eyebrow>
        <h2 id="purpose-title" className={`${title} mb-12`}>
          Explore what
          <br />
          <span className="text-[#0068a5]">moves us forward.</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <article
              id={card.label === "Non-profit" ? "non-profit" : "resources"}
              className="group overflow-hidden bg-[#f5f9fa]"
              key={card.label}
            >
              <div className="relative aspect-[1.65] overflow-hidden">
                <Image
                  src={photo + card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-9">
                <span className="text-xs font-bold tracking-widest text-[#008394] uppercase">
                  0{index + 1} / {card.label}
                </span>
                <h3 className="mt-3 text-[clamp(1.65rem,2.2vw,2.25rem)] font-semibold tracking-tight text-[#0a2940]">
                  {card.title}
                </h3>
                <p className="mt-3 mb-6 max-w-lg leading-relaxed text-[#617a87]">
                  {card.text}
                </p>
                <TextLink href={card.href}>{card.cta}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className={`${section} bg-[#f2f7f8]`}
    >
      <div className={shell}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>TruMinds insights</Eyebrow>
            <h2 id="insights-title" className={title}>
              Perspectives for
              <br />
              <span className="text-[#0068a5]">what comes next.</span>
            </h2>
          </div>
          <TextLink href="/resources">View all resources</TextLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item, index) => (
            <Link
              href={item.href}
              key={item.title}
              className="group block bg-white pb-7 shadow-[0_12px_32px_rgba(4,40,57,.045)] transition-transform duration-300 hover:-translate-y-2 motion-safe:animate-reveal motion-safe:[animation-timeline:view()] motion-safe:[animation-range:entry_0%_entry_35%]"
            >
              <div className="relative aspect-[1.4] overflow-hidden">
                <Image
                  src={photo + item.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-0 bottom-0 grid size-12 place-items-center bg-[#0068a5] text-white transition-colors group-hover:bg-[#009e9d]">
                  <ArrowDownRight size={22} />
                </span>
              </div>
              <div className="px-6">
                <div className="mt-6 flex justify-between text-xs font-extrabold tracking-widest text-[#008493] uppercase">
                  <span>{item.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3 className="mt-4 text-[clamp(1.35rem,1.65vw,1.75rem)] leading-snug font-semibold tracking-tight text-[#0d2c42] transition-colors group-hover:text-[#0068a5]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[.98rem] leading-relaxed text-[#607a88]">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0068a5]">
                  Read perspective <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
