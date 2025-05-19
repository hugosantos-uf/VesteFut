import React from "react";

import Image from "next/image";

export const ProductCardImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <Image
    src={src}
    alt={alt}
    width={500}
    height={192}
    className="w-full h-48 object-cover rounded-t-lg"
  />
);
