import catalog from "@/data/giving-back-catalog.json";
import content from "@/data/giving-back.json";

export type GivingInitiative = (typeof content.initiatives)[number];
export type GivingBackArea = (typeof catalog)[number];
export type GivingBackPage = GivingBackArea & (typeof content.pages)[number];

export const givingBackCopy = content.ui;
export const givingBackMain = content.main;
export const givingInitiatives = content.initiatives;
export const givingBackAreas = catalog;
export const givingBackPages: GivingBackPage[] = catalog.map(area => {
  const page = content.pages.find(page => page.slug === area.slug);
  if (!page) throw new Error(`Missing Giving Back page: ${area.slug}`);
  return { ...area, ...page };
});

export function getGivingBackPage(slug: string) {
  return givingBackPages.find(page => page.slug === slug);
}

export function getGivingInitiatives(ids: string[]) {
  return ids.map(id => {
    const initiative = givingInitiatives.find(initiative => initiative.id === id);
    if (!initiative) throw new Error(`Missing giving initiative: ${id}`);
    return initiative;
  });
}
