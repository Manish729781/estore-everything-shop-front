
import { Phone, Instagram, Mail } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919929283594', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/m4__manish_', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:manishgayri34@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="bg-estore-light-gray py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-playfair font-bold text-estore-dark mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-estore-text-light mb-12 max-w-2xl mx-auto">
          Have questions or need support? We're here to help! Reach out to us through any of these channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-estore-dark mb-2">WhatsApp</h3>
            <p className="text-estore-text-light mb-4">Quick support via WhatsApp</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white rounded-2xl px-6 py-3 font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Chat on WhatsApp
            </button>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-estore-dark mb-2">Instagram</h3>
            <p className="text-estore-text-light mb-4">Follow us for updates</p>
            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl px-6 py-3 font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              Follow @m4__manish_
            </button>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-estore-dark mb-2">Email</h3>
            <p className="text-estore-text-light mb-4">Send us an email</p>
            <button
              onClick={handleEmailClick}
              className="bg-blue-500 text-white rounded-2xl px-6 py-3 font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
