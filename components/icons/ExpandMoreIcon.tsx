import { IconType } from "@/lib/types";

export default function ExpandMoreIcon(attrr: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      height="1em"
      viewBox="0 -960 960 960"
      width="1em"
      {...attrr}
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}
