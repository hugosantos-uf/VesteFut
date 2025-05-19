import { useProductById } from "@/app/hooks/useProductById";
import ProductDetails from "@/app/components/molecules/ProductDetails";
import ImageMagnifier from "../atoms/ImageMagnifier";

type ProductContentProps = {
  id: number;
};

export default function ProductContent({ id }: ProductContentProps) {
  const product = useProductById(id);

  if (!product) {
    return <div className="p-6">Produto não encontrado.</div>;
  }

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <ImageMagnifier src={product.image} alt={product.title} />
        </div>
        <div className="md:w-1/2">
          <ProductDetails title={product.title} price={product.price} />
        </div>
      </div>
    </section>
  );
}
