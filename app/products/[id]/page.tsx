import ProductContent from "@/app/components/templates/ProductContent";

type paramsType = Promise<{ id: string }>;

export default async function ProductPage(props: { params: paramsType }) {
  const { id } = await props.params;
  const number = Number(id);
  return (
    <>
      <ProductContent id={number} />
    </>
  );
}
