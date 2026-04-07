"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SalemAI from "@/components/widgets/SalemAI";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LandmarksSection from "@/components/sections/LandmarksSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BreakfastSection from "@/components/sections/BreakfastSection";
import RoyalServicesSection from "@/components/sections/RoyalServicesSection";
import ImportantNumbers from "@/components/sections/ImportantNumbers";
import DutyManagerSection from "@/components/sections/DutyManagerSection";
import GallerySection from "@/components/sections/GallerySection";
import MenuSection from "@/components/sections/MenuSection";
import ContactSection from "@/components/sections/ContactSection";
import MediaMarquee from "@/components/layout/MediaMarquee";
import { Brand } from "@/lib/constants";

export default function BrandPageTemplate({ brand }: { brand: Brand }) {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />
      <HeroSection brand={brand} />
      <AboutSection brand={brand} />
      <ImportantNumbers brand={brand} />
      <MediaMarquee />
      <LandmarksSection brand={brand} />
      <ReviewsSection brand={brand} />
      {brand.breakfastTimes.weekday !== "" && <BreakfastSection brand={brand} />}
      <RoyalServicesSection brand={brand} />
      <GallerySection brand={brand} />
      {brand.menuCategories.length > 0 && <MenuSection brand={brand} />}
      <DutyManagerSection brand={brand} />
      <ContactSection brand={brand} />
      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
