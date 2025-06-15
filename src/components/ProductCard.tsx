
import React from "react";
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  tag: string;
  colors: string[];
  onViewDescription?: () => void; // new prop for opening description
  onAddToCart?: () => void;
  rounded?: string; // tailwind rounded classes (optional)
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  tag,
  colors,
  onViewDescription,
  onAddToCart,
  rounded = "rounded-xl md:rounded-2xl",
}) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Assume id as title (ideally, should be passed as prop! Here, fallback for demo)
  const id = title.replace(/\s+/g, "-").toLowerCase();

  const handleAddToCart = () => {
    addToCart({
      id,
      name: title,
      title,
      price: Number(price.replace(/[^\d]/g, "")),
      image,
      color: colors[0] || "",
      oldPrice,
    });
    toast({ title: "Added to Cart", description: `${title} has been added to your cart.` });
  };

  const handleBuy = () => {
    if (onAddToCart) onAddToCart();
  };

  return (
    <div
      className={`bg-white ${rounded} shadow-sm overflow-hidden relative flex flex-col transition-shadow duration-300 hover:shadow-lg`}
    >
      <span className="absolute top-3 left-3 bg-gray-100 text-estore-dark text-xs xs:text-sm px-2 xs:px-3 py-1 rounded-xl font-medium z-10">
        {tag}
      </span>
      <img
        src={image}
        alt={title}
        className="w-full h-40 xs:h-48 md:h-56 object-cover cursor-pointer"
        onClick={onViewDescription}
      />
      <div className="p-3 xs:p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-estore-dark mb-2 xs:mb-3 text-base xs:text-lg">{title}</h3>
        <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-4">
          <span className="font-bold text-estore-dark text-base xs:text-lg">{price}</span>
          <span className="text-gray-500 line-through text-xs xs:text-sm">{oldPrice}</span>
        </div>
        {colors.length > 0 && (
          <div className="flex gap-1 xs:gap-2 mb-3 xs:mb-5">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 xs:w-5 h-4 xs:h-5 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
        <div className="flex gap-2 mt-auto">
          <button
            type="button"
            onClick={handleAddToCart}
            className="
              flex-1 bg-estore-dark text-white px-2 xs:px-4 py-2 xs:py-3 rounded-full text-xs xs:text-sm font-medium
              hover:bg-estore-dark/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-estore-dark
            "
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={handleBuy}
            className="
              flex-1 bg-estore-dark text-white px-2 xs:px-4 py-2 xs:py-3 rounded-full text-xs xs:text-sm font-medium border border-white
              hover:bg-estore-navy/95 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-estore-dark
            "
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

