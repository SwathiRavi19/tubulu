"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import FloatingNotifications from "@/components/FloatingNotifications";
import AppStatisticsSection from "@/components/AppStatisticsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductCarouselSection from "@/components/ProductCarouselSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SecurityTrustSection from "@/components/SecurityTrustSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import DownloadCTASection from "@/components/DownloadCTASection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundEffects />
      <FloatingNotifications />
      
      <div className="relative z-10">
        <HeroSection />
        <AppStatisticsSection />
        <FeaturesSection />
        <CategoriesSection />
        <ProductCarouselSection />
        <InteractiveDemoSection />
        <WhyChooseUsSection />
        <SecurityTrustSection />
        <AppShowcaseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <NewsletterSection />
        <DownloadCTASection />
        <Footer />
      </div>
    </main>
  );
}
