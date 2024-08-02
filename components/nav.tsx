"use client";

import { MenuTeste } from "./icons/MenuIcon";
import Logo from "./ui/logo";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import { headerNav } from "@/lib/constants";
import Link from "next/link";
import NavAccountSection from "./nav-account-section";
import { Heart, Search, ShoppingCart } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [domIsReady, setDomIsReady] = useState<boolean>(false);

  useEffect(() => {
    setDomIsReady(true);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setIsOpen((oldValue) => !oldValue);
  }

  const headerVariant = {
    menuOpened: {
      backgroundColor: "hsl(var(--foreground))",
      color: "hsl(var(--background))",
    },
    menuClosed: {
      backgroundColor: "hsl(var(--background))",
      color: "hsl(var(--foreground))",
    },
  };

  const menuVariant = {
    menuOpened: {
      height: "100%",
    },
    menuClosed: {
      height: "0",
    },
  };

  return (
    <motion.header
      initial="menuClosed"
      animate={isOpen ? "menuOpened" : "menuClosed"}
      variants={headerVariant}
      className={clsx(
        "flex justify-between py-4 px-3 items-center border-b border-border-strong"
      )}
    >
      <div className="flex gap-3">
        <Search className="text-xl" />
        <Heart className="text-xl" />
      </div>
      <Logo />
      <div className="flex gap-3">
        <ShoppingCart className="text-xl" />
        <button onClick={handleClick}>
          <MenuTeste isOpen={isOpen} className="text-xl" />
        </button>
      </div>
      {domIsReady &&
        createPortal(
          <motion.div
            variants={menuVariant}
            className="absolute bg-white w-full overflow-hidden z-50"
          >
            <nav>
              <ul className="flex flex-col text-base pt-6">
                {headerNav.map((navLink, index) => (
                  <li
                    key={index}
                    className="border-border border-b hover:border-border-strong"
                  >
                    <Link
                      className="block px-3 py-3 font-semibold"
                      href={navLink.href}
                    >
                      {navLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>,
          window.document.getElementById("mobile-nav-portal") as HTMLElement
        )}
    </motion.header>
  );
}
