"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { useDebounce } from "@/hooks/useDebounce";
import { Product } from "@/interfaces/IProduct";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      fetchProducts(debouncedQuery).then((data) => {
        setProducts(data);
      });
    }
  }, [debouncedQuery]);

  return (
    <main>
      <h1>Products</h1>
      <SearchBar onChange={setQuery} />
      <div className="grid">
        {products.map((product: Product, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </main>
  );
}
