"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        {/*logo*/}
        <div className="mt-32 mb-40 text-2xl text-center">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Clinton<span className="text-accent"> Nguyen</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/*nav*/}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.href}
                  className={`${
                    link.href === pathname
                      ? "text-accent border-b-2 border-accent"
                      : ""
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
