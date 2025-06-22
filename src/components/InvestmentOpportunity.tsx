
import { Button } from "@/components/ui/button";

const InvestmentOpportunity = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+50612345678"; // Replace with Michael's actual number
    const message = "Hello Michael, I'd like to learn more about the ROI potential for the El Castillo property.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Smart Investment in <span className="text-emerald-400">Paradise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Costa Rica's vacation rental market is booming, and this turnkey operation 
            positions you perfectly to capitalize on the growing tourism industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Investment Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-emerald-400">Why This Investment Makes Sense</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Established Revenue Stream</h4>
                  <p className="text-gray-300">
                    4 profitable Airbnb units already generating income with proven booking history
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Growing Tourism Market</h4>
                  <p className="text-gray-300">
                    Costa Rica sees over 3 million visitors annually, with Arenal being a top destination
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Turnkey Operation</h4>
                  <p className="text-gray-300">
                    No startup costs or learning curve - walk into a running business with systems in place
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Favorable Investment Climate</h4>
                  <p className="text-gray-300">
                    Costa Rica offers reasonable property taxes and a stable, tourism-friendly economy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Highlight Box */}
          <div className="bg-emerald-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Investment Highlights</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-white mb-2">$499K</div>
                <div className="text-emerald-100">Total Investment</div>
              </div>
              
              <div className="border-t border-emerald-300 pt-6">
                <div className="text-3xl font-bold text-white mb-2">4 Units</div>
                <div className="text-emerald-100">Immediate Income Potential</div>
              </div>

              <div className="border-t border-emerald-300 pt-6">
                <div className="text-3xl font-bold text-white mb-2">365 Days</div>
                <div className="text-emerald-100">Year-Round Tourist Season</div>
              </div>

              <div className="border-t border-emerald-300 pt-6">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full w-full transition-all duration-300 transform hover:scale-105"
                >
                  💬 Discuss ROI Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h4 className="text-xl font-bold mb-3">Premium Location</h4>
            <p className="text-gray-300">
              Prime positioning with unmatched volcano and lake views that command top rental rates
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">📈</div>
            <h4 className="text-xl font-bold mb-3">Scalable Business</h4>
            <p className="text-gray-300">
              Opportunity to expand or optimize operations for even greater returns
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🌴</div>
            <h4 className="text-xl font-bold mb-3">Lifestyle Investment</h4>
            <p className="text-gray-300">
              Own a piece of paradise while building wealth through smart real estate investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;
