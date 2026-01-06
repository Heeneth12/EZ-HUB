import HeroSection from "@/layouts/products/inventory/HeroSection";
import PricingSection from "@/layouts/products/inventory/PricingSection";
import BentoFeatures from "@/layouts/products/inventory/BentoFeatures";
import CTASection from "@/layouts/products/inventory/CTASection";
import FAQSection from "@/layouts/products/inventory/FAQSection";

export default function Inventory() {
  return (
    <>
      <article>
        <section id="hero" aria-label="Introduction">
          <HeroSection />
        </section>
        <section id="features" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Platform Features
          </h2>
          <BentoFeatures />
          <PricingSection />
          <FAQSection />
        </section>
        <section id="final-cta" aria-label="Final call to action">
          <CTASection />
        </section>
      </article>
    </>
  );
}
