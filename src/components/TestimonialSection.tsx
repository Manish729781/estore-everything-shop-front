
const TestimonialSection = () => {
  return (
    <section className="bg-white py-10 flex justify-center">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="lg:w-60 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Testimonial"
              className="w-full h-60 lg:h-full object-cover lg:rounded-l-2xl rounded-t-2xl lg:rounded-tr-none"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 lg:py-8 lg:pr-7 lg:pl-0 flex flex-col justify-center">
            <div className="text-sm text-estore-text-light tracking-widest mb-2 font-medium">
              TESTIMONIALS & SUCCESS STORIES
            </div>
            <h2 className="text-3xl font-playfair text-estore-dark mb-4">
              Real Stories. Real Results.
            </h2>
            <p className="text-lg text-estore-dark mb-6 leading-relaxed">
              "I appreciate how effortless it is to book same-day appointments and get the care I need, exactly when I need it. The Nuvra app is user-friendly, and the support team is always there to help."
            </p>
            <button className="bg-gray-200 text-estore-dark rounded-2xl px-7 py-3 text-base font-medium mb-5 hover:bg-estore-dark hover:text-white transition-colors duration-200 self-start">
              Read Story
            </button>
            <hr className="border-gray-200 my-3" />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 sm:items-center text-sm text-estore-text-light">
              <span>— James R, Austin, TX</span>
              <span className="hidden sm:block text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-estore-dark text-lg">★</span>
                <span>4.97/5 from over 400 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
