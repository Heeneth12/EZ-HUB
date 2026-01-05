import HeroSection from "@/layouts/products/inventory/HeroSection";
import FeaturesSection from "@/layouts/products/inventory/FeaturesSection";
import PricingSection from "@/layouts/products/inventory/PricingSection";
import BentoFeatures from "@/layouts/products/inventory/BentoFeatures";
import CTASection from "@/layouts/products/inventory/CTASection";
import Header from "@/layouts/marketing/Header";
import Footer from "@/layouts/marketing/Footer";

export default function Inventory() {
  return (
    <>
      <Header />
      <main className="grow bg-[#050505] min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <BentoFeatures />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
