
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistCount } = useWishlist();
  const { selectedLanguage } = useLanguage();

  const cartTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Flag for English (India) as in your screenshot; you can swap for other flags as needed
  const FLAG_ICON = (
    <span className="inline-block w-6 mr-1" title="India flag" aria-label="India flag">
      <img src="https://flagcdn.com/in.svg" alt="IN" className="w-6 h-4 rounded shadow" />
    </span>
  );

  // Main nav links
  const navLinks = [
    { to: "/", label: "Home", bold: true },
    { to: "/products", label: "Collection" },
    { to: "/featured", label: "featured" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/products?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <nav className="w-full bg-white dark:bg-estore-dark shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 h-16">
        {/* Left: Logo + Main Links */}
        <div className="flex items-center gap-8">
          {/* Site Name */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Estore
          </Link>
          {/* Main Nav */}
          <div className="hidden md:flex gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-base transition-colors ${
                  item.bold ? "font-bold" : "font-normal"
                } text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white px-2`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Center/Right: Search, Language, Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search product"
                className="pl-9 pr-2 py-1.5 w-48 sm:w-64 rounded-full bg-gray-100 focus:bg-white text-black placeholder:text-gray-400 text-sm"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </form>
          {/* Language and flag */}
          <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2">
            {FLAG_ICON}
            <LanguageSwitcher className="bg-transparent p-0 text-base text-black dark:text-white w-auto min-w-[2rem] border-0 shadow-none outline-none focus:ring-0 appearance-none pl-0 pr-1" />
          </div>
          {/* Profile */}
          <Link
            to="/profile"
            title="Profile"
            className="ml-2 flex items-center"
          >
            <User className="w-5 h-5 text-black/80 dark:text-white/80" />
          </Link>
          {/* Wishlist */}
          <Link
            to="/wishlist"
            title="Wishlist"
            className="ml-2 relative flex items-center"
          >
            <Heart className="w-5 h-5 text-black/80 dark:text-white/80" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          {/* Cart */}
          <Link
            to="/cart"
            title="Cart"
            className="ml-2 relative flex items-center"
          >
            <ShoppingCart className="w-5 h-5 text-black/80 dark:text-white/80" />
            {cartTotalItems > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                {cartTotalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="flex md:hidden items-center justify-between px-3 py-2 bg-white dark:bg-estore-dark">
        {/* Hamburger could go here for mobile navigation (not shown for brevity) */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Estore
          </Link>
        </div>
        {/* Profile/Cart/Wishlist in a row */}
        <div className="flex items-center gap-3">
          <Link to="/profile" title="Profile">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/wishlist" title="Wishlist" className="relative">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" title="Cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cartTotalItems > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-amber-400 text-xs font-semibold px-1 text-white">
                {cartTotalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* If you want a mobile nav drawer for links, it can be added here later */}
    </nav>
  );
};

export default Navbar;
