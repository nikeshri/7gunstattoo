import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animate, setAnimate] = useState(false);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "traditional", label: "Traditional" },
    { id: "realism", label: "Realism" },
    { id: "blackwork", label: "Blackwork" },
    { id: "minimalist", label: "Minimalist" },
    { id: "japanese", label: "Japanese" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "traditional",
      title: "Traditional Rose",
      image: "https://blackhivetattoostudio.com/wp-content/uploads/2021/04/black-hive-website-1-1024x683.jpg",
      description: "Classic American traditional rose with bold lines and vibrant colors."
    },
    {
      id: 3,
      category: "blackwork",
      title: "Geometric Mandala",
      image: "https://www.tattoosnewdelhi.com/images/designs-ideas/hand-tattoo/sukuna-eye-and-mouth-tattoo-design-male-hand.jpg",
      description: "Intricate blackwork mandala with perfect symmetry."
    },
    {
      id: 4,
      category: "minimalist",
      title: "Line Art",
      image: "https://cdn2.stylecraze.com/wp-content/uploads/2023/12/Men-Forearm.jpg.webp",
      description: "Clean, minimal line work that speaks volumes."
    },
    {
      id: 5,
      category: "traditional",
      title: "Anchor Tattoo",
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/mgvJJRrLHw2V3HkWT8PB/media/6938155235652bc37bfdb4fb.jpg",
      description: "Classic nautical anchor with traditional styling."
    },
    {
      id: 7,
      category: "realism",
      title: "Animal Portrait",
      image: "https://blackhivetattoostudio.com/wp-content/uploads/2021/04/black-hive-website-1-1024x683.jpg",
      description: "Realistic animal portrait with incredible detail."
    },
    {
      id: 9,
      category: "minimalist",
      title: "Geometric Shapes",
      image: "https://inkppl.com/en/assets/php/files/112022/221122-1703-9462.ee6f2608.jpg",
      description: "Clean geometric shapes with minimal design."
    },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // Trigger animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://blackhivetattoostudio.com/wp-content/uploads/2021/04/International-Holidays-1.jpg"
          alt="Portfolio background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-6">
              OUR <span className="text-accent">PORTFOLIO</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl">
              A showcase of our finest work and artistic excellence
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-accent text-black shadow-lg"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
          Ready for Your <span className="text-accent">Masterpiece?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Let's create something unique together. Book a consultation and bring your vision to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent hover:bg-accent/80 text-black px-10 py-4 rounded-xl uppercase tracking-widest text-sm font-semibold transition-all duration-300"
        >
          Book Consultation
        </a>
      </section>
    </main>
  );
};

export default Portfolio;
