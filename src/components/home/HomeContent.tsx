import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HeartHandshake } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { AboutImageMosaic } from "@/components/home/AboutImageMosaic";
import { AiServicesCarousel } from "@/components/home/AiServicesCarousel";
import { NonProfitVisual } from "@/components/home/NonProfitVisual";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TherapeuticAreaCard } from "@/components/home/TherapeuticAreaCard";
import { services } from "@/lib/services";
import { therapeuticAreas } from "@/lib/therapeutic-areas";
import { lede, section, shell, textLink, title } from "@/lib/site-styles";

const photo = "/images/editorial/";
const heroStats = [
  { value: "25+", label: "Years" },
  { value: "Phase I–IV", label: "Experience" },
  { value: "Global", label: "Expertise" },
];
const insights = [
  {
    category: "Clinical data",
    title: "Making clinical data ready for the next decision",
    description: "How clear data standards support more confident study teams.",
    image: "resources.jpg",
    imagePosition: "center",
    href: "/resources#clinical-data",
  },
  {
    category: "Study delivery",
    title: "The value of connected clinical operations",
    description:
      "Why coordination across functions matters from study startup to submission.",
    image: "services-fsp.jpg",
    imagePosition: "52% center",
    href: "/resources#study-delivery",
  },
  {
    category: "Technology",
    title: "Where technology can simplify trial work",
    description:
      "Practical opportunities to reduce manual steps in clinical research.",
    image: "services-ai.jpg",
    imagePosition: "55% center",
    href: "/resources#technology",
  },
];

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
      className="relative isolate overflow-hidden bg-[#073344] text-white"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/hero/modern-molecular-poster.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[60%_center] lg:object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] lg:object-center motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/modern-molecular-poster.jpg"
          aria-hidden="true"
        >
          <source
            src="/modern-3d-molecular-structure-connecting-animation-2026-10-03-17-06-57-utc.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,31,45,.78)_0%,rgba(4,31,45,.68)_38%,rgba(4,31,45,.30)_60%,transparent_82%)] max-md:bg-[linear-gradient(90deg,rgba(4,31,45,.76),rgba(4,31,45,.58))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#073344]/60 to-transparent" />
      <div
        className={`${shell} relative z-10 flex min-h-130 items-center py-20 sm:min-h-145 sm:py-24 lg:min-h-[clamp(520px,65svh,690px)] lg:py-28`}
      >
        <div className="w-full min-w-0 max-w-290">
          <h1
            id="home-title"
            className="text-[clamp(1.75rem,8vw,3.25rem)] leading-[1.04] font-semibold tracking-[-.045em] text-white text-shadow-[0_2px_20px_rgba(4,31,45,.16)] md:text-[clamp(3.5rem,5.6vw,6.25rem)]"
          >
            <span className="block whitespace-nowrap">Your partner in</span>
            <span className="block whitespace-nowrap">clinical research.</span>
          </h1>
          <p className="mt-7 max-w-152 text-xl leading-[1.65] font-bold text-white">
            Clinical operations, biometrics and connected technology—bringing
            the right expertise to every stage of your study.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <AnimatedPillLink
              href="/#services"
              label="Explore our services"
              variant="light"
              size="large"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/20 bg-[#063043]/80 backdrop-blur-md">
        <ul
          className={`${shell} grid grid-cols-3 py-5 md:py-6`}
          aria-label="TruMinds Clinical highlights"
        >
          {heroStats.map((stat) => (
            <li
              className="flex min-h-14 flex-col justify-center gap-1 border-r border-white/20 px-3 first:pl-0 last:border-r-0 sm:px-6 lg:flex-row lg:items-baseline lg:justify-start lg:gap-3 lg:px-9"
              key={stat.label}
            >
              <span className="whitespace-nowrap text-[clamp(1.15rem,2.2vw,1.9rem)] leading-tight font-semibold tracking-[-.035em] text-white">
                {stat.value}
              </span>
              <span className="text-base font-medium text-[#e0f0f2]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutSection() {
  const proof = [
    { value: "25+", label: "Years of combined clinical expertise" },
    {
      value: "6 / 10",
      label: "Top pharmaceutical companies served",
    },
    { value: "I–IV", label: "Clinical trial phases supported" },
    { value: "4", label: "Life sciences markets served" },
  ];
  return (
    <section id="about-us" aria-labelledby="about-title" className={section}>
      <div className={shell}>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.94fr)_minmax(0,1.06fr)] lg:gap-8 xl:gap-16">
          <div className="max-w-150">
            <h2
              id="about-title"
              className="text-[clamp(2.45rem,3.25vw,3.65rem)] leading-[1.08] font-semibold tracking-[-.052em] text-[#0a2038]"
            >
              Experience that moves
              <br />
              <span className="text-[#0068a5]">research forward.</span>
            </h2>
            <p className="mt-7 max-w-140 text-[clamp(1.075rem,1.25vw,1.23rem)] leading-[1.65] text-[#38546a]">
              TruMinds Clinical brings clinical operations, biometrics and
              specialist teams together across phases I–IV. We shape the right
              expertise around each study so research moves forward with
              clarity.
            </p>
            <div className="mt-6">
              <TextLink href="/#services">Explore how we work</TextLink>
            </div>
            <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8">
              {proof.map((item) => (
                <div className="flex flex-col" key={item.label}>
                  <dt className="order-2 mt-2 max-w-52 text-base leading-snug text-[#587084]">
                    {item.label}
                  </dt>
                  <dd className="order-1 text-[clamp(2.25rem,3.8vw,3.5rem)] leading-none font-semibold tracking-[-.06em] text-[#0068a5]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0 w-full lg:justify-self-end">
            <AboutImageMosaic />
          </div>
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
            <h2 id="services-title" className={`${title} text-white`}>
              The right expertise,
              <br />
              <span className="text-[#6addd8]">at every stage.</span>
            </h2>
          </div>
          <p className="max-w-97.5 text-base leading-relaxed text-[#b8c9d7] md:text-lg">
            From full-service delivery to embedded specialist teams, we shape
            our support around the needs of your study.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              hoverDescription={service.hoverDescription}
              image={service.image}
              alt={service.imageAlt}
              imagePosition={service.imagePosition}
              href={`/services/${service.slug}`}
              key={service.slug}
            />
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
      className={`${section} overflow-hidden bg-[#f2f8f9]`}
    >
      <div className={shell}>
        <div className="mx-auto max-w-275 text-center">
          <h2
            id="platform-title"
            className="text-[clamp(2rem,3.2vw,3.75rem)] leading-[1.08] font-semibold tracking-[-.052em] text-[#0a2038] md:whitespace-nowrap"
          >
            One connected{" "}
            <span className="text-[#0068a5]">clinical ecosystem.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-200 text-base leading-relaxed text-[#47667b] md:text-lg">
            Meet TruForm, the connected eClinical platform within TruMinds AI.
            Ten capabilities work together across the clinical trial lifecycle,
            from study setup and data capture through analysis and reporting.
          </p>
        </div>
        <AiServicesCarousel />
      </div>
    </section>
  );
}

export function TherapeuticSection() {
  const stagger = [
    "xl:translate-y-0",
    "sm:translate-y-5 xl:translate-y-8",
    "xl:translate-y-3",
    "sm:translate-y-5 xl:translate-y-10",
  ];

  return (
    <section
      id="therapeutic-areas"
      aria-labelledby="areas-title"
      className={`${section} bg-[#08253d]`}
    >
      <div className={shell}>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 id="areas-title" className={`${title} text-white`}>
              Focused expertise
              <br />
              <span className="text-[#6addd8]">across therapeutic areas.</span>
            </h2>
          </div>
          <p className="max-w-110 text-base leading-relaxed text-[#b8c9d7] md:text-lg">
            Each condition calls for its own questions, endpoints and ways of
            working. Our teams shape the research around those needs.
          </p>
        </div>
        <div className="grid gap-5 pb-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {therapeuticAreas.map((area, index) => (
            <div
              className={`relative min-w-0 hover:z-20 ${stagger[index % stagger.length]}`}
              key={area.title}
            >
              <TherapeuticAreaCard
                title={area.title}
                description={area.detail}
                image={area.image}
                imagePosition={area.imagePosition}
                href={`/therapeutic-areas/${area.slug}`}
              />
            </div>
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
      className="bg-white"
    >
      <div
        className={`${shell} grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28`}
      >
        <div className="min-w-0 w-full">
          <AboutImageMosaic
            imageSrc="/images/editorial/giving-back.jpg"
            imageAlt="Community volunteers sharing supplies"
            imageAspectRatio={1400 / 933}
          />
        </div>
        <div>
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
  return (
    <section
      id="non-profit"
      aria-labelledby="purpose-title"
      className={`${section} bg-gray-100`}
    >
      <div className={shell}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <div className="relative">
            <h2 id="purpose-title" className={title}>
              Explore what
              <br />
              <span className="text-[#0068a5]">moves us forward.</span>
            </h2>
            <p className={`${lede} mt-7`}>
              A wider view of impact starts with people and the communities
              around them.
            </p>
            <p className="mt-6 max-w-140 text-base leading-[1.8] text-[#587084]">
              Our non-profit focus gives the values behind our work a place to
              grow. Learn how people, partnership and access shape the way we
              think about progress beyond clinical research.
            </p>
            <div className="mt-9">
              <TextLink href="/non-profit">
                Explore our non-profit focus
              </TextLink>
            </div>
          </div>
          <NonProfitVisual className="lg:mx-0 lg:justify-self-start" />
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
            <h2 id="insights-title" className={title}>
              Perspectives for
              <br />
              <span className="text-[#0068a5]">what comes next.</span>
            </h2>
          </div>
          <TextLink href="/resources">View all resources</TextLink>
        </div>
        <div className="grid items-stretch gap-8 md:grid-cols-3 md:gap-5 xl:gap-7">
          {insights.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="group flex min-w-0 flex-col transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none"
            >
              <div className="relative aspect-[1.36] overflow-hidden rounded-3xl bg-[#dce9ec] shadow-[0_16px_35px_rgba(9,52,72,.13)] transition-shadow duration-700 group-hover:shadow-[0_24px_48px_rgba(9,52,72,.21)] group-focus-visible:shadow-[0_24px_48px_rgba(9,52,72,.21)] motion-reduce:transition-none">
                <Image
                  src={photo + item.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1479px) 33vw, 460px"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.055] group-focus-visible:scale-[1.055] motion-reduce:transition-none"
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full border border-white/70 bg-white/90 text-[#0068a5] shadow-[0_8px_22px_rgba(5,39,59,.15)] backdrop-blur-sm transition-[background-color,color,transform] duration-300 group-hover:-translate-y-1 group-hover:bg-[#0068a5] group-hover:text-white group-focus-visible:-translate-y-1 group-focus-visible:bg-[#0068a5] group-focus-visible:text-white motion-reduce:transition-none">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="relative z-10 mx-3 -mt-4 flex flex-1 flex-col rounded-[1.25rem] border border-[#e0eaed] bg-white px-6 pt-7 pb-6 shadow-[0_14px_32px_rgba(9,52,72,.065)] transition-shadow duration-700 group-hover:shadow-[0_23px_42px_rgba(9,52,72,.13)] group-focus-visible:shadow-[0_23px_42px_rgba(9,52,72,.13)] sm:px-7 motion-reduce:transition-none">
                <span className="text-xs font-bold tracking-[.14em] text-[#008995] uppercase">
                  {item.category}
                </span>
                <h3 className="mt-4 text-[clamp(1.45rem,1.75vw,1.85rem)] leading-[1.18] font-semibold tracking-[-.035em] text-[#0d2c42] transition-colors duration-300 group-hover:text-[#0068a5] group-focus-visible:text-[#0068a5]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-[1.65] text-[#607a88]">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-base font-semibold text-[#0068a5]">
                  Read perspective
                  <ArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    size={18}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
