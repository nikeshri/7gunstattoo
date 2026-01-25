import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://blackhivetattoostudio.com/wp-content/uploads/2021/04/International-Holidays-1.jpg"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-6">
              GET IN <span className="text-accent">TOUCH</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl">
              Ready to start your tattoo journey? Let's talk about your vision.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* CONTACT FORM */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
              Send us a <span className="text-accent">Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your tattoo idea..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-black px-8 py-4 rounded-xl uppercase tracking-widest text-sm font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
              Contact <span className="text-accent">Info</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Bhaktapur, Thimi, Nepal</p>
                  <p className="text-gray-400">Near Local Market</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a href="tel:+9779860879556" className="text-gray-400 hover:text-accent transition-colors">
                    +977 986-0879556
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:info@7gunstattostudio.com" className="text-gray-400 hover:text-accent transition-colors">
                    info@7gunstattostudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/7gunstattoo?igsh=NG1iMW5iM28yN253"
                  target="_blank"
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wide mb-8">
            Opening <span className="text-accent">Hours</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Weekdays</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Weekends</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
