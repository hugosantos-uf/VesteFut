import { ProductTitle } from "../atoms/ProductTitle";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductPixPrice } from "../atoms/ProductPixPrice";
import { ProductInstallments } from "../atoms/ProductInstallments";
import { ProductPromotionAlert } from "../atoms/ProductPromotionAlert";
import { ProductSizeSelector } from "../atoms/ProductSize";
import { ProductZipInput } from "../atoms/ProductZipInput";
import { ProductNameInput } from "../atoms/ProductNameInput";
import { BuyButton } from "../atoms/BuyButton";
import { LikeButton } from "../atoms/LikeButton";
import { ShareButton } from "../atoms/ShareButton";

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
      <div className="flex gap-4 mt-2 items-center">
        <LikeButton title={title} />
        <ShareButton />
      </div>
      <ProductSizeSelector />
      <ProductZipInput />
      <ProductNameInput />
      <BuyButton />
    </div>
  );
}
