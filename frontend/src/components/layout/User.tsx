"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import UserIcon from "@/assets/icons/UserIcon";
import CancleIcon from "@/assets/icons/CancleIcon";
import { usePathname } from "next/navigation";
import LogOutIcon from "@/assets/icons/LogoutIcon";
import ShoppingBagIcon from "@/assets/icons/ShoppingBagIcon";
import StarIcon from "@/assets/icons/StarIcon";
import Link from "next/link";

type Props = {};

const userOption = [
  { label: "Manage Your Account", url: "/account", image: UserIcon },
  { label: "My Orders", url: "/account/orders", image: ShoppingBagIcon },
  {
    label: "My Cancellations",
    url: "/account/cancellations",
    image: CancleIcon,
  },
  { label: "My Reviews", url: "/account/reviews", image: StarIcon },
];

const User = (props: Props) => {
  const pathname = usePathname();
  const [showUserOption, setShowUserOption] = useState(false);
  const userMenuRef = useRef(null);

  const toggleUserOption = () => {
    setShowUserOption(!showUserOption);
  };

  const closeUserMenu = (e) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setShowUserOption(false);
    }
  };

  useEffect(() => {
    if (showUserOption) {
      document.addEventListener("click", closeUserMenu);
    } else {
      document.removeEventListener("click", closeUserMenu);
    }

    return () => {
      document.removeEventListener("click", closeUserMenu);
    };
  }, [showUserOption]);
  return (
    <div className="m-auto relative">
      <Link
        href="#"
        ref={userMenuRef}
        onClick={toggleUserOption}
        className="relative hidden sm:block my-auto cursor-pointer"
      >
        <UserIcon
          className={`${
            pathname.startsWith("/account") || showUserOption
              ? "bg-secondary2 p-[3px] text-primary"
              : "bg-white"
          } rounded-full`}
        />
      </Link>
      {showUserOption && (
        <div className="absolute px-4 py-2 backdrop-blur-2xl bg-black/40 rounded w-48 z-50 top-8 right-0 border-text1/10 border-0 shadow-lg text-white">
          <ul className="flex flex-col gap-2">
            {userOption.map((option, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:translate-x-1"
              >
                <option.image className="w-4" />
                <Link href={option.url} className="text-xs font-medium">
                  {option.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 hover:translate-x-1">
              <LogOutIcon className="w-4" />
              <Link href="/" className="text-xs font-medium">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
