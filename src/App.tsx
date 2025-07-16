
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import ProductDescription from "./pages/ProductDescription";
import ProductList from "./pages/ProductList";
import FeaturedProducts from "./pages/FeaturedProducts";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Checkout from "./pages/Checkout";
import RequestReturnLabel from "./pages/RequestReturnLabel";
import AffiliateProgram from "./pages/AffiliateProgram";
import Wholesale from "./pages/Wholesale";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LearnMore from "./pages/LearnMore";
import AboutUs from "./pages/AboutUs";
import WashLearn from "./pages/WashLearn";
import FAQsSupport from "./pages/FAQsSupport";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <WishlistProvider>
        <CartProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/products/featured" element={<FeaturedProducts />} />
                  <Route path="/product/:id" element={<ProductDescription />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:category" element={<BlogCategory />} />
                  <Route path="/blog/:category/:id" element={<BlogPost />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/address" element={<Address />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/request-return-label" element={<RequestReturnLabel />} />
                  <Route path="/affiliate" element={<AffiliateProgram />} />
                  <Route path="/wholesale" element={<Wholesale />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/learn-more" element={<LearnMore />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/wash-learn" element={<WashLearn />} />
                  <Route path="/faqs-support" element={<FAQsSupport />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  {/* Combined Auth Page */}
                  <Route path="/auth" element={<AuthPage />} />
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </CartProvider>
      </WishlistProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
