import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/hero";
import TrustedBySection from "@/components/sections/TrustedBySection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import NewsSection from "@/components/sections/NewsSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TrustedBySection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <TimelineSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <NewsSection />
        <CTABannerSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
