import catalog from "@/data/truform-catalog.json";

export const aiServices = catalog;
export type AiService = (typeof aiServices)[number];
