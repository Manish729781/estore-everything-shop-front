
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Droplets, Clock, Thermometer, Shirt } from 'lucide-react';

const WashLearn = () => {
  const washingTips = [
    {
      icon: <Thermometer className="w-8 h-8 text-blue-600" />,
      title: "Water Temperature",
      description: "Use cold water for dark colors, warm for whites, and hot for heavily soiled items.",
      details: ["Cold: 60-80°F (15-27°C)", "Warm: 90-110°F (32-43°C)", "Hot: 130°F+ (54°C+)"]
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Wash Cycles",
      description: "Choose the right cycle based on fabric type and soil level.",
      details: ["Normal: Everyday items", "Delicate: Fragile fabrics", "Heavy Duty: Heavily soiled items"]
    },
    {
      icon: <Shirt className="w-8 h-8 text-purple-600" />,
      title: "Fabric Care",
      description: "Different fabrics require different care approaches.",
      details: ["Cotton: Durable, can handle heat", "Wool: Gentle cycle, cold water", "Synthetic: Medium heat, gentle detergent"]
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      title: "Detergent Tips",
      description: "Use the right amount and type of detergent for best results.",
      details: ["Measure properly", "Pre-treat stains", "Choose eco-friendly options"]
    }
  ];

  const commonMistakes = [
    "Overloading the washing machine",
    "Using too much detergent",
    "Not sorting clothes properly",
    "Ignoring care labels",
    "Leaving wet clothes in the washer too long"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-estore-dark mb-6">
            Wash & Learn
          </h1>
          <p className="text-xl text-estore-text-light max-w-3xl mx-auto">
            Master the art of laundry with our comprehensive guide to washing, caring for, and maintaining your clothes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {washingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  {tip.icon}
                </div>
                <h3 className="text-2xl font-bold text-estore-dark">{tip.title}</h3>
              </div>
              <p className="text-estore-text-light mb-4 leading-relaxed">{tip.description}</p>
              <ul className="space-y-2">
                {tip.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-estore-text-light">
                    <div className="w-2 h-2 bg-estore-dark rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <p className="text-estore-text-light">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Quick Tips for Success</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-estore-text-light">Always check pockets before washing</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-estore-text-light">Sort clothes by color and fabric type</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-estore-text-light">Pre-treat stains as soon as possible</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-estore-text-light">Clean your lint trap after every load</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-estore-text-light">Fold or hang clothes immediately after drying</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-playfair font-bold text-estore-dark mb-6">Need More Help?</h2>
          <p className="text-estore-text-light mb-8 max-w-2xl mx-auto">
            Still have questions about washing and caring for your clothes? Our team is here to help with personalized advice.
          </p>
          <a
            href="/contact"
            className="bg-estore-dark text-white rounded-2xl px-8 py-3 font-medium hover:bg-estore-navy transition-colors duration-200 inline-block"
          >
            Contact Our Experts
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WashLearn;
