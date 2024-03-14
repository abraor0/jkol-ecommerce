import { IconType } from "@/lib/types";
import { motion, useMotionValue } from "framer-motion";

type MenuTesteType = IconType & {
  isOpen: boolean;
};

export function MenuTeste({ isOpen, ...attrr }: MenuTesteType) {
  const x1 = useMotionValue(1);
  const y1 = useMotionValue(2);
  const theta1 = useMotionValue(0);

  const w2 = useMotionValue(14);
  const opacity2 = useMotionValue(1);

  const x3 = useMotionValue(1);
  const y3 = useMotionValue(14);
  const theta3 = useMotionValue(0);

  if (isOpen) {
    x1.set(1.5);
    y1.set(3);
    theta1.set(45);

    w2.set(16);
    opacity2.set(0);

    x3.set(2);
    y3.set(13);
    theta3.set(-45);
  } else {
    x1.set(1);
    y1.set(2);
    theta1.set(0);

    w2.set(14);
    opacity2.set(1);

    x3.set(1);
    y3.set(14);
    theta3.set(0);
  }

  return (
    <motion.svg
      initial="menuClosed"
      animate={isOpen ? "menuOpened" : "menuClosed"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      stroke="currentColor"
      fill="currentColor"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <motion.rect
        animate={{
          transform: `translate(${x3.get()}px, ${y3.get()}px) rotate(${theta3.get()}deg)`,
          width: w2.get(),
        }}
        id="menu-s-rect1"
        width="14"
        height="2"
        rx="0"
        ry="0"
        transform="translate(1, 14)"
        strokeWidth="0"
        style={{
          originX: (1 / 16) * 100 + "%",
          originY: (1 / 16) * 100 + "%",
        }}
      />

      <motion.rect
        animate={{ opacity: opacity2.get() }}
        id="menu-s-rect2"
        width="14"
        height="2"
        rx="0"
        ry="0"
        transform="translate(1 8)"
        strokeWidth="0"
      />

      <motion.rect
        animate={{
          transform: `translate(${x1.get()}px, ${y1.get()}px) rotate(${theta1.get()}deg)`,
          width: w2.get(),
        }}
        id="menu-s-rect3"
        width="14"
        height="2"
        rx="0"
        ry="0"
        strokeWidth="0"
        transform="translate(1 2)"
        style={{ originX: (1 / 16) * 100 + "%", originY: (2 / 16) * 100 + "%" }}
      />
    </motion.svg>
  );
}

export default function MenuIcon(attrr: MenuTesteType) {
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
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}
