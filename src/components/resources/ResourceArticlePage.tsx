import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardList, FileText, MessagesSquare } from "lucide-react";
import { ResourceNavigation } from "./ResourceNavigation";
import {
  ResourceAction, ResourceBreadcrumb, ResourcePhoto, ResourceStoryLink,
  resourceBody, resourceFocus, resourceTitle,
} from "./ResourceEditorial";
import {
  getResourceArticles, resourceContent, type ResourceArticle, type ResourceCategory, type ResourceSection,
} from "@/lib/resources";
import { shell } from "@/lib/site-styles";

type Story = { article: ResourceArticle; category: ResourceCategory };

function Intro({ article, dark = false }: { article: ResourceArticle; dark?: boolean }) {
  return (
    <>
      <span className={`mb-4 block text-lg font-semibold ${dark ? "text-[#a5ece7]" : "text-[#006779]"}`}>{article.label}</span>
      <h1 className={`${resourceTitle} text-balance`}>{article.title}</h1>
      <p className={`mt-5 max-w-3xl ${resourceBody} ${dark ? "text-[#e2f3f5]" : "text-black"}`}>{article.summary}</p>
    </>
  );
}

function SectionCopy({ section }: { section: ResourceSection }) {
  return (
    <div className={`space-y-4 text-black ${resourceBody}`}>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.items && <ul className="list-disc space-y-2 pl-6 marker:text-[#007989]">
        {section.items.map(item => <li key={item}>{item}</li>)}
      </ul>}
    </div>
  );
}

function StorySection({ part, index, className = "" }: {
  part: ResourceSection;
  index: number;
  className?: string;
}) {
  return (
    <section id={`resource-section-${index + 1}`} aria-labelledby={`resource-heading-${index + 1}`} className={`scroll-mt-6 ${className}`}>
      <h2 id={`resource-heading-${index + 1}`} className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0a263c] sm:text-3xl">{part.title}</h2>
      <SectionCopy section={part} />
    </section>
  );
}

function Takeaway({ article, title, className = "" }: { article: ResourceArticle; title: string; className?: string }) {
  return (
    <aside className={`rounded-xl border border-[#cde4e8] bg-[#eef7f8] p-5 sm:p-7 ${className}`}>
      <h2 className="mb-2 text-xl font-semibold text-[#006779]">{title}</h2>
      <p className={`${resourceBody} text-black`}>{article.takeaway}</p>
    </aside>
  );
}

function InsightStory({ article, category }: Story) {
  return (
    <article data-article-layout="insights" className={`${shell} copy-on-light py-12 md:py-16`}>
      <ResourceBreadcrumb category={category} detail />
      <header className="mx-auto max-w-4xl text-center [&>p]:mx-auto">
        <Intro article={article} />
      </header>
      <ResourcePhoto article={article} className="mx-auto mt-8 aspect-[16/9] max-w-5xl rounded-2xl md:mt-10" sizes="(max-width: 1023px) 92vw, 1024px" />
      <div className="mx-auto mt-8 max-w-3xl space-y-8 md:mt-10 md:space-y-10">
        {article.sections.map((part, index) => <StorySection key={part.title} part={part} index={index} />)}
        <Takeaway article={article} title="Key takeaway" />
      </div>
    </article>
  );
}

function CaseStory({ article, category }: Story) {
  return (
    <article data-article-layout="case-studies" className="bg-[#f3f8f9]">
      <header className="bg-[#0a293d] py-12 text-white md:py-16">
        <div className={shell}>
          <ResourceBreadcrumb category={category} detail dark />
          <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            <div><Intro article={article} dark /></div>
            <ResourcePhoto article={article} className="aspect-[3/2] rounded-2xl" sizes="(max-width: 1023px) 92vw, 42vw" />
          </div>
        </div>
      </header>
      <div className={`${shell} copy-on-light grid items-start gap-7 py-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,.65fr)] lg:gap-10 lg:py-14`}>
        <ol className="divide-y divide-[#d7e6e9] rounded-2xl border border-[#d7e6e9] bg-white px-5 sm:px-8">
          {article.sections.map((part, index) => (
            <li key={part.title} className="grid gap-4 py-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-5 sm:py-8">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-lg bg-[#e3f3f4] text-lg font-semibold text-[#006779]">{index + 1}</span>
              <StorySection part={part} index={index} />
            </li>
          ))}
        </ol>
        <div className="lg:sticky lg:top-28">
          <Takeaway article={article} title="What to evaluate" />
        </div>
      </div>
    </article>
  );
}

function PaperStory({ article, category }: Story) {
  return (
    <article data-article-layout="white-papers" className={`${shell} copy-on-light py-12 md:py-16`}>
      <ResourceBreadcrumb category={category} detail />
      <header className="border-l-4 border-[#00a3a5] pl-5 sm:pl-8">
        <FileText size={34} className="mb-5 text-[#007989]" aria-hidden="true" />
        <Intro article={article} />
      </header>
      <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,.55fr)_minmax(0,1.5fr)] lg:gap-14">
        <nav aria-label="Chapters" className="rounded-xl border border-[#d3e5e9] bg-[#f2f8f9] p-5 lg:sticky lg:top-28">
          <h2 className="text-xl font-semibold text-[#0a263c]">In this guide</h2>
          <ol className="mt-4 space-y-3">
            {article.sections.map((part, index) => <li key={part.title}>
              <Link href={`#resource-section-${index + 1}`} prefetch={false} className={`flex gap-3 text-lg font-medium text-[#006779] hover:underline ${resourceFocus}`}>
                <span aria-hidden="true">{index + 1}.</span>{part.title}
              </Link>
            </li>)}
          </ol>
        </nav>
        <div className="divide-y divide-[#d7e7eb] border-y border-[#d7e7eb]">
          {article.sections.map((part, index) => <StorySection key={part.title} part={part} index={index} className="py-7 sm:py-9" />)}
          <div className="py-7"><Takeaway article={article} title="Planning decision" /></div>
        </div>
      </div>
    </article>
  );
}

