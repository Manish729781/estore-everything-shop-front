
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">1. Information We Collect</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.
            </p>
            <ul className="list-disc pl-6 text-estore-text-light space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Payment information</li>
              <li>Shipping and billing addresses</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">2. How We Use Your Information</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-estore-text-light space-y-2">
              <li>Process and fulfill orders</li>
              <li>Communicate with you about your account and orders</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">3. Information Sharing</h2>
            <p className="text-estore-text-light leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">4. Data Security</h2>
            <p className="text-estore-text-light leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">5. Your Rights</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-estore-text-light space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">6. Contact Us</h2>
            <p className="text-estore-text-light leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at startupsphere.in@gmail.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
