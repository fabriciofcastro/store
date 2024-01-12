"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
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
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 2,
    prince: product.price,
  });

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
    if (cartProduct.quantity === 99 || cartProduct.quantity > 98) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  // Btn Decrement
  const handleQtyDecrement = useCallback(() => {
    if (cartProduct.quantity === 1 || cartProduct.quantity <= 2) {
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
        <h2 className="text-3xl font-medium text-slate-700"> {product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={2} />
          <div>{product.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">Categoria: </span> {product.category}
        </div>
        <div className="font-semibold">
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
        <div className="mt-6">
          <Button small outline label="COMPRAR" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
