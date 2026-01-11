// app/shop/page.tsx
import React from "react";

import { ProductCard } from "../components/ProductCard";
import Image from "next/image";
import Link from "next/link";

const dummyProducts = [
  {
    name: "Face Cream",
    price: 29.99,
    image: "/assets/foundation.jpg",
    slug: "Dior Foundation",
  },
  {
    name: "Lipstick Red",
    price: 19.99,
    image: "/assets/lipstick.png",
    slug: "lipstick-red",
  },
  {
    name: "Eyeshadow",
    price: 29.99,
    image: "/assets/eyeshadow.jpg",
    slug: "Dior Foundation",
  },
  {
    name: "Lipstick Red",
    price: 19.99,
    image: "/assets/mascara.jpg",
    slug: "lipstick-red",
  },
  {
    name: "Moisturizer",
    price: 24.99,
    image: "/assets/cerave.jpg",
    slug: "moisturizer",
  },
  {
    name: "Toner",
    price: 34.99,
    image: "/assets/toner.jpg",
    slug: "hair-serum",
  },
  {
    name: "Serum",
    price: 49.99,
    image: "/assets/serum.jpg",
    slug: "eye-shadow-palette",
  },
  {
    name: "Essence",
    price: 15.99,
    image: "/assets/essence.jpg",
    slug: "sunscreen-spf50",
  },
  {
    name: "Suncreen",
    price: 12.99,
    image: "/assets/sunscreen.jpg",
    slug: "face-wash",
  },
  {
    name: "Pink Blush",
    price: 59.99,
    image: "/assets/blush.jpg",
    slug: "perfume",
  },
];

const ShopPage = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 py-4 text-gray-600 mt-25">
      <Link href="/productdescription"></Link>
      {}
      <div className="mb-10 mt-20">
        <h1 className="text-7xl font-light text-center">The Collection</h1>
        <p className="mt-4 text-center text-lg max-w-2xl mx-auto">
          Celestial Beauty brings together skincare and makeup essentials
          inspired by effortless glow, balance, and everyday radiance.
        </p>
      </div>
      <hr className="text-gray-300" />
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
