"use client";

import useFetchProducts from "@/app/hooks/useFetchProducts";
import Product from "../molecules/ProductCard/Product";
import { useTranslations } from "next-intl";

export default function Content() {
  const t = useTranslations("products");
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p className="text-center">{t("loading")}</p>;
  if (error) return <p className="text-center text-red-600">{t("error")}</p>;

  return (
    <section className="w-full px-4 py-8 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
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
