
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
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Location: Paradise in El Castillo
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            El Castillo is a tranquil village known for its authentic Costa Rican charm and magnificent views, 
            offering a peaceful alternative to nearby La Fortuna while providing easy access to world-class attractions.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Strategic Location</h3>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Interactive map showing El Castillo's prime location</p>
                <p className="text-sm text-gray-500 mt-2">Near Arenal Volcano, Lake Arenal, and La Fortuna</p>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nearby Attractions That Draw Tourists Year-Round
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 text-center">{attraction.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Why El Castillo is Perfect for Vacation Rentals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌅</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Authentic Experience</h4>
              <p className="text-gray-600">
                Less crowded than La Fortuna, offering guests a more authentic Costa Rican experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Easy Access</h4>
              <p className="text-gray-600">
                Close to all major attractions while maintaining peaceful, scenic surroundings
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Picture Perfect</h4>
              <p className="text-gray-600">
                Unobstructed volcano and lake views that guests travel from around the world to see
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
