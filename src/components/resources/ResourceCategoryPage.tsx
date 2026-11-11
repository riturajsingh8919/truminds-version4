import Link from "next/link";
import { CalendarDays, FileText, MessagesSquare } from "lucide-react";
import { ResourceNavigation } from "./ResourceNavigation";
import {
  ResourceAction, ResourceBreadcrumb, ResourcePhoto, ResourceStoryLink,
  resourceBody, resourceFocus, resourceTitle,
} from "./ResourceEditorial";
import { getResourceArticles, resourceContent, type ResourceArticle, type ResourceCategory } from "@/lib/resources";
import { shell } from "@/lib/site-styles";

type Collection = { category: ResourceCategory; articles: ResourceArticle[] };
const storyTitle = "text-2xl font-semibold leading-tight tracking-tight text-[#0a263c] sm:text-3xl";

function Insights({ category, articles: [lead, ...stories] }: Collection) {
  return (
    <section data-resource-layout="insights" className="copy-on-light bg-white py-12 md:py-16">
      <div className={shell}>
        <ResourceBreadcrumb category={category} />
        <header className="mb-9 max-w-3xl">
          <h1 className={resourceTitle}>{category.title}</h1>
          <p className={`mt-4 ${resourceBody}`}>{category.description}</p>
        </header>
        <div className="grid gap-9 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          {lead && <ResourceStoryLink article={lead} className="block overflow-hidden rounded-2xl bg-[#eef7f7]">
            <ResourcePhoto article={lead} className="aspect-[16/9]" sizes="(max-width: 1023px) 92vw, 50vw" />
            <div className="p-6 sm:p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a263c] sm:text-4xl">{lead.title}</h2>
              <p className={`mt-3 ${resourceBody}`}>{lead.summary}</p>
              <div className="mt-5 text-[#0068a5]"><ResourceAction>Read the insight</ResourceAction></div>
            </div>
          </ResourceStoryLink>}
          <ul className="grid content-start divide-y divide-[#d7e7eb] border-y border-[#d7e7eb]">
            {stories.map(story => <li key={story.slug}>
              <ResourceStoryLink article={story} className="block py-5 hover:text-[#0068a5] sm:py-6">
                <h2 className="text-2xl font-semibold leading-tight">{story.title}</h2>
                <p className={`mt-2 ${resourceBody}`}>{story.summary}</p>
              </ResourceStoryLink>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Cases({ category, articles }: Collection) {
  return (
    <section data-resource-layout="case-studies" className="bg-[#f1f7f8]">
      <header className="bg-[#0a293d] py-12 text-white md:py-16">
        <div className={shell}>
          <ResourceBreadcrumb category={category} dark />
          <div className="grid items-end gap-5 md:grid-cols-2 md:gap-12">
            <h1 className={resourceTitle}>{category.title}</h1>
            <p className={`${resourceBody} max-w-2xl text-[#d7edf0]`}>{category.introduction}</p>
          </div>
        </div>
      </header>
      <div className={`${shell} copy-on-light space-y-5 py-10 md:py-14`}>
        {articles.map((story, index) => (
          <ResourceStoryLink key={story.slug} article={story} className={`grid overflow-hidden rounded-2xl border border-[#d3e4e9] bg-white hover:border-[#75b6c2] ${index % 2 ? "md:grid-cols-[1.45fr_1fr]" : "md:grid-cols-[1fr_1.45fr]"}`}>
            <ResourcePhoto article={story} className={`aspect-[16/9] md:aspect-auto md:min-h-58 ${index % 2 ? "md:order-last" : ""}`} sizes="(max-width: 767px) 92vw, 42vw" />
            <div className="self-center p-6 sm:p-8">
              <span className="text-lg font-semibold text-[#006779]">{story.label}</span>
              <h2 className={`mt-2 ${storyTitle}`}>{story.title}</h2>
              <p className={`mt-3 ${resourceBody}`}>{story.summary}</p>
              <div className="mt-4 text-[#0068a5]"><ResourceAction>Explore the scenario</ResourceAction></div>
            </div>
          </ResourceStoryLink>
        ))}
      </div>
    </section>
  );
}

function Papers({ category, articles }: Collection) {
  return (
    <section data-resource-layout="white-papers" className="copy-on-light bg-[#f4f9fa] py-12 md:py-16">
      <div className={shell}>
        <ResourceBreadcrumb category={category} />
        <div className="grid gap-9 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.45fr)] lg:gap-14">
          <header className="self-start border-l-4 border-[#00a3a5] pl-5 lg:sticky lg:top-28 lg:pl-8">
            <FileText size={38} className="mb-5 text-[#007989]" aria-hidden="true" />
            <h1 className={resourceTitle}>{category.title}</h1>
            <p className={`mt-4 ${resourceBody}`}>{category.introduction}</p>
          </header>
          <ul className="divide-y divide-[#d4e5e9] rounded-2xl border border-[#d4e5e9] bg-white px-5 sm:px-8">
            {articles.map(story => <li key={story.slug}>
              <ResourceStoryLink article={story} className="grid gap-3 rounded-md py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-5">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[#0a263c] group-hover:text-[#0068a5]">{story.title}</h2>
                  <p className={`mt-2 ${resourceBody}`}>{story.summary}</p>
                </div>
                <span className="text-[#0068a5]"><ResourceAction>Read guide</ResourceAction></span>
              </ResourceStoryLink>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function News({ category, articles }: Collection) {
  return (
    <section data-resource-layout="news" className="copy-on-light bg-white py-12 md:py-16">
      <div className={shell}>
        <ResourceBreadcrumb category={category} />
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-y-2 border-[#0a293d] py-6">
          <h1 className={resourceTitle}>{category.title}</h1>
          <p className={`max-w-lg ${resourceBody}`}>{category.description}</p>
        </header>
        <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-6">
          {articles.map((story, index) => (
            <ResourceStoryLink key={story.slug} article={story} className={`block border-b border-[#d7e7eb] pb-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <ResourcePhoto article={story} className="aspect-[16/9] rounded-xl" sizes={index < 2 ? "(max-width: 639px) 92vw, 45vw" : "(max-width: 639px) 92vw, (max-width: 1023px) 45vw, 30vw"} />
              <span className="mt-4 block text-lg font-semibold text-[#006779]">{story.label}</span>
              <h2 className="mt-2 text-2xl font-semibold leading-tight group-hover:text-[#0068a5]">{story.title}</h2>
              <p className={`mt-2 ${resourceBody}`}>{story.summary}</p>
            </ResourceStoryLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events({ category, articles }: Collection) {
  return (
    <section data-resource-layout="events" className="bg-[#eef7f8] py-12 md:py-16">
      <div className={shell}>
        <ResourceBreadcrumb category={category} />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.35fr)] lg:gap-10">
          <header className="self-start rounded-2xl bg-[#0a293d] p-7 text-white sm:p-9">
            <CalendarDays size={38} className="mb-5 text-[#8ce1de]" aria-hidden="true" />
            <h1 className={resourceTitle}>{category.title}</h1>
            <p className={`mt-4 ${resourceBody} text-[#d7edf0]`}>{category.introduction}</p>
            <p className="mt-6 border-t border-white/25 pt-5 text-lg font-semibold">{resourceContent.events.status}</p>
            <Link href="#contact" className={`mt-5 inline-flex min-h-11 items-center rounded-lg bg-[#a5ece7] px-4 text-lg font-semibold text-[#0a293d] hover:bg-white ${resourceFocus}`}>Discuss a topic</Link>
          </header>
          <div className="copy-on-light">
            <h2 className="mb-5 text-2xl font-semibold text-[#0a263c] sm:text-3xl">{resourceContent.events.topicsTitle}</h2>
            <ul className="space-y-3">
              {articles.map(story => <li key={story.slug}>
                <ResourceStoryLink article={story} className="flex items-start gap-4 rounded-xl border border-[#cee4e8] bg-white p-5 hover:border-[#74b9c4] sm:p-6">
                  <MessagesSquare size={24} className="mt-1 shrink-0 text-[#007989]" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold leading-tight group-hover:text-[#0068a5]">{story.title.replace(/^Discussion guide: /, "")}</h3>
                    <p className={`mt-2 ${resourceBody}`}>{story.summary}</p>
                    <div className="mt-3 text-[#0068a5]"><ResourceAction>View discussion guide</ResourceAction></div>
                  </div>
                </ResourceStoryLink>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const collections: Record<string, (props: Collection) => React.ReactNode> = {
  insights: Insights, "case-studies": Cases, "white-papers": Papers, news: News, events: Events,
};

export function ResourceCategoryPage({ category }: { category: ResourceCategory }) {
  const CollectionLayout = collections[category.slug];
  return (
    <>
      <ResourceNavigation current={category.slug} />
      <CollectionLayout category={category} articles={getResourceArticles(category.slug)} />
    </>
  );
}
