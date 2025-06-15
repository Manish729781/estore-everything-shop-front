
import React, { createContext, useContext, useState, useMemo } from "react";

export type CartProduct = {
  id: string | number;
  name: string;
  title?: string;
  price: number;
  priceFormatted?: string;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
  selectedColor?: string;
  selectedSize?: string;
  oldPrice?: string;
  specifications?: { label: string; value: string }[];
};

type CartContextState = {
  cartItems: CartProduct[];
  addToCart: (item: Omit<CartProduct, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextState | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addToCart = (item: Omit<CartProduct, "quantity">, quantity: number = 1) => {
    setCartItems((prev) => {
      const found = prev.find(
        (i) =>
          i.id === item.id &&
          (item.selectedColor ? i.selectedColor === item.selectedColor : true) &&
          (item.selectedSize ? i.selectedSize === item.selectedSize : true)
      );
      if (found) {
        return prev.map((i) =>
          i.id === item.id &&
          (item.selectedColor ? i.selectedColor === item.selectedColor : true) &&
          (item.selectedSize ? i.selectedSize === item.selectedSize : true)
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartContext must be used within CartProvider");
  return ctx;
}
