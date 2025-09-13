import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredibilityLogos from "@/components/CredibilityLogos";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <CredibilityLogos />
      <FeaturesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;