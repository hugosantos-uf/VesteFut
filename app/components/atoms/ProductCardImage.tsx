import React from "react";

export const ProductCardImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <img src={src} alt={alt} className="w-full h-48 object-cover rounded-t-lg" />
);
