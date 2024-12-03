"use client";

import CartIcon from "@/assets/icons/CartIcon";
import Link from "next/link";
import WishlistIcon from "@/assets/icons/WishlistIcon";

import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";
import User from "./User";

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const navData = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Contact", link: "/contact" },
    { id: 3, label: "About", link: "/about" },
    { id: 4, label: "Sign Up", link: "/signup" },
  ];

  return (
    <header className="w-full sticky top-0 bg-bg h-24 z-40 text-text2 flex items-center flex-col justify-end after:hidden lg:after:block after:absolute after:bg-gray-300 after:w-full after:h-[1px]">
      <div className="container mx-auto navbar h-12 mb-3 flex flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-bold tracking-wide">
          Buyzium
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center justify-center space-x-12">
            {navData.map((nav) => (
              <li key={nav.id} className="list-none text-base">
                <Link
                  href={nav.link}
                  className={` ${pathname === nav.link ? "border-b-[2px] border-b-gray-400 pb-[2px] border-black" : ""} cursor-pointer `}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row space-x-8">
          <SearchBar />
          <Link
            href="/wishlist"
            className="hidden sm:block relative after:content-['1'] after:text-primary after:absolute after:bottom-3 after:left-3 after:bg-secondary2 after:w-4 after:h-4 after:text-xs after:rounded-full after:flex after:items-center after:justify-center my-auto cursor-pointer hover:shadow-black"
          >
            <WishlistIcon
              className={`${pathname.startsWith("/wishlist") ? "p-[3px]" : ""}`}
            />
          </Link>
          <Link
            href="/cart"
            className="hidden sm:block relative after:content-['4'] after:text-primary after:absolute after:bottom-3 after:left-3 after:bg-secondary2 after:w-4 after:h-4 after:text-xs after:rounded-full after:flex after:items-center after:justify-center my-auto cursor-pointer hover:shadow-black"
          >
            <CartIcon
              className={`${pathname.startsWith("/cart") ? "p-[3px]" : ""}`}
            />
          </Link>
          {isLoggedIn && <User />}
        </div>
      </div>
    </header>
  );
};

export default Header;
