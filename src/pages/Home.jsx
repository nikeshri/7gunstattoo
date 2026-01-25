import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyb3VmZXVwbXpnbW82YTY5azYybGJwYzFvbmJycjN0NDhueWprZXFzdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IPDpv0W2sQrKg/giphy.gif"
          alt="Tattoo background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl text-center mt-[15vh]">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-6 text-gray-100/90">
              WELCOME TO <br />
              <span className="text-accent">7GUNS TATTO STUDIO</span>
            </h1>

            <p className="text-gray-200/80 mb-8">
              Professional tattoo studio creating bold, meaningful and custom ink.
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-accent hover:bg-accent/80 px-8 py-3 rounded-xl text-sm uppercase tracking-wide transition"
              >
                Book Now
              </Link>

              <Link
                to="/gallery"
                className="border border-accent hover:border-accent/80 px-8 py-3 rounded-xl text-sm uppercase tracking-wide transition"
              >
                View Art
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto font-body">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/636373456/photo/tattoo-master-is-tattooing-in-the-tattoosalon.jpg?s=612x612&w=0&k=20&c=4GvBqM0f4izwpDTa0GgufnImm7G1U4zqzdUOni8oJTI="
              alt="Ashok Rana Tattoo Artist"
              className="w-full h-[580px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-3xl"></div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="uppercase tracking-[0.35em] text-gray-400 text-sm mb-4">
              Featured Artist
            </p>

            <h2 className="font-heading text-5xl md:text-6xl font-extrabold tracking-wide mb-8">
              Ashok <span className="text-accent">Rana</span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Based in <span className="text-white font-medium">Bhaktapur, Thimi</span>,
              Ashok Rana is a professional tattoo artist known for bold precision,
              timeless creativity, and custom ink that speaks identity.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With years of hands-on studio experience, Ashok focuses on clean,
              long-lasting designs that age beautifully with the skin.
            </p>

            <ul className="grid grid-cols-2 gap-y-4 text-gray-300 mb-10 text-base">
              <li>— Black & Grey Mastery</li>
              <li>— Realistic Tattoos</li>
              <li>— Custom Concept Art</li>
              <li>— Fine Line Precision</li>
            </ul>

            <div className="flex gap-5">
              <a
                href="tel:+9779860879556"
                className="bg-accent hover:bg-accent/80 px-10 py-4 rounded-xl uppercase tracking-widest text-sm font-semibold transition"
              >
                Book Appointment
              </a>

              <a
                href="/gallery"
                className="border border-accent hover:border-accent/80 px-10 py-4 rounded-xl uppercase tracking-widest text-sm transition"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">
            Tattoo <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of carefully crafted tattoos — each design tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Tribal */}
          <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://dhtattoo.co.nz/wp-content/uploads/2024/12/Quentin-scaled.jpg"
              alt="Tribal Tattoo"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tribal Tattoo</h3>
              <p className="text-gray-400 text-sm">
                Bold, geometric tribal patterns symbolizing heritage and strength.
              </p>
            </div>
          </div>

          {/* Star */}
          <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://static.wixstatic.com/media/9bcefd_b0fd8c25ab2a41028be8743bdee70960~mv2.jpg/v1/fill/w_438,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9bcefd_b0fd8c25ab2a41028be8743bdee70960~mv2.jpg"
              alt="Star Tattoo"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Star Tattoo</h3>
              <p className="text-gray-400 text-sm">
                Symbol of dreams and guidance — stars that shine forever.
              </p>
            </div>
          </div>

          {/* Mandala */}
          <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://blackhivetattoostudio.com/wp-content/uploads/2021/04/black-hive-website-1-1024x683.jpg"
              alt="Mandala Tattoo"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mandala Tattoo</h3>
              <p className="text-gray-400 text-sm">
                Spiritual symmetry and intricacy in every pattern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-gray-400 text-sm mb-4">
            Professional Courses
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">
            Tattoo <span className="text-gray-500">Training</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Tattoo Training Program
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              As the saying goes, practice makes a man perfect. We offer a structured
              <span className="text-white font-medium"> 3-tier tattoo training program </span>
              with professional certification.
            </p>

            <ul className="space-y-4 text-gray-300 text-base mb-8">
              <li>
                <span className="text-white font-medium">Basic Course:</span> Tattoos & Needles — <span className="text-gray-400">Duration: 1 Week</span>
              </li>
              <li>
                <span className="text-white font-medium">Intermediate Course:</span> Tattoo Training — <span className="text-gray-400">Duration: 1 Month</span>
              </li>
              <li>
                <span className="text-white font-medium">Advanced Course:</span> Tattoo Training & Piercing — <span className="text-gray-400">Duration: 3 Months</span>
              </li>
            </ul>

            <a
              href="tel:+9779860879556"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/80 px-10 py-4 rounded-xl uppercase tracking-widest text-sm font-semibold transition"
            >
              📞 Learn More
            </a>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://blackhivetattoostudio.com/wp-content/uploads/elementor/thumbs/Untitled-design-2021-04-12T145848.455-p5lofsfr0mizgfqp5lcocfii646kx3qc0bonzpqdtc.jpg"
              alt="Tattoo Training"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
