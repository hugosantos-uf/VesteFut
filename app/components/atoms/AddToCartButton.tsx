import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

export const AddToCartButton = () => (
  <div className="flex items-center gap-2 mt-2">
    <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium border border-gray-300 py-2 px-4 rounded-md hover:border-black transition-colors">
      <ShoppingCart size={18} />
      Carrinho
    </button>

    <button className="p-2 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-300 transition-colors">
      <Heart size={18} />
    </button>
  </div>
);
