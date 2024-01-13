"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
  CartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrement: () => void;
  handleQtyDecrement: () => void;
}

const btnStyle = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQtyProps> = ({
  CartCounter,
  cartProduct,
  handleQtyIncrement,
  handleQtyDecrement,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {CartCounter ? null : (
        <div className="font-semibold text-lg">Quantidade</div>
      )}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={handleQtyDecrement}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handleQtyIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
