import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import FinalCTA from "@/layouts/components/FinalCTA";

export default function Home() {
  return (
    <article>
      <section id="hero" aria-label="Introduction">
        <HeroSection />
      </section>

      <section id="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          Platform Features
        </h2>
        <FeatureSections />
      </section>

      <section id="final-cta" aria-label="Final call to action">
        <FinalCTA />
      </section>
    </article>
  );
}