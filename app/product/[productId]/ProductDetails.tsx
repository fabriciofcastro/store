"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

interface ProductDetailstProps {
  product: any;
}

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  prince: number;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export const ProductDetails: React.FC<ProductDetailstProps> = ({ product }) => {
  const { handleAddProductTotalCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(() => false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    prince: product.price,
  });

  console.log(cartProduct);

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  // btn Decrement
  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg],
  );

  // btn Increment
  const handleQtyIncrement = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  // Btn Decrement
  const handleQtyDecrement = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700 mb-2">
          {product.name}
        </h2>
        <div className="flex items-center gap-2">
          <Rating value={2} />
          <div>{product.length} 2 reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify text-[1.3rem] leading-6 ">
          {product.description}
        </div>
        <Horizontal />
        <div>
          <span className="font-semibold text-lg">Categoria: </span>
          <span> {product.category} </span>
        </div>
        <div>
          <span className="font-semibold text-lg ">Fabricante: </span>
          <span>{product.brand}</span>
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "Disponivel" : "Indisponivel"}
        </div>
        <Horizontal />
        <div>
          <SetColor
            cartProduct={cartProduct}
            images={product.images}
            handleColorSelect={handleColorSelect}
          />
        </div>
        <Horizontal />
        <div>
          <SetQuantity
            cartProduct={cartProduct}
            handleQtyIncrement={handleQtyIncrement}
            handleQtyDecrement={handleQtyDecrement}
          />
        </div>
        <Horizontal />
        <div className="w-full">
          <Button
            label="COMPRAR"
            onClick={() => handleAddProductTotalCart(cartProduct)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
