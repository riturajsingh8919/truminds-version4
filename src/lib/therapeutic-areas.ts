import catalog from "@/data/therapeutic-catalog.json";

export const therapeuticAreas = catalog;
export type TherapeuticArea = (typeof therapeuticAreas)[number];
