import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageSwitcher from "./LanguageSwitcher";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [featuredDropdownOpen, setFeaturedDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    cartItems
  } = useCart();
  const {
    wishlistCount
  } = useWishlist();
  const {
    selectedLanguage
  } = useLanguage();
  const cartTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Flag for English (India) as in your screenshot; you can swap for other flags as needed
  const FLAG_ICON = <span className="inline-block w-6 mr-1" title="India flag" aria-label="India flag">
      <img src="https://flagcdn.com/in.svg" alt="IN" className="w-6 h-4 rounded shadow" />
    </span>;

  // Featured dropdown items
  const featuredItems = [{
    to: "/products?featured=new",
    label: "New Arrivals"
  }, {
    to: "/products?featured=bestsellers",
    label: "Best Sellers"
  }, {
    to: "/products?featured=trending",
    label: "Trending Now"
  }, {
    to: "/products?featured=sale",
    label: "Sale Items"
  }];

  // Blog dropdown items
  const blogItems = [{
    to: "/blog/fashion",
    label: "Fashion Tips"
  }, {
    to: "/blog/lifestyle",
    label: "Lifestyle"
  }, {
    to: "/blog/trends",
    label: "Latest Trends"
  }, {
    to: "/blog/guides",
    label: "Style Guides"
  }];

  // Main nav links
  const navLinks = [{
    to: "/",
    label: "Home",
    bold: true
  }, {
    to: "/products",
    label: "Collection"
  }];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/products?search=${encodeURIComponent(search.trim())}`);
  };
  const handleDropdownItemClick = (path: string) => {
    setFeaturedDropdownOpen(false);
    setBlogDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };
  return <nav className="w-full bg-white dark:bg-estore-dark shadow z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 sm:h-16">
        {/* Left: Logo + Main Links */}
        <div className="flex items-center gap-8">
          {/* Site Name */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STARTUP SPHERE</Link>
          {/* Main Nav - Desktop */}
          <div className="hidden lg:flex gap-4 items-center">
            {navLinks.map(item => <Link key={item.label} to={item.to} className={`text-base transition-colors ${item.bold ? "font-bold" : "font-normal"} text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white px-2`}>
                {item.label}
              </Link>)}
            
            {/* Featured Dropdown */}
            <div className="relative" onMouseEnter={() => setFeaturedDropdownOpen(true)} onMouseLeave={() => setFeaturedDropdownOpen(false)}>
              <button className="text-base font-normal text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white px-2 flex items-center gap-1">
                featured
                <ChevronDown className="w-4 h-4" />
              </button>
              {featuredDropdownOpen && <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  {featuredItems.map(item => <button key={item.label} onClick={() => handleDropdownItemClick(item.to)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg">
                      {item.label}
                    </button>)}
                </div>}
            </div>

            {/* Blog Dropdown */}
            <div className="relative" onMouseEnter={() => setBlogDropdownOpen(true)} onMouseLeave={() => setBlogDropdownOpen(false)}>
              <button className="text-base font-normal text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white px-2 flex items-center gap-1">
                Blog
                <ChevronDown className="w-4 h-4" />
              </button>
              {blogDropdownOpen && <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  {blogItems.map(item => <button key={item.label} onClick={() => handleDropdownItemClick(item.to)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg">
                      {item.label}
                    </button>)}
                </div>}
            </div>

            <Link to="/contact" className="text-base font-normal text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white px-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Center/Right: Search, Language, Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <Input type="text" placeholder="Search product" className="pl-9 pr-2 py-1.5 w-48 md:w-64 lg:w-80 rounded-full bg-gray-100 focus:bg-white text-black placeholder:text-gray-400 text-sm" value={search} onChange={e => setSearch(e.target.value)} />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </form>

          {/* Language and flag - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1 rounded-full bg-gray-100 px-2">
            {FLAG_ICON}
            <LanguageSwitcher className="bg-transparent p-0 text-base text-black dark:text-white w-auto min-w-[2rem] border-0 shadow-none outline-none focus:ring-0 appearance-none pl-0 pr-1" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/admin/login" title="Admin" className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              Admin
            </Link>
            <Link to="/profile" title="Profile">
              <User className="w-5 h-5 text-black/80 dark:text-white/80" />
            </Link>
            <Link to="/wishlist" title="Wishlist" className="relative">
              <Heart className="w-5 h-5 text-black/80 dark:text-white/80" />
              {wishlistCount > 0 && <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                  {wishlistCount}
                </span>}
            </Link>
            <Link to="/cart" title="Cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-black/80 dark:text-white/80" />
              {cartTotalItems > 0 && <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                  {cartTotalItems}
                </span>}
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2">
                <Menu className="w-6 h-6 text-black/80 dark:text-white/80" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Input type="text" placeholder="Search product" className="pl-9 pr-2 py-2 w-full rounded-lg bg-gray-100 focus:bg-white text-black placeholder:text-gray-400" value={search} onChange={e => setSearch(e.target.value)} />
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map(item => <Link key={item.label} to={item.to} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </Link>)}
                  
                  {/* Mobile Featured Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Featured</h3>
                    <div className="flex flex-col space-y-2 ml-4">
                      {featuredItems.map(item => <button key={item.label} onClick={() => handleDropdownItemClick(item.to)} className="text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.label}
                        </button>)}
                    </div>
                  </div>

                  {/* Mobile Blog Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Blog</h3>
                    <div className="flex flex-col space-y-2 ml-4">
                      {blogItems.map(item => <button key={item.label} onClick={() => handleDropdownItemClick(item.to)} className="text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.label}
                        </button>)}
                    </div>
                  </div>

                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">
                    Contact
                  </Link>
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center justify-around pt-6 border-t">
                  <Link to="/profile" title="Profile" onClick={() => setMobileMenuOpen(false)}>
                    <User className="w-6 h-6 text-black/80 dark:text-white/80" />
                  </Link>
                  <Link to="/wishlist" title="Wishlist" className="relative" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="w-6 h-6 text-black/80 dark:text-white/80" />
                    {wishlistCount > 0 && <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                        {wishlistCount}
                      </span>}
                  </Link>
                  <Link to="/cart" title="Cart" className="relative" onClick={() => setMobileMenuOpen(false)}>
                    <ShoppingCart className="w-6 h-6 text-black/80 dark:text-white/80" />
                    {cartTotalItems > 0 && <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                        {cartTotalItems}
                      </span>}
                  </Link>
                </div>

                {/* Mobile Language Switcher */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t">
                  {FLAG_ICON}
                  <LanguageSwitcher className="bg-transparent text-black dark:text-white border-0" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navbar;