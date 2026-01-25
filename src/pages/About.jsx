import { FaAward, FaUsers, FaClock, FaMapMarkerAlt , FaInstagram} from "react-icons/fa";

const About = () => {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://blackhivetattoostudio.com/wp-content/uploads/2021/04/International-Holidays-1.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-6">
              ABOUT <span className="text-accent">7GUN STATTO STUDIO</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl">
              Where passion meets precision in the art of tattooing
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
              Our <span className="text-accent">Story</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2018, 7GUN STATTO STUDIO has been at the forefront of tattoo artistry in Nepal.
              What started as a small studio has grown into a premier destination for custom tattoos,
              piercings, and body modifications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Our team of skilled artists brings years of experience and a passion for creating
              meaningful, personalized artwork that tells your unique story.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe in the transformative power of tattoos and are committed to providing
              a safe, hygienic, and welcoming environment for all our clients.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://www.eastmainink.com/wp-content/uploads/2023/07/east-main-ink-tattoo-shop-bozeman-2000x1000-1-1280x720.jpg"
              alt="Studio interior"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

        <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide">
            Our <span className="text-accent">Artists</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the main and visiting tattoo artists of our studio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Artist */}
          <div className="relative group">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6895487f97cd6e480ea5cbc7/4934c7b2-5ae3-449a-8e54-92beec2dceb8/mad-jackal-tattoo-collective-dover-new-hampshire_73.jpg"
              alt="Main Artist"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a href="https://www.instagram.com/7gunstattoo?igsh=NG1iMW5iM28yN253" target="_blank" className="text-white text-4xl">
                <FaInstagram />
              </a>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold">Ashok Rana</h3>
              <p className="text-gray-400">Main Artist</p>
            </div>
          </div>

          {/* Visiting Artist */}
          <div className="relative group">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6895487f97cd6e480ea5cbc7/4934c7b2-5ae3-449a-8e54-92beec2dceb8/mad-jackal-tattoo-collective-dover-new-hampshire_73.jpg"
              alt="Visiting Artist"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a href="https://instagram.com" target="_blank" className="text-white text-4xl">
                <FaInstagram />
              </a>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold">Ashim Thapa</h3>
              <p className="text-gray-400">Visiting Artist</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</div>
            <div className="text-gray-400 uppercase tracking-widest text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
            <div className="text-gray-400 uppercase tracking-widest text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-gray-400 uppercase tracking-widest text-sm">Artists</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-400 uppercase tracking-widest text-sm">Sterile Environment</div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
            Our <span className="text-accent">Values</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaAward className="text-accent text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-400 leading-relaxed">
              We strive for perfection in every tattoo, ensuring the highest quality work
              that exceeds expectations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-accent text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <p className="text-gray-400 leading-relaxed">
              Building lasting relationships with our clients and fostering a supportive
              tattoo community.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClock className="text-accent text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-400 leading-relaxed">
              Staying ahead with the latest techniques, styles, and technology in tattooing.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What our clients say about their experience at 7GUN STATTO STUDIO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                R
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Ramesh Sharma</h4>
                <div className="text-accent text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "Amazing experience! The artists are incredibly skilled and the studio maintains
              the highest standards of hygiene. My tattoo turned out exactly as I envisioned."
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                S
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Sita Thapa</h4>
                <div className="text-accent text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "Professional and friendly staff. They took the time to understand my vision
              and created a beautiful piece of art. Highly recommend 7GUN STATTO STUDIO!"
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                B
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Bikash Gurung</h4>
                <div className="text-accent text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "Best tattoo studio in Nepal! The attention to detail and aftercare advice
              was exceptional. My tattoo healed perfectly and looks stunning."
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
              Visit <span className="text-accent">Us</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Bhaktapur, Thimi, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-400">Mon-Sat: 10AM - 8PM<br />Sunday: 12PM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://media.timeout.com/images/102190005/image.jpg"
              alt="Studio location"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
