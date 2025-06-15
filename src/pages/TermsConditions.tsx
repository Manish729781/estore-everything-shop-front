
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-8 text-center">
          Terms & Conditions
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">1. Acceptance of Terms</h2>
            <p className="text-estore-text-light leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">2. Use License</h2>
            <p className="text-estore-text-light leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-6 text-estore-text-light space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">3. Disclaimer</h2>
            <p className="text-estore-text-light leading-relaxed">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">4. Limitations</h2>
            <p className="text-estore-text-light leading-relaxed">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">5. Revisions</h2>
            <p className="text-estore-text-light leading-relaxed">
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-estore-dark mb-4">6. Contact Information</h2>
            <p className="text-estore-text-light leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at startupsphere.in@gmail.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
