
const LocationSection = () => {
  const attractions = [
    {
      icon: "🌋",
      title: "Volcano Hiking",
      description: "Explore the majestic Arenal Volcano and its surrounding trails"
    },
    {
      icon: "🚣",
      title: "Kayaking & Fishing",
      description: "Enjoy world-class water activities on pristine Lake Arenal"
    },
    {
      icon: "🪂",
      title: "Zip Lining & Hanging Bridges",
      description: "Experience the canopy with thrilling adventure activities"
    },
    {
      icon: "💧",
      title: "La Fortuna Waterfall",
      description: "Visit one of Costa Rica's most beautiful waterfalls"
    },
    {
      icon: "🦋",
      title: "Butterfly Conservatory",
      description: "Discover exotic wildlife in their natural habitat"
    },
    {
      icon: "🌿",
      title: "Hot Springs",
      description: "Relax in natural volcanic hot springs nearby"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-emerald-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            The Location: Paradise in El Castillo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            El Castillo is a tranquil village known for its authentic Costa Rican charm and magnificent sunset and lakeviews, 
            offering a peaceful alternative to nearby La Fortuna while providing easy access to world-class attractions.
          </p>
        </div>

        {/* Future Bridge Announcement */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl md:rounded-2xl p-4 md:p-8 mb-8 md:mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">🌉 Game-Changing Infrastructure Development</h3>
          <p className="text-lg md:text-xl mb-2 md:mb-4">
            A new bridge is being built near El Castillo that will create a faster route from La Fortuna to Monteverde and the Pacific beaches!
          </p>
          <p className="text-sm md:text-base text-emerald-100">
            This will dramatically increase tourist traffic through the area, making properties here even more valuable and profitable for vacation rentals.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-800">
            Nearby Attractions That Draw Tourists Year-Round
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-3xl md:text-5xl mb-2 md:mb-4 text-center">{attraction.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 text-center">
                  {attraction.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Benefits */}
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-gray-800">
            Why El Castillo is Perfect for Vacation Rentals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-4">🌅</div>
              <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Authentic Experience</h4>
              <p className="text-sm md:text-base text-gray-600">
                Less crowded than La Fortuna, offering guests a more authentic Costa Rican experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-4">🚗</div>
              <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Strategic Location</h4>
              <p className="text-sm md:text-base text-gray-600">
                With the new bridge, El Castillo will become a key transit point for tourists heading to Monteverde and beaches
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-4">📸</div>
              <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Picture Perfect</h4>
              <p className="text-sm md:text-base text-gray-600">
                Unobstructed sunset and lakeviews that guests travel from around the world to see
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
