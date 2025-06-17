
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
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const supportLinks = [
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Learn More', href: '/learn-more' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Wash & Learn', href: '/wash-learn' },
    { name: 'FAQs & Support', href: '/faqs-support' },
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
    <footer className="bg-gray-200 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-8">
          {/* Newsletter Box */}
          <div className="bg-white rounded-2xl p-8 flex-shrink-0 lg:max-w-md">
            <h3 className="text-2xl font-playfair font-bold text-estore-dark mb-5">
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 text-base outline-none focus:border-estore-dark disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-200 text-estore-dark rounded-2xl px-6 py-3 text-base font-medium hover:bg-estore-dark hover:text-white transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            <p className="text-estore-dark text-base leading-relaxed">
              Stay in the know by subscribing to our newsletter! By signing up, you agree to our privacy policy, and of course, you're free to unsubscribe at any time.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-1 flex-wrap gap-8 lg:gap-12 justify-end">
            <div className="flex flex-col gap-3 min-w-48">
              <div className="font-semibold text-estore-dark mb-3 text-lg">
                Quick Links
              </div>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 min-w-48">
              <div className="font-semibold text-estore-dark mb-3 text-lg">
                Support & Info
              </div>
              {supportLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-estore-dark opacity-85 hover:opacity-100 transition-opacity duration-200 text-base"
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
