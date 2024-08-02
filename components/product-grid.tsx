import { getGridProducts } from "@/prisma/api";
import ProductGridCard from "./product-grid-card";

export default async function ProductGrid() {
  const products = await getGridProducts();

  return (
    <section className="p-4 grid grid-cols-2 gap-4">
      {products.map((product) => {
        return <ProductGridCard key={product.id} product={product} />;
      })}
    </section>
  );
}
