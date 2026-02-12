import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TeamSection from "@/components/TeamSection";
import FacilitySection from "@/components/FacilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <SpecialtiesSection />
      <TeamSection />
      <FacilitySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
