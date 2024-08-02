import { $Enums } from "@prisma/client";
import { LinkDescription, NavCategory } from "./types";
import React from "react";
import NikeIcon from "@/components/icons/NikeIcon";
import AdidasIcon from "@/components/icons/AdidasIcon";
import PumaIcon from "@/components/icons/PumaIcon";

export const footerNav: NavCategory[] = [
  {
    category: "Shop",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Men",
        href: "/",
      },
      {
        name: "Women",
        href: "/",
      },
    ],
  },
  {
    category: "Company",
    links: [
      {
        name: "About us",
        href: "/",
      },
      {
        name: "Terms of Use",
        href: "/",
      },
      {
        name: "Privacy",
        href: "/",
      },
      {
        name: "Careers",
        href: "/",
      },
    ],
  },
  {
    category: "Support",
    links: [
      {
        name: "Help",
        href: "/",
      },
      {
        name: "Return Policies",
        href: "/",
      },
      {
        name: "Terms and Conditions",
        href: "/",
      },
      {
        name: "Shipping and Delivery",
        href: "/",
      },
    ],
  },
];

export const headerNav: LinkDescription[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop All",
    href: "/",
  },
  {
    name: "Men",
    href: "/",
  },
  {
    name: "Women",
    href: "/",
  },
];

export const brandIcons: {
  [key in $Enums.Brands]: JSX.Element;
} = {
  nike: <NikeIcon />,
  adidas: <AdidasIcon />,
  puma: <PumaIcon />,
};
