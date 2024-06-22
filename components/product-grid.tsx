import { getGridProducts } from "@/prisma/api";
import ProductGridCard from "./product-grid-card";

export default async function ProductGrid() {
  const products = await getGridProducts();

  return (
    <section>
      {products.map((product) => {
        return <ProductGridCard key={product.id} product={product} />;
      })}
    </section>
  );
}
