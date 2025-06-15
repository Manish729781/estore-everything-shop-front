import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/contexts/WishlistContext";
import { Search } from "lucide-react";

const Navbar = () => {
  const { selectedLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistCount } = useWishlist();

  const cartTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentLang = selectedLanguage.code;
  const langHome = currentLang === "FR" ? "Accueil" : currentLang === "ES" ? "Inicio"
    : currentLang === "HI" ? "होम" : currentLang === "DE" ? "Startseite"
    : currentLang === "ZH" ? "首页" : currentLang === "JA" ? "ホーム"
    : currentLang === "AR" ? "الرئيسية" : "Home";

  const langProducts = currentLang === "FR" ? "Produits" : currentLang === "ES" ? "Productos"
    : currentLang === "HI" ? "उत्पाद" : currentLang === "DE" ? "Produkte"
    : currentLang === "ZH" ? "产品" : currentLang === "JA" ? "商品"
    : currentLang === "AR" ? "المنتجات" : "Products";

  return (
    <nav className="bg-white dark:bg-estore-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Workflow"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {langHome}
                </Link>
                <Link
                  to="/products"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {langProducts}
                </Link>
                <Link
                  to="/wishlist"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Wishlist ({wishlistCount})
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cart ({cartTotalItems})
                </Link>
                <Link
                  to="/profile"
                  className="text-sm font-medium hover:underline px-4 py-1"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <Search className="h-6 w-6" aria-hidden="true" />
              </button>
              <LanguageSwitcher className="px-4 py-2 text-sm" />
              <ThemeSwitcher className="px-4 py-2 text-sm" />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            {langHome}
          </Link>
          <Link
            to="/products"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            {langProducts}
          </Link>
          <Link
            to="/wishlist"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Wishlist ({wishlistCount})
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Cart ({cartTotalItems})
          </Link>
          <Link
            to="/profile"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Profile
          </Link>
          <LanguageSwitcher className="block px-3 py-2" />
          <ThemeSwitcher className="block px-3 py-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
