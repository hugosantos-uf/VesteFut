"use client";

import { useTranslations } from "next-intl";
import Product from "../molecules/ProductCard/Product";
import products from "@/app/data/products.json";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8); // exibe os 8 primeiros como destaque
  const t = useTranslations("main");

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8">
        {t("favoritesTitle")}
      </h2>
      <section className="w-full px-4 py-8 bg-gray-50 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {featured.map((product) => (
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
    </div>
  );
}
