
import { Phone, Instagram, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919929283594', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/m4__manish_', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:startupsphere.in@gmail.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-estore-text-light max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us through any of these channels and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-estore-dark mb-4 text-center">Email Us</h3>
            <p className="text-estore-text-light mb-6 text-center">
              Send us an email for business inquiries or general questions
            </p>
            <div className="text-center">
              <p className="text-lg font-medium text-estore-dark mb-4">startupsphere.in@gmail.com</p>
              <button
                onClick={handleEmailClick}
                className="bg-blue-500 text-white rounded-2xl px-8 py-3 font-medium hover:bg-blue-600 transition-colors duration-200 w-full"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-estore-dark mb-4 text-center">WhatsApp</h3>
            <p className="text-estore-text-light mb-6 text-center">
              Chat with us directly for quick support and assistance
            </p>
            <div className="text-center">
              <p className="text-lg font-medium text-estore-dark mb-4">+91 99292 83594</p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white rounded-2xl px-8 py-3 font-medium hover:bg-green-600 transition-colors duration-200 w-full"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-estore-dark mb-4 text-center">Instagram</h3>
            <p className="text-estore-text-light mb-6 text-center">
              Follow us for updates and behind-the-scenes content
            </p>
            <div className="text-center">
              <p className="text-lg font-medium text-estore-dark mb-4">@m4__manish_</p>
              <button
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl px-8 py-3 font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full"
              >
                Follow us
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Clock className="w-8 h-8 text-estore-dark mr-3" />
                <h4 className="text-2xl font-bold text-estore-dark">Business Hours</h4>
              </div>
              <div className="space-y-2 text-estore-text-light">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>

            {/* Location */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <MapPin className="w-8 h-8 text-estore-dark mr-3" />
                <h4 className="text-2xl font-bold text-estore-dark">Location</h4>
              </div>
              <div className="text-estore-text-light">
                <p>Based in India</p>
                <p>Serving customers worldwide</p>
                <p className="text-sm mt-2 opacity-75">
                  Contact us for specific location details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-playfair font-bold text-estore-dark mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-estore-text-light mb-8">
            We're here to help you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white rounded-2xl px-8 py-3 font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Quick Chat on WhatsApp
            </button>
            <button
              onClick={handleEmailClick}
              className="bg-estore-dark text-white rounded-2xl px-8 py-3 font-medium hover:bg-estore-navy transition-colors duration-200"
            >
              Send us an Email
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
