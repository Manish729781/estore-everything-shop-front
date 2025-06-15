
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const FAQsSupport = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. We accept various payment methods and provide secure transaction processing."
    },
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Shipping costs vary based on location and order size. Free shipping is available for orders over $50."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes, we accept returns within 30 days of purchase. Items must be unused and in original packaging. You can request a return label through our returns page or contact customer service."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods. All transactions are encrypted and secure."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within India. International shipping options are being developed and will be available soon. Please check back for updates."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at startupsphere.in@gmail.com, WhatsApp at +91 99292 83594, or through our contact form. We're available Monday-Friday, 9 AM-6 PM."
    },
    {
      question: "What is your privacy policy?",
      answer: "We take your privacy seriously. We collect only necessary information and never sell your data to third parties. For full details, please review our Privacy Policy page."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-6">
            FAQs & Support
          </h1>
          <p className="text-xl text-estore-text-light max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team for personalized assistance.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-estore-dark pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-estore-dark flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-estore-dark flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-estore-text-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Email Support</h3>
            <p className="text-estore-text-light mb-4">Get detailed help via email</p>
            <p className="text-sm text-estore-dark font-medium">startupsphere.in@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">WhatsApp</h3>
            <p className="text-estore-text-light mb-4">Quick chat support</p>
            <p className="text-sm text-estore-dark font-medium">+91 99292 83594</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-estore-dark mb-3">Live Chat</h3>
            <p className="text-estore-text-light mb-4">Real-time assistance</p>
            <p className="text-sm text-estore-dark font-medium">Coming Soon</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">
            Still Need Help?
          </h2>
          <p className="text-estore-text-light mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to assist you with any questions or concerns.
          </p>
          <a
            href="/contact"
            className="bg-estore-dark text-white rounded-2xl px-8 py-3 font-medium hover:bg-estore-navy transition-colors duration-200 inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQsSupport;
