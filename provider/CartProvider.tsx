"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderPropops {
  children: React.ReactDOM;
}

const CartProvider: React.FC<CartProviderPropops> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
