import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import { BouncyCardsFeatures } from "@/layouts/ui/BouncyCardsFeatures";

export default function Home() {
  return (
    <>
      <main className="grow">
        <article>
          <section id="hero">
            <HeroSection />
          </section>
          <section id="features" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2>
            <FeatureSections />
          </section>
        </article>
      </main>
    </>
  );
}
