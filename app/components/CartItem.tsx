"use client";

import { Trash } from "lucide-react";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  image,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      onQuantityChange(id, value);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 ml-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500">Rs {price}</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded-md py-1"
        />
      </div>

      <button
        onClick={() => onRemove(id)}
        className="ml-4 text-stone-600 hover:text-red-700 cursor-pointer"
      >
        <Trash />
      </button>
    </div>
  );
};

export default CartItem;
