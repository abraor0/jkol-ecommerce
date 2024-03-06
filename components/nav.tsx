"use client";

import CartIcon from "./icons/CartIcon";
import FavoriteIcon from "./icons/FavoriteIcon";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [domIsReady, setDomIsReady] = useState<boolean>(false);

  useEffect(() => {
    setDomIsReady(true);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setIsOpen((oldValue) => !oldValue);
  }

  return (
    <motion.header
      layout
      className={clsx(
        "flex justify-between py-4 px-3 items-center border-b border-border-strong",
        isOpen && "bg-foreground text-white"
      )}
    >
      <div className="flex gap-3">
        <SearchIcon className="text-xl" />
        <FavoriteIcon className="text-xl" />
      </div>
      <Logo />
      <div className="flex gap-3">
        <CartIcon className="text-xl" />
        <button onClick={handleClick}>
          <MenuIcon className="text-xl" />
        </button>
      </div>
      {domIsReady &&
        createPortal(
          <motion.div
            animate="height"
            className={clsx(
              "bg-border absolute overflow-hidden z-50 px-3",
              isOpen ? "h-full" : "h-0"
            )}
          >
            <h1>This is a test</h1>
            <p>
              amdais mdasidmasi odmasoidma sdasidmaos ipdmao ismdas iomdaosimdo
              iasmdoiasmdioasmdioasmd
            </p>
          </motion.div>,
          window.document.getElementById("mobile-nav-portal") as HTMLElement
        )}
    </motion.header>
  );
}
