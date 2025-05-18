import ProductContent from "@/app/components/templates/ProductContent";

type Params = {
  params: {
    id: number;
  };
};

export default function ProductPage({ params }: Params) {
  const id = Number(params.id); // convertendo de string para number

  return (
    <>
      <ProductContent id={id} />
    </>
  );
}
