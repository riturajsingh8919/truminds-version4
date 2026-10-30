import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  FlaskConical,
  Globe2,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  UsersRound,
  GraduationCap,
} from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { ConnectedDataImage } from "@/components/home/ConnectedDataImage";
import { AiServicesCarousel } from "@/components/home/AiServicesCarousel";
import { NonProfitVisual } from "@/components/home/NonProfitVisual";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TherapeuticAreaCard } from "@/components/home/TherapeuticAreaCard";
import { services } from "@/lib/services";
import { therapeuticAreas } from "@/lib/therapeutic-areas";
import { lede, section, shell, textLink, title } from "@/lib/site-styles";

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
    image: "/blog-1.jpg",
    imagePosition: "center",
    href: "/resources#clinical-data",
  },
  {
    category: "Study delivery",
    title: "The value of connected clinical operations",
    description:
      "Why coordination across functions matters from study startup to submission.",
    image: "/blog-2.jpg",
    imagePosition: "center",
    href: "/resources#study-delivery",
  },
  {
    category: "Technology",
    title: "Where technology can simplify trial work",
    description:
      "Practical opportunities to reduce manual steps in clinical research.",
    image: "/blog-3.jpg",
    imagePosition: "center",
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
      className="relative isolate flex flex-col overflow-hidden bg-[#073344] text-white lg:h-[calc(100svh-5.125rem)]"
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
          <source src="/videos/main-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,31,45,.78)_0%,rgba(4,31,45,.68)_38%,rgba(4,31,45,.30)_60%,transparent_82%)] max-md:bg-[linear-gradient(90deg,rgba(4,31,45,.76),rgba(4,31,45,.58))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#073344]/60 to-transparent" />
      <div
        className={`${shell} home-hero-content relative z-10 flex min-h-130 items-center pt-28 pb-16 sm:min-h-145 sm:pt-32 sm:pb-20 lg:min-h-0 lg:flex-1 lg:py-6 xl:py-10 2xl:py-14`}
      >
        <div className="w-full min-w-0 max-w-290">
          <h1
            id="home-title"
            className="home-hero-heading text-3xl sm:text-4xl leading-[1.06] font-semibold tracking-[-.028em] text-white text-shadow-[0_2px_20px_rgba(4,31,45,.16)] md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            <span className="block whitespace-nowrap">Your partner in</span>
            <span className="block whitespace-nowrap">clinical research.</span>
          </h1>
          <p className="home-hero-description mt-7 max-w-152 leading-[1.65] text-white lg:mt-5 xl:mt-7 text-base lg:text-xl">
            Clinical operations, biometrics and connected technology—bringing
            the right expertise to every stage of your study.
          </p>
          <div className="home-hero-actions mt-9 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6 xl:mt-8">
            <AnimatedPillLink
              href="/#services"
              label="Explore our services"
              variant="light"
              size="large"
            />
            <AnimatedPillLink
              href="/#contact"
              label="Talk to Our Experts"
              variant="dark"
              size="large"
            />
          </div>
        </div>
      </div>
      <div className="home-hero-stats relative z-10 border-t border-white/20 bg-[#063043]/80 backdrop-blur-md">
        <ul
          className={`${shell} grid grid-cols-3 py-5 md:py-6 lg:py-3 xl:py-5`}
          aria-label="TruMinds Clinical highlights"
        >
          {heroStats.map((stat) => (
            <li
              className="flex min-h-14 flex-col justify-center gap-1 border-r border-white/20 px-3 first:pl-0 last:border-r-0 sm:px-6 lg:flex-row lg:items-center lg:justify-start lg:gap-3 lg:px-9"
              key={stat.label}
            >
              <span className="whitespace-nowrap text-lg sm:text-xl lg:text-2xl 2xl:text-3xl leading-tight font-semibold tracking-[-.035em] text-white">
                {stat.value}
              </span>
              <span className="text-lg font-medium text-[#e0f0f2]">
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
    {
      value: "25+",
      label: "Years of combined clinical expertise",
      icon: Award,
    },
    {
      value: "6 / 10",
      label: "Top pharmaceutical companies served",
      icon: Building2,
    },
    {
      value: "I–IV",
      label: "Clinical trial phases supported",
      icon: FlaskConical,
    },
    { value: "4", label: "Life sciences markets served", icon: Globe2 },
  ];

  return (
    <section
      id="about-us"
      aria-labelledby="about-title"
      className={`${section} copy-on-light`}
    >
      <div className={shell}>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.94fr)_minmax(0,1.06fr)] lg:gap-8 xl:gap-16">
          <div className="relative">
            <h2
              id="about-title"
              className="text-4xl md:text-5xl xl:text-6xl leading-[1.12] font-semibold tracking-tight text-[#0a2038]"
            >
              Experience that moves{" "}
              <span className="text-[#0068a5]">research forward.</span>
            </h2>
            <p className="mt-7 max-w-140 text-lg leading-[1.65] text-[#38546a]">
              TruMinds Clinical brings clinical operations, biometrics and
              specialist teams together across phases I–IV. We shape the right
              expertise around each study so research moves forward with
              clarity.
            </p>
            <div className="mt-6">
              <AnimatedPillLink
                href="/about-us"
                label="Learn More"
                variant="dark"
                size="large"
              />
            </div>
            <div className="mt-10 grid max-w-150 gap-3 sm:grid-cols-2">
              {proof.map(({ value, label, icon: Icon }, index) => {
                const featured = index === 0;

                return (
                  <div
                    className={`group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(9,45,69,.12)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-44 ${featured ? "border-[#092d45] bg-[#092d45] hover:border-[#58d5d6] hover:bg-[#0b3850]" : "border-[#d4e5e9] bg-[#f6fafb] hover:border-[#86cbd5] hover:bg-[#eef8fa]"}`}
                    key={label}
                  >
                    <span
                      className={`absolute top-0 left-0 h-1 w-0 transition-[width] duration-300 group-hover:w-full motion-reduce:transition-none ${featured ? "bg-[#54d1d0]" : "bg-[#0068a5]"}`}
                      aria-hidden="true"
                    />
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-xl border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none ${featured ? "border-white/20 bg-white/10 text-[#9be8e5]" : "border-[#cce5ea] bg-[#e6f3f5] text-[#0068a5]"}`}
                      >
                        <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span
                        className={`mt-1 h-0.5 w-7 rounded-full transition-[width] duration-300 group-hover:w-11 motion-reduce:transition-none ${featured ? "bg-[#54d1d0]" : "bg-[#9dcbd4]"}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-5">
                      <strong
                        className={`block text-3xl leading-none font-semibold tracking-tight ${featured ? "text-white" : "text-[#0068a5]"}`}
                      >
                        {value}
                      </strong>
                      <span
                        className={`mt-2 block text-lg font-medium leading-snug ${featured ? "text-[#d2e7ed]" : "text-black"}`}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="min-w-0 w-full lg:justify-self-end">
            <ConnectedDataImage />
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
      className="bg-[#08253d] py-16 md:py-18 xl:py-20"
    >
      <div className={shell}>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 id="services-title" className={`${title} text-white`}>
              The right expertise,
              <br />
              <span className="text-[#6addd8]">at every stage.</span>
            </h2>
          </div>
          <p className="max-w-97.5 text-lg leading-relaxed text-[#b8c9d7]">
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
      className={`${section} copy-on-light overflow-hidden bg-[#f2f8f9]`}
    >
      <div className={shell}>
        <div className="mx-auto max-w-275 text-center">
          <h2
            id="platform-title"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.08] font-semibold tracking-[-.052em] text-[#0a2038] md:whitespace-nowrap"
          >
            One connected{" "}
            <span className="text-[#0068a5]">clinical ecosystem.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-200 text-lg leading-relaxed text-[#47667b]">
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
          <p className="max-w-110 text-lg leading-relaxed text-[#b8c9d7]">
            Each condition calls for its own questions, endpoints and ways of
            working. Our teams shape the research around those needs.
          </p>
        </div>
        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {therapeuticAreas.map((area) => (
            <div className="relative min-w-0 hover:z-20" key={area.title}>
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
  const initiatives = [
    {
      title: "Non-Profit Research Organizations",
      description: "Connecting with mission-driven research organizations.",
      icon: HeartPulse,
      href: "/giving-back/non-profit-research-organizations",
    },
    {
      title: "Employee Volunteer Programs",
      description: "Giving our team ways to contribute their time and skills.",
      icon: HandHeart,
      href: "/giving-back/employee-volunteer-programs",
    },
    {
      title: "Community Outreach",
      description: "Bringing people and resources together in our communities.",
      icon: UsersRound,
      href: "/giving-back/community-outreach",
    },
    {
      title: "Mentorship Programs",
      description: "Sharing experience to support the next generation.",
      icon: GraduationCap,
      href: "/giving-back/mentorship-programs",
    },
  ];
  return (
    <section
      id="giving-back"
      aria-labelledby="giving-title"
      className="copy-on-light bg-white"
    >
      <div
        className={`${shell} grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20`}
      >
        <div className="min-w-0 w-full">
          <ConnectedDataImage
            imageSrc="/giving-back.jpg"
            imageAlt="Two healthcare professionals standing together"
            mirrored
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
        <nav
          aria-label="Giving back initiatives"
          className="grid gap-4 sm:col-span-2 sm:grid-cols-2 xl:grid-cols-4"
        >
          {initiatives.map(
            (
              { title: initiativeTitle, description, icon: Icon, href },
              index,
            ) => (
              <Link
                key={initiativeTitle}
                href={href}
                className="group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-[#d7e7eb] bg-[#f5f9fa] p-6 transition-[border-color,background-color] duration-300 hover:border-[#77b9c5] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] motion-reduce:transition-none"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#05aeb5] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />
                <span className="flex items-start justify-between gap-4">
                  <span className="grid size-13 shrink-0 place-items-center rounded-xl bg-[#073b56] text-white transition-colors duration-300 group-hover:bg-[#0068a5] group-focus-visible:bg-[#0068a5] motion-reduce:transition-none">
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-lg font-medium tracking-wide text-[#46697a]">
                    0{index + 1} / 04
                  </span>
                </span>
                <span className="mt-7 block flex-1">
                  <span className="block text-xl leading-snug font-semibold text-[#0a2e43]">
                    {initiativeTitle}
                  </span>
                  <span className="mt-2 block text-lg leading-snug font-medium text-[#304d5c]">
                    {description}
                  </span>
                </span>
                <span className="mt-6 flex items-center justify-between border-t border-[#d7e7eb] pt-4 text-lg font-medium text-[#0068a5]">
                  Explore
                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ),
          )}
        </nav>
      </div>
    </section>
  );
}

export function PurposeSection() {
  return (
    <section
      id="non-profit"
      aria-labelledby="purpose-title"
      className={`${section} copy-on-light bg-gray-100`}
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
            <p className="mt-6 max-w-140 text-lg leading-[1.8] text-[#587084]">
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
      className={`${section} copy-on-light bg-[#f2f7f8]`}
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
                  src={item.image}
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
                <span className="text-lg font-medium tracking-[.08em] text-[#006b78] uppercase">
                  {item.category}
                </span>
                <h3 className="mt-4 text-2xl xl:text-3xl leading-[1.18] font-semibold tracking-[-.035em] text-[#0d2c42] transition-colors duration-300 group-hover:text-[#0068a5] group-focus-visible:text-[#0068a5]">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-[1.65] text-[#607a88]">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-lg font-medium text-[#0068a5]">
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
