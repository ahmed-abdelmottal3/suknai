import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocationPopup from "@/components/widgets/LocationPopup";
import SalemAI from "@/components/widgets/SalemAI";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import GroupHero from "@/components/home/GroupHero";
import GroupOverviewSection from "@/components/home/GroupOverviewSection";
import BrandsSection from "@/components/home/BrandsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />
      <LocationPopup />
      <GroupHero />
      <GroupOverviewSection />
      <BrandsSection />
      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
