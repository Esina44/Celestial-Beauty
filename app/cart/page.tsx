"use client";

import React, { useState } from "react";
import CartItem from "../components/CartItem";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "Dior Foundation",
      image: "/assets/foundation.jpg",
      price: 4000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Cerave Daily Moisturizing Lotion ",
      image: "/assets/cerave.jpg",
      price: 40000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Rare Beauty Matte Lipstick",
      image: "/assets/lipstick.png",
      price: 3000,
      quantity: 3,
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-15 text-gray-600">
      <h1 className="text-4xl font-medium mb-6 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-md shadow-md min-h-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Tax</span>
              <span>Rs{tax.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-semibold mb-4">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>
            <button className="w-full bg-stone-700 text-white py-3 rounded-md hover:bg-stone-500 transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
