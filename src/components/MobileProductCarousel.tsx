
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  tag: string;
  colors: string[];
}

interface MobileProductCarouselProps {
  products: Product[];
  onViewMore: (id: number) => void;
  onAddToCart: () => void;
}

const MobileProductCarousel: React.FC<MobileProductCarouselProps> = ({
  products,
  onViewMore,
  onAddToCart,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between w-full">
        <button
          aria-label="Previous"
          className="flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow absolute left-2 top-1/2 -translate-y-1/2 z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5 text-estore-dark" />
        </button>
        <div className="mx-auto w-full px-2" style={{ maxWidth: 340 }}>
          <ProductCard
            {...products[activeIdx]}
            onViewMore={() => onViewMore(products[activeIdx].id)}
            onAddToCart={onAddToCart}
            rounded="rounded-2xl"
          />
        </div>
        <button
          aria-label="Next"
          className="flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow absolute right-2 top-1/2 -translate-y-1/2 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5 text-estore-dark" />
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-1">
        {products.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${
              idx === activeIdx
                ? "bg-estore-dark"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileProductCarousel;
