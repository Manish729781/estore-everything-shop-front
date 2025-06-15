
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Shop All', href: '/products' },
    { name: 'Manage Subscription', href: '#' },
    { name: 'Request Return Label', href: '/request-return-label' },
    { name: 'Affiliate Program', href: '/affiliate' },
  ];

  const secondColumn = [
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Learn More', href: '#' },
  ];

  const thirdColumn = [
    { name: 'About Us', href: '#' },
    { name: 'Wash & Learn', href: '#' },
    { name: 'FAQs & Support', href: '#' },
    { name: 'Installation Manual', href: '#' },
  ];

  return (
    <footer className="bg-gray-200 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-8 py-12">
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
                  key={link.name}
                  href={link.href}
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-36">
              <div className="font-semibold text-estore-dark mb-2 text-lg opacity-0">
                .
              </div>
              {secondColumn.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-36">
              <div className="font-semibold text-estore-dark mb-2 text-lg opacity-0">
                .
              </div>
              {thirdColumn.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.name}
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
