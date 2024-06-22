/*
  Warnings:

  - You are about to drop the column `author` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `reviewbody` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_id` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_author_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_product_fkey";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "author",
DROP COLUMN "product",
DROP COLUMN "reviewbody",
ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD COLUMN     "review_body" TEXT;

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user_accounts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_login_data" (
    "account_id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "password" VARCHAR(254) NOT NULL,

    CONSTRAINT "users_login_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users_login_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_login_data" ADD CONSTRAINT "users_login_data_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
