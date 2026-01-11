// app/shop/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string; // from DB as string
  image_url?: string;
  slug: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-6 py-4 text-gray-600 mt-20">
      <div className="mb-10 mt-20">
        <h1 className="text-7xl font-light text-center">The Collection</h1>
        <p className="mt-4 text-center text-lg max-w-2xl mx-auto">
          Celestial Beauty brings together skincare and makeup essentials
          inspired by effortless glow, balance, and everyday radiance.
        </p>
      </div>

      <div className="flex gap-5 text-2xl text-gray-400 ml-5 font-light">
        <button className="hover:text-black hover:underline cursor-pointer">
          All
        </button>
        <button className="hover:text-black hover:underline cursor-pointer">
          Skin Care
        </button>
        <button className="hover:text-black hover:underline cursor-pointer">
          Makeup
        </button>
      </div>
      <hr className="text-gray-300 mb-10" />

      {loading ? (
        <p className="text-center text-xl mt-10">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={parseFloat(product.price)}
              image={product.image_url || "/assets/default.jpg"}
              slug={product.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
