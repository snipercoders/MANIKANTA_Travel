// components/home/BestSellersSection.tsx (renamed for clarity)
'use client';

export default function BestSellersSection() {
  const packages = [
    {
      title: "Bangkok to Phuket",
      price: "$999",
      duration: "10 days",
      locations: ["Thailand"],
      imgUrl: "https://thailandstartshere.com/wp-content/uploads/2024/03/Wat-Arun-1.jpg", // Beautiful temple at sunset
    },
    {
      title: "Thailand Escape",
      price: "$1049",
      duration: "10 days",
      locations: ["Thailand"],
      imgUrl: "https://tours.co.th/wp-content/uploads/2022/03/krabi-hong-island-tour-360-viewpoint-by-longtail-boat-w-lunch-or-bbq-dinner-3.jpg", // Emerald bay with cliffs
    },
    {
      title: "Bangkok to Singapore",
      price: "$2599",
      duration: "13 days",
      locations: ["Thailand", "Singapore"],
      imgUrl: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=1/tour_img/61c2cf9eccd69.jpeg", // James Bond Island / Phang Nga Bay
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-20 text-center">
        Our Best-Sellers
      </h2>

      {/* Horizontal Carousel */}
      <div className="relative">
        {/* Left Arrow (hidden on small screens) */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hidden md:flex">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hidden md:flex">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Cards Container */}
        <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4 px-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-80 md:w-96 rounded-xl overflow-hidden shadow-2xl bg-white transition-all duration-300 hover:shadow-3xl"
            >
              <div className="relative h-96">
                <img
                  src={pkg.imgUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />

                

                {/* Overlay Gradient + Text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 pt-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-white text-lg">
                    From {pkg.price}{" "}
                    <span className="ml-4 text-gray-200">{pkg.duration}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}