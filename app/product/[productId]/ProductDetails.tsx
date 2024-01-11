"use client";

import SetColor from "@/app/components/products/SetColor";
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
    quantity: 1,
    prince: product.price,
  });

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg],
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Image</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3x1 font-medium text-slate-700"> {product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={2} />
          <div>{product.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span> {product.category}
        </div>
        <div className="font-semibold">
          <span>{product.brand}</span>
        </div>
        <div className={product.isStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStoch ? "Disponivel" : "Indisponivel"}
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
        <div>quantidade</div>
        <Horizontal />
        <div>add carrinho</div>
      </div>
    </div>
  );
};

export default ProductDetails;
