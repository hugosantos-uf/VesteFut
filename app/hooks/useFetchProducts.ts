// src/hooks/useFetchProducts.ts
import { useEffect, useState } from "react";
import productsData from "../data/products.json";

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
};

export default function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // simula chamada a API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProducts(productsData);
      } catch (_) {
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
}
