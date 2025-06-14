
import { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedLanguage, setSelectedLanguage, t } = useLanguage();
  const [activeLink, setActiveLink] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { key: 'Home', label: t('nav.home') },
    { key: 'Products', label: t('nav.products') },
    { key: 'Collection', label: t('nav.collection') },
    { key: 'Featured', label: t('nav.featured') },
    { key: 'Blog', label: t('nav.blog') }
  ];

  // Language and country options
  const languageOptions = [
    { flag: '🇮🇳', language: 'Hindi', code: 'HI' },
    { flag: '🇮🇳', language: 'English', code: 'EN' },
    { flag: '🇺🇸', language: 'English (US)', code: 'EN-US' },
    { flag: '🇬🇧', language: 'English (UK)', code: 'EN-GB' },
    { flag: '🇪🇸', language: 'Español', code: 'ES' },
    { flag: '🇫🇷', language: 'Français', code: 'FR' },
    { flag: '🇩🇪', language: 'Deutsch', code: 'DE' },
    { flag: '🇮🇹', language: 'Italiano', code: 'IT' },
    { flag: '🇵🇹', language: 'Português', code: 'PT' },
    { flag: '🇧🇷', language: 'Português (BR)', code: 'PT-BR' },
    { flag: '🇷🇺', language: 'Русский', code: 'RU' },
    { flag: '🇨🇳', language: '中文', code: 'ZH' },
    { flag: '🇯🇵', language: '日本語', code: 'JA' },
    { flag: '🇰🇷', language: '한국어', code: 'KO' },
    { flag: '🇸🇦', language: 'العربية', code: 'AR' },
  ];

  // Clear search when navigating away from products page
  useEffect(() => {
    if (location.pathname !== '/products') {
      setSearchQuery('');
    }
  }, [location.pathname]);

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    
    // Navigate to products page
    if (link === 'Products') {
      navigate('/products');
      return;
    }
    
    // Scroll to top for Home
    if (link === 'Home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Scroll to specific sections (only works on home page)
    const sectionMap: { [key: string]: string } = {
      'Collection': 'new-in-section',
      'Featured': 'featured-categories',
      'Blog': 'blog-section'
    };
    
    const sectionId = sectionMap[link];
    if (sectionId) {
      // If not on home page, navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLanguageSelect = (option: typeof languageOptions[0]) => {
    setSelectedLanguage(option);
    console.log('Language changed to:', option.language, option.code);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    
    console.log('Search submitted:', trimmedQuery);
    
    if (trimmedQuery) {
      // Navigate to products page with search query
      const searchUrl = `/products?search=${encodeURIComponent(trimmedQuery)}`;
      console.log('Navigating to:', searchUrl);
      navigate(searchUrl);
    } else {
      // If empty search, just go to products page
      navigate('/products');
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    console.log('Search input changed:', value);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchSubmit(e as any);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div 
          className="text-2xl font-playfair font-bold text-estore-dark tracking-wide cursor-pointer"
          onClick={() => handleNavClick('Home')}
        >
          Estore
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`text-lg font-medium transition-all duration-200 ${
                activeLink === link.key
                  ? 'text-estore-dark font-bold opacity-100'
                  : 'text-estore-dark opacity-80 hover:opacity-100 hover:font-bold'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Enhanced Search Box */}
          <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center gap-2 bg-estore-light-gray rounded-full px-4 py-2 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <Search className="w-5 h-5 text-estore-text-light cursor-pointer" onClick={handleSearchSubmit} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
              placeholder={t('search.placeholder')}
              className="bg-transparent border-none outline-none text-estore-dark text-base w-32 lg:w-40 placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-gray-600 ml-1"
              >
                ×
              </button>
            )}
          </form>

          {/* Enhanced Language & Country Dropdown */}
          <div className="hidden lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-medium text-estore-dark">{selectedLanguage.flag} {selectedLanguage.language}</span>
                  <ChevronDown className="w-4 h-4 text-estore-text-light" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-80 overflow-y-auto bg-white border border-gray-200 shadow-lg">
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={`${option.flag}-${option.code}`}
                    onClick={() => handleLanguageSelect(option)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="text-lg">{option.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-estore-dark">{option.language}</span>
                      <span className="text-xs text-gray-500">{option.code}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
