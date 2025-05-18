import { ProductTitle } from "../atoms/ProductTitle";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductPixPrice } from "../atoms/ProductPixPrice";
import { ProductInstallments } from "../atoms/ProductInstallments";
import { ProductPromotionAlert } from "../atoms/ProductPromotionAlert";
import { ProductSizeSelector } from "../atoms/ProductSize";
import { ProductZipInput } from "../atoms/ProductZipInput";
import { ProductNameInput } from "../atoms/ProductNameInput";
import { BuyButton } from "../atoms/BuyButton";

interface Props {
  title: string;
  price: string;
}

export default function ProductDetails({ title, price }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <ProductTitle title={title} />
      <ProductPrice price={price} />
      <ProductPixPrice price={price} />
      <ProductInstallments price={price} />
      <ProductPromotionAlert />
      <ProductSizeSelector />
      <ProductZipInput />
      <ProductNameInput />
      <BuyButton />
    </div>
  );
}
