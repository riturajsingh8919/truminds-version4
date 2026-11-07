import type { Metadata } from "next";
import { ServicesOverviewPage } from "@/components/services/ServicesOverviewPage";
import copy from "@/data/overview-pages.json";

export const metadata: Metadata = copy.services.metadata;

export default function ServicesPage() {
  return <ServicesOverviewPage />;
}
