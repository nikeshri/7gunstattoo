import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `px-4 py-2 transition-all duration-300 ${
      isActive
        ? "text-accent border-b-2 border-accent"
        : "text-gray-300 hover:text-accent"
    }`;

  const mobileNavItemClass = ({ isActive }) =>
    `block px-6 py-4 text-lg uppercase font-medium transition-all duration-300 ${
      isActive
        ? "text-accent border-l-4 border-accent bg-zinc-900"
        : "text-gray-300 hover:text-accent hover:bg-zinc-900"
    }`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          7GUNSTATTO <span className="text-accent"> STUDIO</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm uppercase font-medium">
          <li>
            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navItemClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={navItemClass}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-accent hover:bg-accent/80 text-black px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="py-4">
            <li>
              <NavLink
                to="/"
                className={mobileNavItemClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={mobileNavItemClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={mobileNavItemClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={mobileNavItemClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="px-6 pb-6">
            <Link
              to="/contact"
              className="block w-full bg-accent hover:bg-accent/80 text-black px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
