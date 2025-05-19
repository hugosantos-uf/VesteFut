import ProductContent from "@/app/components/templates/ProductContent";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);

  return <ProductContent id={id} />;
}
