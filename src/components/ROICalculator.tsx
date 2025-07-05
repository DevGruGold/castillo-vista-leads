
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ROICalculator = () => {
  const { t } = useLanguage();
  const [occupancyRate, setOccupancyRate] = useState(75);
  const [avgNightlyRate, setAvgNightlyRate] = useState(120);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [roi, setROI] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Calculate annual income: 4 units × avg rate × (365 × occupancy rate)
    const income = 4 * avgNightlyRate * (365 * (occupancyRate / 100));
    setAnnualIncome(income);
    
    // Calculate ROI: (annual income / purchase price) × 100
    const roiCalc = (income / 499000) * 100;
    setROI(roiCalc);
  }, [occupancyRate, avgNightlyRate]);

  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 shadow-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg md:text-xl text-center text-gray-800">
            {t('investmentCalculator')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="occupancy" className="text-xs text-gray-600">
                {t('occupancyRate')}
              </Label>
              <Input
                id="occupancy"
                type="number"
                value={occupancyRate}
                onChange={(e) => setOccupancyRate(Number(e.target.value))}
                className="h-8 text-sm"
                min="0"
                max="100"
              />
            </div>
            <div>
              <Label htmlFor="rate" className="text-xs text-gray-600">
                {t('avgNightlyRate')}
              </Label>
              <Input
                id="rate"
                type="number"
                value={avgNightlyRate}
                onChange={(e) => setAvgNightlyRate(Number(e.target.value))}
                className="h-8 text-sm"
                min="0"
              />
            </div>
          </div>
          
          <div className="text-center space-y-2 pt-2 border-t border-emerald-100">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-emerald-50 p-2 rounded">
                <div className="text-xs text-gray-600">{t('annualIncome')}</div>
                <div className="font-bold text-emerald-600">
                  ${annualIncome.toLocaleString()}
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <div className="text-xs text-gray-600">{t('roi')}</div>
                <div className="font-bold text-blue-600">
                  {roi.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;
