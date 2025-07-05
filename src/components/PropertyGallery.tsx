
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertyGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/fb34fcb5-9569-467c-8193-1d4955fdfe6d.png",
      title: "Volcano & Lake Views",
      description: "Spectacular views of Arenal Volcano and Lake Arenal"
    },
    {
      src: "/lovable-uploads/b8b4f10b-fdc4-488f-ba40-1ce7aa72c5d5.png",
      title: "Tropical Gardens",
      description: "Lush tropical landscaping with native plants"
    },
    {
      src: "/lovable-uploads/b50f5310-421d-474a-9085-5ed66d6087b8.png",
      title: "Property Grounds",
      description: "Well-maintained grounds with beautiful lake vistas"
    },
    {
      src: "/lovable-uploads/0febded6-4a8f-4022-a49c-e1c4cd6e44d5.png",
      title: "Garden Pathways",
      description: "Manicured lawns and garden areas"
    },
    {
      src: "/lovable-uploads/c4371e66-746e-401b-aaa6-8a4b31710f23.png",
      title: "Panoramic Views",
      description: "180-degree views of the surrounding landscape"
    },
    {
      src: "/lovable-uploads/d47e6f90-8eda-49ae-b373-74cf72bf80ff.png",
      title: "Unit Interior",
      description: "Modern, comfortable accommodations"
    },
    {
      src: "/lovable-uploads/4d7a2322-9e26-4b0d-83e8-c146c9135b3d.png",
      title: "Guest Room",
      description: "Spacious and well-appointed guest spaces"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            {t('propertyGalleryTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {t('propertyGallerySubtitle')}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-4 md:mb-8">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="w-full h-64 md:h-96 lg:h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-sm md:text-base text-gray-200">
                {images[selectedImage].description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-4 mb-8 md:mb-16">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-md md:rounded-lg transition-all duration-300 ${
                selectedImage === index 
                  ? 'ring-2 md:ring-4 ring-emerald-500 scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-16 md:h-20 lg:h-24 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Property Details */}
        <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">{t('propertyDetailsTitle')}</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-700 text-sm md:text-base">{t('price')}</span>
                  <span className="text-emerald-600 font-bold text-sm md:text-base">$499,000 USD</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-700 text-sm md:text-base">{t('units')}</span>
                  <span className="text-sm md:text-base">{t('unitsValue')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-700 text-sm md:text-base">{t('propertyType')}</span>
                  <span className="text-sm md:text-base">{t('propertyTypeValue')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-700 text-sm md:text-base">{t('status')}</span>
                  <span className="text-green-600 font-semibold text-sm md:text-base">{t('statusValue')}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">{t('propertyFeaturesTitle')}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Spectacular sunset and lakeviews
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Lake Arenal waterfront access
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Ready for vacation rental business
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Tropical landscaped gardens
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Modern amenities in all units
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="text-emerald-500 mr-2 md:mr-3">✓</span>
                  Prime El Castillo location
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
