import type { Metadata } from "next";
import { TherapeuticOverviewPage } from "@/components/therapeutic/TherapeuticOverviewPage";
import copy from "@/data/overview-pages.json";

export const metadata: Metadata = copy.therapeuticAreas.metadata;

export default function TherapeuticAreasPage() {
  return <TherapeuticOverviewPage />;
}
