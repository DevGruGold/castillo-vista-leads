
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import PropertyGallery from "@/components/PropertyGallery";
import LocationSection from "@/components/LocationSection";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
