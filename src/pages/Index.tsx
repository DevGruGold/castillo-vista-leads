
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import PropertyGallery from "@/components/PropertyGallery";
import LocationSection from "@/components/LocationSection";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import ContactSection from "@/components/ContactSection";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LanguageToggle />
      <Hero />
      <KeyFeatures />
      <PropertyGallery />
      <LocationSection />
      <InvestmentOpportunity />
      <ContactSection />
    </div>
  );
};

export default Index;
