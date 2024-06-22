-- CreateEnum
CREATE TYPE "Genders" AS ENUM ('men', 'women');

-- CreateEnum
CREATE TYPE "ItemTypes" AS ENUM ('apparel', 'shoe');

-- CreateEnum
CREATE TYPE "Ratings" AS ENUM ('5', '4.5', '4', '3.5', '3', '2.5', '2', '1.5', '1', '0.5', '0');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "released_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ItemTypes" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_variants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "price" DECIMAL(9,4) NOT NULL,
    "gender" "Genders" NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "products_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_variants_photos" (
    "id" SERIAL NOT NULL,
    "product_variant_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "products_variants_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_variants_sizes" (
    "product_variant_id" INTEGER NOT NULL,
    "size_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "products_variants_sizes_pkey" PRIMARY KEY ("product_variant_id","size_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(70) NOT NULL,
    "reviewbody" TEXT,
    "rating" "Ratings" NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" INTEGER NOT NULL,
    "product" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(4) NOT NULL,
    "type" "ItemTypes" NOT NULL,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(254) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_variants_photos_url_key" ON "products_variants_photos"("url");

-- CreateIndex
CREATE UNIQUE INDEX "sizes_name_key" ON "sizes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_id_user_id_key" ON "accounts"("id", "user_id");

-- AddForeignKey
ALTER TABLE "products_variants" ADD CONSTRAINT "products_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_variants_photos" ADD CONSTRAINT "products_variants_photos_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "products_variants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_variants_sizes" ADD CONSTRAINT "products_variants_sizes_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "products_variants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_variants_sizes" ADD CONSTRAINT "products_variants_sizes_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_author_fkey" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
