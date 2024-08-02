import { IconType } from "@/lib/types";

interface FavoriteIconProps extends IconType {
  filled?: boolean;
}

export default function FavoriteIcon({
  filled = false,
  ...attrr
}: FavoriteIconProps) {
  if (filled) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="currentColor"
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        {...attrr}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        {...attrr}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    );
  }
}
