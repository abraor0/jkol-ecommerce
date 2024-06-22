import { $Enums, PrismaClient } from "@prisma/client";

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

  const products = await prisma.products.createManyAndReturn({
    data: [
      {
        name: "Air Jordan 1 Retro High OG",
        description:
          "Refined details and retro branding bring it all together: old-meets-new style as smooth as MJ's fadeaway.",
        type: "shoe",
      },
      {
        name: "Air Jordan 1 High '85",
        description:
          "The Air Jordan 1 High '85 'Varsity Red' brings back the OG colorway of Michael Jordan's first signature shoe.",
        type: "shoe",
      },
      {
        name: "Nike Air Force 1 '07",
        description:
          "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
        type: "shoe",
      },
    ],
  });

  await prisma.productsVariants.create({
    data: {
      name: "Black & White",
      price: 180,
      gender: $Enums.Genders.men,
      product_id: products[0].id,
      products_variants_sizes: {
        createMany: {
          data: [
            {
              size_id: sizesIds[2].id,
            },
            {
              quantity: 7,
              size_id: sizesIds[3].id,
            },
            {
              quantity: 8,
              size_id: sizesIds[4].id,
            },
            {
              quantity: 9,
              size_id: sizesIds[5].id,
            },
            {
              quantity: 10,
              size_id: sizesIds[6].id,
            },
            {
              size_id: sizesIds[7].id,
            },
            {
              quantity: 12,
              size_id: sizesIds[8].id,
            },
            {
              quantity: 13,
              size_id: sizesIds[9].id,
            },
            {
              quantity: 14,
              size_id: sizesIds[10].id,
            },
            {
              quantity: 15,
              size_id: sizesIds[11].id,
            },
            {
              quantity: 16,
              size_id: sizesIds[12].id,
            },
            {
              quantity: 17,
              size_id: sizesIds[13].id,
            },
            {
              quantity: 18,
              size_id: sizesIds[14].id,
            },
            {
              quantity: 19,
              size_id: sizesIds[15].id,
            },
            {
              quantity: 20,
              size_id: sizesIds[16].id,
            },
            {
              quantity: 21,
              size_id: sizesIds[17].id,
            },
            {
              quantity: 22,
              size_id: sizesIds[18].id,
            },
            {
              quantity: 23,
              size_id: sizesIds[19].id,
            },
          ],
        },
      },
      products_variants_photos: {
        createMany: {
          data: [
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/454e96cf-568a-4031-ab9a-61818084b11d/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f3d7e147-5da0-4a11-a4ee-fd1432ad220d/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dd1058d4-c796-4bc0-b049-bfac23291234/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f7b4b300-8d0c-4ff5-8b10-a5ad8201737d/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/edb2a976-c01b-439d-8adc-f2009340983b/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2c50b7fa-1468-4d22-aeef-abc0606052c2/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c56d5966-cc10-435a-8ced-2ce7fee27820/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
            },
          ],
        },
      },
    },
  });

  await prisma.productsVariants.create({
    data: {
      name: "Latte",
      price: 180,
      gender: $Enums.Genders.men,
      product_id: products[0].id,
      products_variants_sizes: {
        createMany: {
          data: [
            {
              quantity: 30,
              size_id: sizesIds[2].id,
            },
            {
              quantity: 7,
              size_id: sizesIds[3].id,
            },
            {
              quantity: 8,
              size_id: sizesIds[4].id,
            },
            {
              quantity: 20,
              size_id: sizesIds[5].id,
            },
            {
              quantity: 10,
              size_id: sizesIds[6].id,
            },
            {
              size_id: sizesIds[7].id,
            },
            {
              size_id: sizesIds[8].id,
            },
            {
              quantity: 123,
              size_id: sizesIds[9].id,
            },
            {
              quantity: 144,
              size_id: sizesIds[10].id,
            },
            {
              quantity: 115,
              size_id: sizesIds[11].id,
            },
            {
              quantity: 136,
              size_id: sizesIds[12].id,
            },
            {
              quantity: 97,
              size_id: sizesIds[13].id,
            },
            {
              quantity: 218,
              size_id: sizesIds[14].id,
            },
            {
              quantity: 109,
              size_id: sizesIds[15].id,
            },
            {
              quantity: 320,
              size_id: sizesIds[16].id,
            },
            {
              quantity: 21,
              size_id: sizesIds[17].id,
            },
            {
              quantity: 2,
              size_id: sizesIds[18].id,
            },
            {
              size_id: sizesIds[19].id,
            },
          ],
        },
      },
      products_variants_photos: {
        createMany: {
          data: [
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb5e235a-9096-44cd-af79-f8f09da6683c/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a116a25c-1f6a-439c-aa28-70f0dad73f05/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da87924d-0cc7-4970-a39f-9e5b70e614f2/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bca6ed74-cba8-4963-9bb6-5a51856511aa/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/db918db2-1828-46f9-893e-19be488ca8e9/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/27cb5c22-2de6-47f6-ac28-c2670563d79e/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a2d16d86-5585-46de-af37-ef9aa988af2e/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae9bad79-0192-4367-b264-ef31d7d320cd/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae06b09f-8ef2-4dd7-814b-64fcc77794e6/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f7ecf9fa-6a7c-4c55-8165-c1f68699fb72/air-jordan-1-retro-high-og-latte-womens-shoes-Dw2wdP.png",
            },
          ],
        },
      },
    },
  });

  await prisma.productsVariants.create({
    data: {
      name: "Metallic Burgundy",
      price: 200,
      gender: $Enums.Genders.men,
      product_id: products[1].id,
      products_variants_sizes: {
        createMany: {
          data: [
            {
              quantity: 30,
              size_id: sizesIds[2].id,
            },
            {
              quantity: 7,
              size_id: sizesIds[3].id,
            },
            {
              size_id: sizesIds[4].id,
            },
            {
              quantity: 20,
              size_id: sizesIds[5].id,
            },
            {
              size_id: sizesIds[6].id,
            },
            {
              size_id: sizesIds[7].id,
            },
            {
              size_id: sizesIds[8].id,
            },
            {
              quantity: 123,
              size_id: sizesIds[9].id,
            },
            {
              quantity: 144,
              size_id: sizesIds[10].id,
            },
            {
              size_id: sizesIds[11].id,
            },
            {
              quantity: 36,
              size_id: sizesIds[12].id,
            },
            {
              quantity: 97,
              size_id: sizesIds[13].id,
            },
            {
              quantity: 218,
              size_id: sizesIds[14].id,
            },
            {
              quantity: 109,
              size_id: sizesIds[15].id,
            },
            {
              quantity: 320,
              size_id: sizesIds[16].id,
            },
            {
              quantity: 21,
              size_id: sizesIds[17].id,
            },
            {
              quantity: 2,
              size_id: sizesIds[18].id,
            },
            {
              size_id: sizesIds[19].id,
            },
          ],
        },
      },
      products_variants_photos: {
        createMany: {
          data: [
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62f9113f-020a-45ee-bbd8-7defa134ac4a/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/db922c47-f5df-4243-acae-cdfeaa211942/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7504016d-66f2-4255-be19-ad48b2e43319/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8eebc382-0ae0-4673-9d59-5e222985190e/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/01db96a2-8731-48f3-a315-983fd7021201/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7397cc40-3984-4bc4-b03d-2e949ce1e5af/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1f25519a-8628-42b6-a7ba-c459130ad345/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a8394eb-4d26-4605-917b-34343840166d/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png",
            },
          ],
        },
      },
    },
  });

  await prisma.productsVariants.create({
    data: {
      name: "Snow White",
      price: 115,
      gender: $Enums.Genders.men,
      product_id: products[2].id,
      products_variants_sizes: {
        createMany: {
          data: [
            {
              quantity: 30,
              size_id: sizesIds[2].id,
            },
            {
              quantity: 7,
              size_id: sizesIds[3].id,
            },
            {
              size_id: sizesIds[4].id,
            },
            {
              quantity: 20,
              size_id: sizesIds[5].id,
            },
            {
              size_id: sizesIds[6].id,
            },
            {
              size_id: sizesIds[7].id,
            },
            {
              size_id: sizesIds[8].id,
            },
            {
              size_id: sizesIds[9].id,
            },
            {
              quantity: 144,
              size_id: sizesIds[10].id,
            },
            {
              size_id: sizesIds[11].id,
            },
            {
              quantity: 36,
              size_id: sizesIds[12].id,
            },
            {
              quantity: 97,
              size_id: sizesIds[13].id,
            },
            {
              quantity: 218,
              size_id: sizesIds[14].id,
            },
            {
              quantity: 109,
              size_id: sizesIds[15].id,
            },
            {
              quantity: 320,
              size_id: sizesIds[16].id,
            },
            {
              quantity: 21,
              size_id: sizesIds[17].id,
            },
            {
              quantity: 2,
              size_id: sizesIds[18].id,
            },
            {
              size_id: sizesIds[19].id,
            },
          ],
        },
      },
      products_variants_photos: {
        createMany: {
          data: [
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/air-force-1-07-mens-shoes-jBrhbr.png",
            },
            {
              url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/air-force-1-07-mens-shoes-jBrhbr.png",
            },
          ],
        },
      },
    },
  });

  await prisma.accounts.create({
    data: {
      name: "John Doe",
      user: {
        create: [
          {
            email: "johndoe@gmail.com",
            password:
              "$2a$10$NLh.Eap2yNvcvwygMOpHUOUMll.SfOb3wRIX5EWKm77eb6uMhKqmm",
            reviews: {
              createMany: {
                data: [
                  {
                    title: "Comfortable and clean looking, nice shoe",
                    review_body:
                      "Comfortable and clean looking, nice shoe, definitely recommend buying. Worth it for the price.",
                    rating: $Enums.Ratings.S5,
                    product_id: products[0].id,
                  },
                  {
                    title: "Great shoe, very comfortable",
                    review_body:
                      "Great shoe, very comfortable, I would recommend buying.",
                    rating: $Enums.Ratings.S45,
                    product_id: products[1].id,
                  },
                ],
              },
            },
          },
        ],
      },
    },
  });
}

main()
  .then(() => {
    console.log("Seed completed");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();

    process.exit(1);
  });
