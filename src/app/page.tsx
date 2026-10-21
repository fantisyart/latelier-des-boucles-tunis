import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TransformationBanner } from "@/components/TransformationBanner";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { BookingSection } from "@/components/BookingSection";
import { ServicesDirectorySection } from "@/components/ServicesDirectorySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SmoothAnchors } from "@/components/SmoothAnchors";
import { RevealBootstrap } from "@/components/RevealBootstrap";

export default function HomePage() {
  return (
    <>
      <SmoothAnchors />
      <RevealBootstrap />
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <TransformationBanner />
        <GallerySection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <BookingSection />
        <ServicesDirectorySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
