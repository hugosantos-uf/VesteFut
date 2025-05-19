import ProductContent from "@/app/components/templates/ProductContent";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductContent id={Number(params.id)} />;
}
