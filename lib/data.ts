import { Product } from "@/interfaces/IProduct";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchProducts(query: string): Promise<Product[]> {
  const res = await fetch(`https://api.example-store.com/products?q=${query}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}
