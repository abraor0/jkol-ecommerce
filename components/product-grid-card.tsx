import { getGridProducts } from "@/prisma/api";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface ProductGridCardProps {
  product: Awaited<ReturnType<typeof getGridProducts>>[number];
}

export default function ProductGridCard({ product }: ProductGridCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle>{product.products.name}</CardTitle>
        <CardDescription>{`${product.gender}'s ${product.products.type}s`}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
