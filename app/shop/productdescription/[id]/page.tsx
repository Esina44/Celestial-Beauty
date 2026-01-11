"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: string;
  description?: string;
  image_url?: string;
  slug: string;
}

export default function ProductDescriptionPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const id = Number(params.id);
      if (isNaN(id)) {
        setProduct(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data.error ? null : data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;
  if (!product)
    return <p className="text-center mt-20 text-xl">Product not found.</p>;

  return (
    <div className="max-w-7xl mx-auto py-25 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 items-start">
        <div className="flex justify-center md:justify-start">
          <img
            src={product.image_url || "/assets/default.jpg"}
            alt={product.name}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            {product.name}
          </h1>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-semibold">
              Rs {parseFloat(product.price).toFixed(2)}
            </p>
            <div className="flex items-center gap-1">
              <Star className="text-amber-400 w-5 h-5" />
              <Star className="text-amber-400 w-5 h-5" />
              <Star className="text-amber-400 w-5 h-5" />
              <span className="ml-2 font-medium">4.8</span>
            </div>
          </div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            {product.description || "No description available."}
          </p>
          <div className="flex w-full items-center gap-4">
            <button className="border px-14 py-3 rounded-2xl bg-stone-800 hover:bg-stone-600 text-white font-medium cursor-pointer">
              Buy Now
            </button>
            <button className="border px-14 py-3 rounded-2xl bg-stone-800 hover:bg-stone-600 text-white font-medium cursor-pointer">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
