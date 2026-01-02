import HeroSection from "@/layouts/inventory/HeroSection";
import FeaturesSection from "@/layouts/inventory/FeaturesSection";
import BentoFeatures from "../../layouts/inventory/BentoFeatures";
import PricingSection from "@/layouts/inventory/PricingSection";
import CTASection from "@/layouts/inventory/CTASection";

export default function Inventory() {
  return (
    <main className="grow bg-[#050505] min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BentoFeatures />
      <PricingSection />
      <CTASection />
      {/* <AnimatedBeamMultipleOutputDemo/> */}
    </main>
  );
}
