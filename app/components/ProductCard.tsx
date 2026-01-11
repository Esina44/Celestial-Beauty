"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  slug: string;
  initialLiked?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  slug,
  initialLiked = false,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="group relative rounded-md overflow-hidden shadow-sm hover:shadow-lg transition text-center z-0">
      <button
        onClick={handleLike}
        className={`absolute top-2 right-2 p-2 rounded-full z-20 transition-colors ${
          liked
            ? "bg-red-100 text-red-500"
            : "bg-white text-gray-400 hover:text-red-500"
        }`}
      >
        <Heart size={20} fill={liked ? "red" : "none"} strokeWidth={2} />
      </button>
      <Link href={`shop/productdescription/${id}`}>
        <img
          src={image || "/assets/default.jpg"}
          alt={name}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
        />
      </Link>
      <div className="p-4 bg-white z-10 relative">
        <h3 className="text-lg font-medium mb-1">{name}</h3>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
