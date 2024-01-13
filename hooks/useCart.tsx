import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQtd: number;
  cartProducts: CartProductType[] | null;
  handleAddProductTotalCart: (product: CartProductType) => void;
};

interface Props {
  [proName: string]: any;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {
  const [cartTotalQtd, setCartTotalQtd] = useState(() => {
    return 0;
  });
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    () => null,
  );

  const handleAddProductTotalCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updateCart;

      if (prev) {
        updateCart = [...prev, product];
      } else {
        updateCart = [product];
      }
      return updateCart;
    });
  }, []);

  const value = {
    cartTotalQtd,
    cartProducts,
    handleAddProductTotalCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error(
      "O carrinho do usuário deve ser usado dentro de um provedor de contexto de carrinho",
    );
  }

  return context;
};
