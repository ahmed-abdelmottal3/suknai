import type { Metadata } from "next";
import BrandPageTemplate from "@/components/templates/BrandPageTemplate";
import { getBrandBySlug } from "@/lib/constants";

const brand = getBrandBySlug("suknai-jouf")!;

export const metadata: Metadata = {
  title: `${brand?.nameAr || "فندق سكناي الجوف"} | مجموعة سكناي`,
  description: brand?.descriptionAr,
};

export default function SuknaiJoufPage() {
  if (!brand) return <div className="text-center py-20 text-2xl font-bold">جاري تحديث الصفحة...</div>;
  return <BrandPageTemplate brand={brand} />;
}
