import type { Metadata } from "next";
import { ProductsOverviewPage } from "@/components/products/ProductsOverviewPage";
import copy from "@/data/overview-pages.json";

export const metadata: Metadata = copy.products.metadata;

export default function ProductsPage() {
  return <ProductsOverviewPage />;
}
