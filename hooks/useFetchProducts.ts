import { Product } from "@/interfaces/IProduct";
import { fetchProducts } from "@/lib/data";
import { useEffect } from "react";

export function useFetchProducts(
  debouncedQuery: string,
  setProducts: (data: Product[]) => void,
) {
  useEffect(() => {
    if (debouncedQuery) {
      fetchProducts(debouncedQuery).then((data) => {
        setProducts(data);
      });
    }
  }, [debouncedQuery]);
}