function NewsStory({ article, category }: Story) {
  return (
    <article data-article-layout="news" className={`${shell} copy-on-light py-12 md:py-16`}>
      <ResourceBreadcrumb category={category} detail />
      <header className="grid gap-7 border-y-2 border-[#0a293d] py-7 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-10">
        <div><Intro article={article} /></div>
        <ResourcePhoto article={article} className="aspect-[16/10] rounded-xl" sizes="(max-width: 767px) 92vw, 41vw" />
      </header>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,.65fr)] lg:gap-14">
        <div className="space-y-8">
          {article.sections.map((part, index) => <StorySection key={part.title} part={part} index={index} />)}
        </div>
        <Takeaway article={article} title="At a glance" />
      </div>
    </article>
  );
}

function EventStory({ article, category }: Story) {
  return (
    <article data-article-layout="events" className="bg-[#eff7f8] py-12 md:py-16">
      <div className={shell}>
        <ResourceBreadcrumb category={category} detail />
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <header className="rounded-2xl bg-[#0a293d] p-6 text-white sm:p-8 lg:sticky lg:top-28">
            <MessagesSquare size={36} className="mb-5 text-[#8ce1de]" aria-hidden="true" />
            <Intro article={article} dark />
            <Link href="#contact" prefetch={false} className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#a5ece7] px-4 text-lg font-semibold text-[#0a293d] hover:bg-white ${resourceFocus}`}>
              Discuss this topic <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </header>
          <div className="copy-on-light space-y-4">
            <Takeaway article={article} title="What to bring" />
            {article.sections.map((part, index) => (
              <div key={part.title} className="rounded-xl border border-[#d2e6e9] bg-white p-5 sm:p-7">
                <div className="mb-4 text-[#007989]"><ClipboardList size={23} aria-hidden="true" /></div>
                <StorySection part={part} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

const stories: Record<string, (props: Story) => React.ReactNode> = {
  insights: InsightStory, "case-studies": CaseStory, "white-papers": PaperStory, news: NewsStory, events: EventStory,
};

function RelatedReading({ article, category }: Story) {
  const related = getResourceArticles(category.slug).filter(story => story.slug !== article.slug).slice(0, 2);
  return (
    <section aria-labelledby="resource-related-title" className="border-t border-[#d7e7eb] bg-white py-9 md:py-12">
      <div className={`${shell} grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)]`}>
        <div>
          <h2 id="resource-related-title" className="text-2xl font-semibold text-[#0a263c]">{resourceContent.labels.related}</h2>
          <ul className="mt-3 space-y-2">
            {article.links.map(link => <li key={link.href}>
              <Link href={link.href} prefetch={false} className={`group inline-flex min-h-11 items-center text-[#0068a5] hover:underline ${resourceFocus}`}>
                <ResourceAction>{link.label}</ResourceAction>
              </Link>
            </li>)}
          </ul>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {related.map(story => (
            <ResourceStoryLink article={story} key={story.slug} className="rounded-xl border border-[#d7e7eb] bg-[#f4f9fa] p-5 hover:border-[#75b6c2]">
              <BookOpen size={22} className="mb-3 text-[#007989]" aria-hidden="true" />
              <span className="text-xl font-semibold leading-snug group-hover:text-[#0068a5]">{story.title}</span>
            </ResourceStoryLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourceArticlePage({ article, category }: Story) {
  const StoryLayout = stories[category.slug];
  return (
    <>
      <ResourceNavigation current={category.slug} />
      <StoryLayout article={article} category={category} />
      <RelatedReading article={article} category={category} />
    </>
  );
}
