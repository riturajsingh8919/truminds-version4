import type { Metadata } from "next";
import { GivingBackMainPage } from "@/components/giving-back/GivingBackMainPage";
import { givingBackMain } from "@/lib/giving-back";

export const metadata: Metadata = givingBackMain.metadata;

export default function GivingBackPage() {
  return <GivingBackMainPage />;
}
