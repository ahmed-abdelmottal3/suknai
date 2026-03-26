import type { Metadata } from "next";
import BrandPageTemplate from "@/components/templates/BrandPageTemplate";
import { getBrandBySlug } from "@/lib/constants";

const brand = getBrandBySlug("suknai-resort")!;

export const metadata: Metadata = {
  title: `${brand.nameAr} | مجموعة سكناي`,
  description: brand.descriptionAr,
};

export default function SuknaiResortPage() {
  return <BrandPageTemplate brand={brand} />;
}
