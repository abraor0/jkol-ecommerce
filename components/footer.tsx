import { footerNav } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "./ui/accordion";
import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer>
      <Accordion type="multiple">
        {footerNav.map((category, index) => {
          return (
            <AccordionItem
              isFooter
              value={`item-${index}`}
              key={`item-${index}`}
            >
              <AccordionTrigger isFooter>{category.category}</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-1">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="bg-red-600 py-12 flex flex-col items-center text-white text-sm gap-9">
        <div className="flex gap-6 text-xl">
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <YoutubeIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <Logo />
          <p>2024 © JKOL All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
