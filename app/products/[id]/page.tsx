// app/product/[id]/page.tsx
import { use } from "react";

type Params = {
  params: {
    id: number;
  };
};

export default function ProductPage({ params }: Params) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Página do produto {id}</h1>
      {/* Aqui você pode fazer um fetch pelo ID e exibir os dados */}
    </div>
  );
}
