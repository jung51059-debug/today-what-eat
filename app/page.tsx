import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureCards } from "@/components/feature-cards";
import { HeroSection } from "@/components/hero-section";
import { ScreenshotSection } from "@/components/screenshot-section";
import { APP_NAME, DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: APP_NAME,
  description: DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: DESCRIPTION,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <ScreenshotSection />
      <CtaSection />
    </main>
  );
}
