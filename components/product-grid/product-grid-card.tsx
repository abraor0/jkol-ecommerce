import { getGridProducts } from "@/prisma/api";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { brandIcons } from "@/lib/constants";
import FavoriteIcon from "../icons/FavoriteIcon";
import Link from "next/link";

interface ProductGridCardProps {
  product: Awaited<ReturnType<typeof getGridProducts>>[number];
}

export default function ProductGridCard({ product }: ProductGridCardProps) {
  const productUrl = `/p/${product.products.id}?${new URLSearchParams({
    variant: product.id.toString(),
  }).toString()}`;

  return (
    <Link href={productUrl}>
      <Card className="w-full border-none">
        <div className="relative w-full mb-2">
          <Image
            src={product.products_variants_photos[0].url}
            alt={`A ${product.products.name} ${product.products.type}`}
            width={200}
            height={200}
            className="block  object-cover"
          />
          <button className="text-xl absolute right-0 top-0 p-2">
            <FavoriteIcon />
          </button>
        </div>
        <CardHeader className="p-0 space-y-0">
          <CardTitle className="text-base">{`${product.products.name} "${product.name}"`}</CardTitle>
          <CardDescription className="flex gap-2 items-center text-black">
            <i className="text-2xl ">{brandIcons[product.products.brand]}</i>{" "}
            &bull;
            <span>{`${product.gender}'s ${product.products.type}s`}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">${`${product.price}`}</CardContent>
      </Card>
    </Link>
  );
}
