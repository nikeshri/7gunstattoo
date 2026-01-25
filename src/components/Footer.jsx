import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND WITH LOGO */}
          <div className="flex flex-col items-start gap-3">
            <img src="data:image/png;base64,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" alt="Tattoo House Logo" className="h-12 w-12 object-contain rounded-full" />
            <h2 className="text-xl font-extrabold tracking-widest text-white">
              7GUN <span className="text-accent">STATTO STUDIO</span>
            </h2>
            <p className="text-xs leading-snug text-gray-400">
              Artistic & premium tattoo studio led by <span className="text-white font-medium">Ashok Rana</span> in Thimi, Bhaktapur.
            </p>
          </div>

          {/* NAVIGATION LINKS */}
          <div>
            <h4 className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="/training" className="hover:text-white transition">Training</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              Tattoos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Tattoo Design</li>
              <li>Black & Grey</li>
              <li>Tribal & Mandala</li>
              <li>Minimal & 3D Tattoos</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Bhaktapur, Thimi, Nepal</li>
              <li>📞 <a href="tel:+9779860879556" className="hover:text-white transition">+977 986-0879556</a></li>
              <li>✉️ <a href="mailto:info@tattoohouse.com" className="hover:text-white transition">info@tattoohouse.com</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} 7GUN STATTO STUDIO. All rights reserved.
          </p>

          <div className="flex gap-4 text-white">
            <a href="https://www.instagram.com/7gunstattoo?igsh=NG1iMW5iM28yN253" target="_blank" className="hover:text-red-600 transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-green-500 transition"><FaWhatsapp size={18} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
