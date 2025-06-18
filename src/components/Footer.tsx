
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const quickLinks = [
    { name: 'Shop All', href: '/products' },
    { name: 'Manage Subscription', href: '#' },
    { name: 'Request Return Label', href: '/request-return-label' },
    { name: 'Affiliate Program', href: '/affiliate' },
  ];

  const wholesaleLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Learn More', href: '/learn-more' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Wash & Learn', href: '/wash-learn' },
    { name: 'FAQs & Support', href: '/faqs-support' },
    { name: 'Installation Manual', href: '#' },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // First check if email already exists
      const { data: existingSubscription } = await supabase
        .from('newsletter_subscriptions')
        .select('email, is_active')
        .eq('email', email)
        .single();

      if (existingSubscription) {
        if (existingSubscription.is_active) {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          // Reactivate subscription
          const { error } = await supabase
            .from('newsletter_subscriptions')
            .update({ is_active: true })
            .eq('email', email);

          if (error) throw error;

          toast({
            title: "Welcome Back!",
            description: "Your newsletter subscription has been reactivated.",
          });
        }
      } else {
        // Create new subscription
        const { error } = await supabase
          .from('newsletter_subscriptions')
          .insert([{ email }]);

        if (error) throw error;

        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
      }

      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-estore-dark mb-6">
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-estore-dark disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-estore-dark text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-estore-navy transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay in the know by subscribing to our newsletter! By signing up, you agree to our privacy policy, and of course, you're free to unsubscribe at any time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-estore-dark mb-6 text-lg">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-estore-dark transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Wholesale */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-estore-dark mb-6 text-lg">
              Wholesale
            </h4>
            <div className="space-y-3">
              {wholesaleLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-estore-dark transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-estore-dark mb-6 text-lg">
              About Us
            </h4>
            <div className="space-y-3">
              {aboutLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-estore-dark transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
          <span className="text-gray-600 text-sm">
            2025 Estore Technologies, Inc©
          </span>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-estore-dark hover:border-estore-dark transition-colors duration-200 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-estore-dark hover:border-estore-dark transition-colors duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-estore-dark hover:border-estore-dark transition-colors duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-estore-dark hover:border-estore-dark transition-colors duration-200 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
