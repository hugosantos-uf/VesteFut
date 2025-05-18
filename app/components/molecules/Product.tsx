import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductPrice } from "../atoms/ProductPrice";
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
        <ProductImage src={image} alt={title} />
        <div className="p-4">
          <ProductTitle title={title} />
          <ProductPrice price={price} />
          <AddToCartButton />
        </div>
      </div>
    </Link>
  );
};

export default Product;
