
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+50687090777";
    const message = "Hello Michael, I'm inquiring about the 4-unit property in El Castillo for $499,000.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:xmrtsolutions@gmail.com';
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* WhatsApp CTA - Now Full Width */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="bg-green-50 rounded-xl md:rounded-2xl p-6 md:p-12 text-center">
            <div className="text-6xl md:text-8xl mb-4 md:mb-8">💬</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-6">
              {t('fastestResponse')}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 lg:text-xl">
              {t('whatsappDescription')}
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl w-full max-w-md"
            >
              {t('clickToChat')}
            </Button>
            <p className="text-sm md:text-base text-gray-500 mt-3 md:mt-6">
              {t('messagePrefilled')}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <div className="bg-emerald-600 text-white rounded-xl md:rounded-2xl p-4 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Michael Copeland</h3>
            <p className="text-sm md:text-base text-emerald-100 mb-2 md:mb-4">{t('propertyOwner')}</p>
            <div className="space-y-1 md:space-y-2">
              <p className="text-sm md:text-base text-emerald-100">📱 WhatsApp: +506 8709-0777</p>
              <p className="text-sm md:text-base text-emerald-100">
                📧 Email: 
                <button 
                  onClick={handleEmailClick}
                  className="text-emerald-200 hover:text-white underline ml-1 transition-colors"
                >
                  xmrtsolutions@gmail.com
                </button>
              </p>
              <p className="text-sm md:text-base text-emerald-100">📍 El Castillo, Costa Rica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
