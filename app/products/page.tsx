"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { useDebounce } from "@/hooks/useDebounce";
import { Product } from "@/interfaces/IProduct";
import { useFetchProducts } from "@/hooks/useFetchProducts";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);

  useFetchProducts(debouncedQuery, setProducts);

  return (
    <main>
      <h1>Products</h1>
      <SearchBar onChange={setQuery} />
      <ul className="grid">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}
