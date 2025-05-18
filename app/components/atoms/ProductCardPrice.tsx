import React from "react";

export const ProductCardPrice = ({ price }: { price: string }) => (
  <p className="text-green-600 font-bold text-md">{price}</p>
);
