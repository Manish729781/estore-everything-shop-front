
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Shield, Zap, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-6">
            About Us
          </h1>
          <p className="text-xl text-estore-text-light max-w-3xl mx-auto">
            We are passionate about creating exceptional experiences and building meaningful connections with our customers worldwide.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-estore-dark mb-6">Who We Are</h2>
                <p className="text-estore-text-light leading-relaxed mb-6">
                  We are a dedicated team of innovators, creators, and customer-focused professionals who believe in the power of quality products and exceptional service. Our journey started with a simple vision: to make premium products accessible to everyone.
                </p>
                <p className="text-estore-text-light leading-relaxed">
                  Every day, we work tirelessly to exceed expectations, build trust, and create lasting relationships with our customers. Our commitment goes beyond just selling products – we're here to be your trusted partner in every step of your journey.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-estore-dark mb-2">5+</div>
                  <div className="text-estore-text-light mb-4">Years of Excellence</div>
                  <div className="text-4xl font-bold text-estore-dark mb-2">1000+</div>
                  <div className="text-estore-text-light mb-4">Happy Customers</div>
                  <div className="text-4xl font-bold text-estore-dark mb-2">50+</div>
                  <div className="text-estore-text-light">Products Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Passion</h3>
            <p className="text-estore-text-light">We love what we do and it shows in every product and interaction</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Trust</h3>
            <p className="text-estore-text-light">Building lasting relationships through transparency and reliability</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Innovation</h3>
            <p className="text-estore-text-light">Constantly evolving to bring you the latest and greatest</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Global Vision</h3>
            <p className="text-estore-text-light">Serving customers worldwide with a local touch</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Ready to Join Our Journey?</h2>
          <p className="text-estore-text-light mb-8 max-w-2xl mx-auto">
            Whether you're looking for quality products, partnership opportunities, or just want to say hello, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-estore-dark text-white rounded-2xl px-8 py-3 font-medium hover:bg-estore-navy transition-colors duration-200"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="bg-gray-200 text-estore-dark rounded-2xl px-8 py-3 font-medium hover:bg-gray-300 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
