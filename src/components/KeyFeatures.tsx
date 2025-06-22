
const KeyFeatures = () => {
  const features = [
    {
      icon: "🏠",
      title: "4 Profitable Airbnb Units",
      description: "Fully established rental operation with proven income potential"
    },
    {
      icon: "🌋",
      title: "Spectacular Volcano & Lake Views",
      description: "Breathtaking views of Arenal Volcano and Lake Arenal"
    },
    {
      icon: "🔑",
      title: "Turnkey Operation",
      description: "Ready-to-run business with all systems in place"
    },
    {
      icon: "📈",
      title: "High Tourist Demand Area",
      description: "Located in one of Costa Rica's most popular destinations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why This Property?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A rare opportunity to own a profitable vacation rental business in paradise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
