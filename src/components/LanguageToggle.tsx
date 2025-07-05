
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm hover:bg-white"
      >
        {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
