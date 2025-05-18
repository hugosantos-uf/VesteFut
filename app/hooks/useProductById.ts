import products from "../data/products.json";

export function useProductById(id: number) {
  return products.find((p) => p.id === id);
}
