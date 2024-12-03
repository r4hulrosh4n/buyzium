"use client";
import DropDown from "@/assets/icons/DropDown";
import React, { useState } from "react";
import Link from "next/link";

const CategoryList = [
  { label: "Electronics", path: "/electronics" },
  { label: "Home Lifestyle", path: "/home-and-lifestyle" },
  { label: "Medicine", path: "/medicine" },
  { label: "Sports Outdoor", path: "/sports-and-outdoor" },
  { label: "Baby Toys", path: "/baby-and-toys" },
  { label: "Grocery Pets", path: "/grocery-and-pets" },
  { label: "Health Beauty", path: "/health-and-beauty" },
];

const Category = (props: Props) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-1/4 mt-10 h-[340px] relative">
      <div className="after:absolute after:-top-10 overflow-hidden after:right-0 after:w-[1px] after:h-[calc(100%+2.5em)] after:bg-gray-300 ">
        <ul className="flex flex-col gap-4">
          <li>
            <button
              className="w-full inline-flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown1")}
            >
              <Link className="outline-none" href="/">
                Women&apos;s Fashion
              </Link>
              <DropDown
                className={`mr-4 transition-transform duration-100 ${openDropdown === "dropdown1" ? "rotate-90" : ""}`}
              />
            </button>
            {openDropdown === "dropdown1" && (
              <ul className="flex flex-col mt-3 gap-4 ml-4">
                <li>
                  <Link href="/women">Casual</Link>
                </li>
                <li>
                  <Link href="/women">Professional</Link>
                </li>
                <li>
                  <Link href="/women">Occasion</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="w-full inline-flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown2")}
            >
              <Link className="outline-none" href="/">
                Men&apos;s Fashion
              </Link>
              <DropDown
                className={`mr-4 transition-transform duration-100 ${
                  openDropdown === "dropdown2" ? "rotate-90" : ""
                }`}
              />
            </button>
            {openDropdown === "dropdown2" && (
              <ul className="flex flex-col mt-3 gap-4 ml-4">
                <li>
                  <Link href="/men">Casual</Link>
                </li>
                <li>
                  <Link href="/men">Professional</Link>
                </li>
                <li>
                  <Link href="/men">Occasion</Link>
                </li>
              </ul>
            )}
          </li>

          {CategoryList.map((item) => (
            <li key={item.label}>
              <Link href={item.path} className="">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
