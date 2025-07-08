
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const testimonialTitle = "TESTIMONIALS & SUCCESS STORIES";
const headline = "Real Stories. Real Results.";
const body = `"I appreciate how effortless it is to book same-day appointments and get the care I need, exactly when I need it. The Nuvra app is user-friendly, and the support team is always there to help."`;
const fullArticle = `
Nuvra's commitment to convenience has made a significant difference in my daily life. With the seamless app experience, booking appointments is now just a matter of a few taps, and I always find support available when I need it most. 
The process of connecting with trusted professionals is fast and easy, the design is modern and intuitive, and I feel reassured throughout each interaction. The "Read Story" journey showed me features I didn't know about—automatic reminders, helpful follow-ups, and faithful customer service.
I recommend Nuvra for anyone who values their time and peace of mind, as it delivers on its promise of making life easier and more connected.
`;

const TestimonialSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="w-full lg:w-60 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Testimonial"
              className="w-full h-48 sm:h-52 md:h-60 lg:h-full object-cover lg:rounded-l-2xl rounded-t-2xl lg:rounded-tr-none"
            />
          </div>
          {/* Content */}
          <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <div className="text-xs sm:text-sm text-estore-text-light tracking-wider mb-1 font-medium uppercase">
              {testimonialTitle}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair text-estore-dark mb-3 md:mb-4">
              {headline}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-estore-dark mb-4 md:mb-6 leading-relaxed">
              {body}
            </p>
            <Button
              className="mb-4 sm:mb-5 w-max px-5 sm:px-7 py-2 sm:py-3 rounded-2xl text-sm sm:text-base font-medium"
              onClick={() => setOpen(true)}
            >
              Read Story
            </Button>
            <hr className="border-gray-200 my-2 sm:my-3" />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 sm:items-center text-xs sm:text-sm text-estore-text-light">
              <span>— James R, Austin, TX</span>
              <span className="hidden sm:block text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-estore-dark text-base sm:text-lg">★</span>
                <span>4.97/5 from over 400 reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal/Dialog for Full Article */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg w-[95vw]">
            <DialogHeader>
              <DialogTitle className="text-estore-dark text-lg sm:text-2xl">{headline}</DialogTitle>
              <DialogDescription className="text-estore-text-light text-xs sm:text-sm mt-1 mb-2">{testimonialTitle}</DialogDescription>
            </DialogHeader>
            <div className="text-base sm:text-lg text-estore-dark whitespace-pre-line mb-3">
              {body}
            </div>
            <div className="text-sm text-gray-800 whitespace-pre-line">{fullArticle}</div>
            <div className="flex justify-end mt-4">
              <Button variant="default" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TestimonialSection;
