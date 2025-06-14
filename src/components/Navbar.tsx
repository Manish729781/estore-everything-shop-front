import { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWishlist } from '@/contexts/WishlistContext';
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
  const { wishlistCount } = useWishlist();
  const [activeLink, setActiveLink] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleWishlistClick = () => {
    console.log('Wishlist clicked, items:', wishlistCount);
    navigate('/wishlist');
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <div 
          className="text-xl sm:text-2xl font-playfair font-bold text-estore-dark tracking-wide cursor-pointer flex-shrink-0"
          onClick={() => handleNavClick('Home')}
        >
          Estore
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`text-base xl:text-lg font-medium transition-all duration-200 relative ${
                activeLink === link.key
                  ? 'text-estore-dark font-bold'
                  : 'text-estore-dark opacity-80 hover:opacity-100 hover:font-bold'
              }`}
            >
              {link.label}
              {activeLink === link.key && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-estore-dark rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {/* Enhanced Search Box */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-4 py-2.5 border border-gray-200 focus-within:border-estore-dark focus-within:ring-2 focus-within:ring-estore-dark/20 transition-all duration-200 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-500 cursor-pointer" onClick={handleSearchSubmit} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
              placeholder={t('search.placeholder')}
              className="bg-transparent border-none outline-none text-estore-dark text-sm flex-1 placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-gray-600 ml-1 text-lg leading-none"
              >
                ×
              </button>
            )}
          </form>

          {/* Enhanced Language & Country Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full px-3 py-2 hover:shadow-md transition-all duration-200">
                <span className="text-sm font-medium text-estore-dark">{selectedLanguage.flag} {selectedLanguage.language}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 max-h-80 overflow-y-auto bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl">
              {languageOptions.map((option) => (
                <DropdownMenuItem
                  key={`${option.flag}-${option.code}`}
                  onClick={() => handleLanguageSelect(option)}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-lg mx-1"
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

          {/* Icon Actions */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:shadow-md transition-all duration-200">
              <User className="w-5 h-5 text-estore-dark" />
            </button>
            <button 
              onClick={handleWishlistClick}
              className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center hover:shadow-md transition-all duration-200 relative"
            >
              <Heart className="w-5 h-5 text-red-600" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center hover:shadow-md transition-all duration-200 relative">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-estore-dark text-white text-xs rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Search */}
          <button className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <Search className="w-5 h-5 text-estore-dark" />
          </button>
          
          {/* Mobile Wishlist */}
          <button 
            onClick={handleWishlistClick}
            className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center relative"
          >
            <Heart className="w-5 h-5 text-red-600" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          
          {/* Mobile Cart */}
          <button className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-estore-dark text-white text-xs rounded-full flex items-center justify-center">2</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 bg-gradient-to-br from-estore-dark to-estore-navy rounded-full flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-4 py-3 border border-gray-200">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={handleSearchKeyPress}
                placeholder={t('search.placeholder')}
                className="bg-transparent border-none outline-none text-estore-dark text-base flex-1 placeholder:text-gray-400"
              />
            </form>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    handleNavClick(link.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeLink === link.key
                      ? 'bg-gradient-to-r from-estore-dark to-estore-navy text-white font-bold'
                      : 'text-estore-dark hover:bg-gray-100 font-medium'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile User Actions */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl py-3">
                <User className="w-5 h-5 text-estore-dark" />
                <span className="text-sm font-medium text-estore-dark">Profile</span>
              </button>
              <button 
                onClick={handleWishlistClick}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-red-100 to-red-200 rounded-xl py-3 relative"
              >
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-600">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
