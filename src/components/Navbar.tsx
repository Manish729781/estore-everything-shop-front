
import { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'Collection', 'Featured', 'Blog', 'Contact'];

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    if (link === 'Contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-playfair font-bold text-estore-dark tracking-wide">
          Estore
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`text-lg font-medium transition-all duration-200 ${
                activeLink === link
                  ? 'text-estore-dark font-bold opacity-100'
                  : 'text-estore-dark opacity-80 hover:opacity-100 hover:font-bold'
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search Box */}
          <div className="hidden sm:flex items-center gap-2 bg-estore-light-gray rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-estore-text-light" />
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent border-none outline-none text-estore-dark text-base w-32 lg:w-40"
            />
          </div>

          {/* Country & Language */}
          <div className="hidden lg:flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1">
            <span className="text-xl">🇮🇳</span>
            <ChevronDown className="w-3 h-3 text-estore-text-light" />
            <span className="text-estore-dark font-medium ml-1">EN</span>
          </div>

          {/* Icon Actions */}
          <div className="flex items-center gap-4">
            <User className="w-6 h-6 text-estore-dark opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            <Heart className="w-6 h-6 text-estore-dark opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            <ShoppingCart className="w-6 h-6 text-estore-dark opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
