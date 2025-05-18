import Link from "next/link";
import { ProductCardImage } from "../atoms/ProductCardImage";
import { ProductCardTitle } from "../atoms/ProductCardTitle";
import { ProductCardPrice } from "../atoms/ProductCardPrice";
import { AddToCartButton } from "../atoms/AddToCartButton";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

const Product = ({ id, image, title, price }: ProductProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 cursor-pointer hover:shadow-lg transition">
        <ProductCardImage src={image} alt={title} />
        <div className="p-4">
          <ProductCardTitle title={title} />
          <ProductCardPrice price={price} />
          <AddToCartButton />
        </div>
      </div>
    </Link>
  );
};

export default Product;
