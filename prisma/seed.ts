import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const sizes = await prisma.sizes.createMany({
    data: [
      {
        name: "3.5",
        type: "shoe",
      },
      {
        name: "4",
        type: "shoe",
      },
      {
        name: "4.5",
        type: "shoe",
      },
      {
        name: "5",
        type: "shoe",
      },
      {
        name: "5.5",
        type: "shoe",
      },
      {
        name: "6",
        type: "shoe",
      },
      {
        name: "6.5",
        type: "shoe",
      },
      {
        name: "7",
        type: "shoe",
      },
      {
        name: "7.5",
        type: "shoe",
      },
      {
        name: "8",
        type: "shoe",
      },
      {
        name: "8.5",
        type: "shoe",
      },
      {
        name: "9",
        type: "shoe",
      },
      {
        name: "9.5",
        type: "shoe",
      },
      {
        name: "10",
        type: "shoe",
      },
      {
        name: "10.5",
        type: "shoe",
      },
      {
        name: "11",
        type: "shoe",
      },
      {
        name: "11.5",
        type: "shoe",
      },
      {
        name: "12",
        type: "shoe",
      },
      {
        name: "13",
        type: "shoe",
      },
      {
        name: "14",
        type: "shoe",
      },
      {
        name: "15",
        type: "shoe",
      },
    ],
  });

  const sizesQ = await prisma.sizes.findMany();
  const sizesIds = sizesQ.map((size) => ({
    id: size.id,
  }));

  const products = prisma.products.create({
    data: {
      name: "Air Jordan 1 Retro High OG",
      description:
        "Refined details and retro branding bring it all together: old-meets-new style as smooth as MJ's fadeaway.",
      gender: "men",
      type: "shoe",
      price: 180,
      products_variants: {
        create: [
          {
            name: "Yellow Ochre",
            products_variants_sizes: {
              create: sizesIds.map((sizeId) => ({})),
            },
          },
        ],
      },
    },
  });
}
