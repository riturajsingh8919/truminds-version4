import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { getTruFormProduct, truformProducts } from "@/lib/truform-products";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return truformProducts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getTruFormProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} | TruMinds AI | TruMinds Clinical`,
    description: product.detail.hero.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getTruFormProduct(slug);
  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}
