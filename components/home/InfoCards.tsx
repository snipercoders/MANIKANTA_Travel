// components/home/ServicesCards.tsx
'use client';

export default function ServicesCards() {
  const services = [
    { icon: "🌤️", title: "Calculated Weather", desc: "Best time to travel with accurate forecasts" },
    { icon: "✈️", title: "Best Flights", desc: "Quick & easy flight booking options" },
    { icon: "🎤", title: "Local Events", desc: "Experience cultural festivals & events" },
    { icon: "⚙️", title: "Customization", desc: "Tailored trips for your preferences" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <p className="text-orange-600 uppercase font-semibold mb-4">Category</p>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">We Offer Best Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}