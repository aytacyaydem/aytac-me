"use client";
import React, { useState } from "react";
import ThemeModeToggle from "../ThemeSwitcher";
import Link from "next/link";
import AnimatedHamburgerIcon from "../AnimatedHamburgerIcon";

const links = [
  {
    name: "Hakkımda",
    href: "/",
  },
  {
    name: "Yazılar",
    href: "/posts",
  },
  {
    name: "Yer İmleri",
    href: "/bookmarks",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="w-full shadow-md dark:shadow-gray-900 ">
        <div className="container">
          <div className="h-20 flex items-center justify-between">
            <ul>
              {links.map((link) => (
                <li
                  key={link.href}
                  className="hidden mr-4 sm:hidden md:inline-block"
                >
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-1">
              <AnimatedHamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
              <ThemeModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
