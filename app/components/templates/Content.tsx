"use client";

import useFetchProducts from "@/app/hooks/useFetchProducts";
import Product from "../molecules/Product";

export default function Content() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p className="text-center">Carregando produtos...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <section className="w-full px-4 py-8 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
