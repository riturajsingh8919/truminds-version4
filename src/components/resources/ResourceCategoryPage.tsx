import Link from "next/link";
import { CalendarDays, FileText, MessagesSquare } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { ResourceNavigation } from "./ResourceNavigation";
import {
  ResourceAction, ResourcePhoto, ResourceStoryLink, resourceBody, resourceFocus,
} from "./ResourceEditorial";
import { getResourceArticles, resourceContent, type ResourceArticle, type ResourceCategory } from "@/lib/resources";
import { shell } from "@/lib/site-styles";

type Collection = { articles: ResourceArticle[] };
const storyTitle = "text-2xl font-semibold leading-tight tracking-tight text-[#0a263c] sm:text-3xl";

function Insights({ articles: [lead, ...stories] }: Collection) {
  return (
    <section data-resource-layout="insights" className="copy-on-light bg-white py-12 md:py-16">
      <div className={shell}>
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

function Cases({ articles }: Collection) {
  return (
    <section data-resource-layout="case-studies" className="bg-[#f1f7f8]">
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

function Papers({ articles }: Collection) {
  return (
    <section data-resource-layout="white-papers" className="copy-on-light bg-[#f4f9fa] py-12 md:py-16">
      <div className={shell}>
        <ul className="divide-y divide-[#d4e5e9] rounded-2xl border border-[#d4e5e9] bg-white px-5 sm:px-8">
          {articles.map(story => <li key={story.slug}>
            <ResourceStoryLink article={story} className="grid gap-3 rounded-md py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-lg bg-[#e7f4f6] text-[#007989]"><FileText size={22} aria-hidden="true" /></span>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[#0a263c] group-hover:text-[#0068a5]">{story.title}</h2>
                  <p className={`mt-2 ${resourceBody}`}>{story.summary}</p>
                </div>
              </div>
              <span className="text-[#0068a5]"><ResourceAction>Read guide</ResourceAction></span>
            </ResourceStoryLink>
          </li>)}
        </ul>
      </div>
    </section>
  );
}

function News({ articles }: Collection) {
  return (
    <section data-resource-layout="news" className="copy-on-light bg-white py-12 md:py-16">
      <div className={shell}>
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

function Events({ articles }: Collection) {
  return (
    <section data-resource-layout="events" className="bg-[#eef7f8] py-12 md:py-16">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.35fr)] lg:gap-10">
          <aside className="self-start rounded-2xl bg-[#0a293d] p-7 text-white sm:p-9">
            <CalendarDays size={38} className="mb-5 text-[#8ce1de]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Upcoming events</h2>
            <p className="mt-4 text-lg font-medium text-[#d7edf0]">{resourceContent.events.status}</p>
            <Link href="#contact" className={`mt-5 inline-flex min-h-11 items-center rounded-lg bg-[#a5ece7] px-4 text-lg font-semibold text-[#0a293d] hover:bg-white ${resourceFocus}`}>Discuss a topic</Link>
          </aside>
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

const categoryPhotos: Record<string, string> = {
  insights: "/resources",
  "case-studies": "/services/full-service-cro",
  "white-papers": "/truminds-ai/truform-adam",
  news: "/about-us",
  events: "/giving-back/mentorship-programs",
};

export function ResourceCategoryPage({ category }: { category: ResourceCategory }) {
  const CollectionLayout = collections[category.slug];
  return (
    <>
      <InnerPageHero
        pagePath={categoryPhotos[category.slug]}
        titleId="resource-category-title"
        title={category.title}
        description={category.slug === "case-studies" || category.slug === "events" ? category.introduction : category.description}
        ancestors={[{ label: "Resources", href: "/resources" }]}
      />
      <ResourceNavigation current={category.slug} />
      <CollectionLayout articles={getResourceArticles(category.slug)} />
    </>
  );
}
