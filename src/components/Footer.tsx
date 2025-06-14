
import { Facebook, Linkedin, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Shop All',
    'Manage Subscription',
    'Request Return Label',
    'Affiliate Program',
  ];

  const secondColumn = [
    'Wholesale',
    'Contact Us',
    'Terms & Conditions',
    'Privacy Policy',
    'Learn More',
  ];

  const thirdColumn = [
    'About Us',
    'Wash & Learn',
    'FAQs & Support',
    'Installation Manual',
  ];

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
    <footer className="bg-gray-200 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Contact Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-estore-dark mb-2 text-center">WhatsApp</h3>
              <p className="text-estore-text-light mb-3 text-center text-sm">Quick support via WhatsApp</p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 text-white rounded-2xl px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors duration-200"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-estore-dark mb-2 text-center">Instagram</h3>
              <p className="text-estore-text-light mb-3 text-center text-sm">Follow us for updates</p>
              <button
                onClick={handleInstagramClick}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl px-4 py-2 text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Follow @m4__manish_
              </button>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-estore-dark mb-2 text-center">Email</h3>
              <p className="text-estore-text-light mb-3 text-center text-sm">Send us an email</p>
              <button
                onClick={handleEmailClick}
                className="w-full bg-blue-500 text-white rounded-2xl px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-8">
          {/* Newsletter Box */}
          <div className="bg-white rounded-2xl p-8 flex-shrink-0 lg:max-w-sm">
            <h3 className="text-2xl font-playfair font-bold text-estore-dark mb-5">
              Newsletter
            </h3>
            <form className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 text-base outline-none focus:border-estore-dark"
              />
              <button
                type="submit"
                className="bg-gray-200 text-estore-dark rounded-2xl px-6 py-3 text-base font-medium hover:bg-estore-dark hover:text-white transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-estore-dark text-base leading-relaxed">
              Stay in the know by subscribing to our newsletter! By signing up, you agree to our privacy policy, and of course, you're free to unsubscribe at any time.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-1 flex-wrap gap-12 justify-end">
            <div className="flex flex-col gap-2 min-w-36">
              <div className="font-semibold text-estore-dark mb-2 text-lg">
                Quick Links
              </div>
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-36">
              <div className="font-semibold text-estore-dark mb-2 text-lg opacity-0">
                .
              </div>
              {secondColumn.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-36">
              <div className="font-semibold text-estore-dark mb-2 text-lg opacity-0">
                .
              </div>
              {thirdColumn.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 border-t border-gray-300 gap-3">
          <span className="text-estore-dark text-base">
            2025 Estore Technologies, Inc©
          </span>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-estore-dark transition-colors duration-200 group"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-estore-dark group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-estore-dark transition-colors duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-estore-dark group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-estore-dark transition-colors duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-estore-dark group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-estore-dark transition-colors duration-200 group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-estore-dark group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
