import { Product } from "@/interfaces/IProduct";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card" onClick={() => alert(`Added ${product.name}`)}>
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
