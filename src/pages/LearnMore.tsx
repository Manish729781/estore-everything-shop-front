
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Users, Award, Target } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-6">
            Learn More About Us
          </h1>
          <p className="text-xl text-estore-text-light max-w-3xl mx-auto">
            Discover our journey, mission, and commitment to delivering exceptional products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Our Story</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              Founded with a vision to revolutionize the e-commerce experience, we started as a small team with big dreams. Our journey began with a simple belief that quality products and exceptional customer service should be accessible to everyone.
            </p>
            <p className="text-estore-text-light leading-relaxed">
              Today, we continue to grow and evolve, always keeping our customers at the heart of everything we do. Our commitment to innovation and excellence drives us to constantly improve and expand our offerings.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Our Mission</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              To provide high-quality products that enhance our customers' lives while building lasting relationships based on trust, reliability, and exceptional service.
            </p>
            <p className="text-estore-text-light leading-relaxed">
              We believe in creating value not just through our products, but through every interaction we have with our customers, partners, and community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-2">Knowledge</h3>
            <p className="text-estore-text-light">Continuous learning and improvement in everything we do</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-2">Community</h3>
            <p className="text-estore-text-light">Building strong relationships with our customers and partners</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-2">Excellence</h3>
            <p className="text-estore-text-light">Striving for the highest quality in products and service</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-2">Innovation</h3>
            <p className="text-estore-text-light">Embracing new ideas and technologies to serve you better</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Get in Touch</h2>
          <p className="text-estore-text-light mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you. Contact us and let's start a conversation.
          </p>
          <a
            href="/contact"
            className="bg-estore-dark text-white rounded-2xl px-8 py-3 font-medium hover:bg-estore-navy transition-colors duration-200 inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnMore;
