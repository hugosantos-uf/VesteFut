// components/molecules/Product.tsx
import { ProductImage } from "../atoms/ProductImage";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductPrice } from "../atoms/ProductPrice";
import { AddToCartButton } from "../atoms/AddToCartButton";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Product = ({ image, title, price }: ProductProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <ProductImage src={image} alt={title} />
      <div className="p-4">
        <ProductTitle title={title} />
        <ProductPrice price={price} />
        <AddToCartButton />
      </div>
    </div>
  );
};

export default Product;
