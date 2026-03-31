import type { Metadata } from "next";
import BrandPageTemplate from "@/components/templates/BrandPageTemplate";
import { getBrandBySlug } from "@/lib/constants";

const brand = getBrandBySlug("aya-unaizah")!;

export const metadata: Metadata = {
  title: `${brand?.nameAr || "فندق أياس عنيزة"} | مجموعة سكناي`,
  description: brand?.descriptionAr,
};

export default function AyaUnaizahPage() {
  if (!brand) return <div className="text-center py-20 text-2xl font-bold">جاري تحديث الصفحة...</div>;
  return <BrandPageTemplate brand={brand} />;
}
