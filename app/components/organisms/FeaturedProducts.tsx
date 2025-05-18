import { Section } from "lucide-react";
import Product from "../molecules/Product";
import products from "@/app/data/products.json";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8); // exibe os 8 primeiros como destaque

  return (
    <div className=" max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Favoritas da Torcida
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
