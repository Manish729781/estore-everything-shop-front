
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NewInSection from '@/components/NewInSection';
import TestimonialSection from '@/components/TestimonialSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewInSection />
      <TestimonialSection />
      <FeaturedCategories />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
