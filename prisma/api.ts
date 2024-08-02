import { prisma } from "./db";

export async function getGridProducts() {
  const products = await prisma.productsVariants.findMany({
    include: {
      products: {
        select: {
          id: true,
          name: true,
          description: true,
          type: true,
          brand: true,
        },
      },
      products_variants_photos: {
        take: 1,
      },
    },
  });

  return products;
}
