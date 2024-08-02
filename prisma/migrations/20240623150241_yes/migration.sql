/*
  Warnings:

  - Added the required column `brand` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Brands" AS ENUM ('nike', 'adidas', 'puma', 'vans');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "brand" "Brands" NOT NULL;
