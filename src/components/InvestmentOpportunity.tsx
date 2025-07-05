
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const InvestmentOpportunity = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "+50687090777";
    const message = "Hello Michael, I'd like to learn more about the potential for the El Castillo property.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            {t('investmentTitle')} <span className="text-emerald-400">{t('investmentTitleHighlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            {t('investmentSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Investment Benefits */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-emerald-400">{t('whyInvestmentTitle')}</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-1.5 md:p-2 mr-3 md:mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('flexibleIncome')}</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {t('flexibleIncomeDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-1.5 md:p-2 mr-3 md:mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('infrastructureBoom')}</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {t('infrastructureBoomDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-1.5 md:p-2 mr-3 md:mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('readyForVision')}</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {t('readyForVisionDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-1.5 md:p-2 mr-3 md:mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('perfectTiming')}</h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {t('perfectTimingDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Highlight Box */}
          <div className="bg-emerald-600 rounded-xl md:rounded-2xl p-4 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('investmentHighlights')}</h3>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">$499K</div>
                <div className="text-sm md:text-base text-emerald-100">{t('totalInvestment')}</div>
              </div>
              
              <div className="border-t border-emerald-300 pt-4 md:pt-6">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">4 Units</div>
                <div className="text-sm md:text-base text-emerald-100">{t('flexibleUsePotential')}</div>
              </div>

              <div className="border-t border-emerald-300 pt-4 md:pt-6">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">🌉 Bridge</div>
                <div className="text-sm md:text-base text-emerald-100">{t('futureValueMultiplier')}</div>
              </div>

              <div className="border-t border-emerald-300 pt-4 md:pt-6">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-2 md:py-3 px-4 md:px-8 rounded-full w-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  {t('discussPotential')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">🏆</div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('premiumLocation')}</h4>
            <p className="text-sm md:text-base text-gray-300">
              {t('premiumLocationDesc')}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">📈</div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('explosiveGrowth')}</h4>
            <p className="text-sm md:text-base text-gray-300">
              {t('explosiveGrowthDesc')}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">🌴</div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('lifestyleInvestment')}</h4>
            <p className="text-sm md:text-base text-gray-300">
              {t('lifestyleInvestmentDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;
