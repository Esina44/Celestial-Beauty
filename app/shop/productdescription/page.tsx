import { Star } from "lucide-react";
import Link from "next/link";

export default function ProductDescription() {
  return (
    <div className="max-w-7xl mx-auto py-25 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 items-start">
        <div className="flex justify-center md:justify-start">
          <img
            src="/assets/foundation.jpg"
            alt="foundation"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-start">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Dior Foundation
          </h1>

          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-semibold">Rs 4090</p>
            <div className="flex items-center gap-1">
              <Star className="text-amber-400 w-5 h-5" />
              <Star className="text-amber-400 w-5 h-5" />
              <Star className="text-amber-400 w-5 h-5" />
              <span className="ml-2 font-medium">4.8</span>
            </div>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Flawless, lightweight coverage that evens skin tone and leaves a
            natural, radiant finish. Long-lasting comfort for a luminous,
            skin-perfecting look.
          </p>
          <div className="flex w-full items-center">
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
