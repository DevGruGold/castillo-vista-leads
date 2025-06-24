
import { Button } from "@/components/ui/button";
import ROICalculator from "./ROICalculator";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+50687090777";
    const message = "Hello Michael, I'm inquiring about the 4-unit property in El Castillo for $499,000.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/fb34fcb5-9569-467c-8193-1d4955fdfe6d.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-3 md:px-4 max-w-6xl mx-auto pb-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight">
          Own a <span className="text-emerald-400">Turnkey Airbnb</span> Business in Costa Rican Paradise
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 text-gray-200">
          A 4-unit rental property with spectacular volcano views
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-emerald-400">
          Asking Price: $499,000 USD
        </p>

        {/* ROI Calculator */}
        <div className="max-w-md mx-auto mb-6 md:mb-8">
          <ROICalculator />
        </div>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl relative z-20"
        >
          💬 Inquire on WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;
