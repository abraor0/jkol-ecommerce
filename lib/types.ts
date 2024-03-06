import { Url } from "next/dist/shared/lib/router/router";
import { SVGAttributes } from "react";

export type IconType = SVGAttributes<SVGElement>;

export type LinkDescription = {
  name: string;
  href: Url;
};

export type NavCategory = {
  category: string;
  links: LinkDescription[];
};
