import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductPage({ params }) {
  const { productId } = params;

  
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ padding: "20px" }}>
      <ProductCard product={product} />
    </div>
  );
}
