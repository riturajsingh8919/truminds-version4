import type { Metadata } from "next";
import { NonProfitPageContent } from "@/components/non-profit/NonProfitPageContent";
import copy from "@/data/non-profit.json";

export const metadata: Metadata = copy.metadata;

export default function NonProfitPage() {
  return <NonProfitPageContent />;
}
