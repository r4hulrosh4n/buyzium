"use client";
import DropDown from "@/assets/icons/DropDown";

import React, { useState } from "react";

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
            <button className="w-full inline-flex justify-between items-center" onClick={() => toggleDropdown("dropdown1")} >
              <a className="outline-none" href="#">Women&apos;s Fashion</a>
              <DropDown className={`mr-4 transition-transform duration-100 ${openDropdown === "dropdown1" ? "rotate-90" : "" }`} />
            </button>
            {openDropdown === "dropdown1" && ( <ul className="flex flex-col mt-3 gap-4 ml-4">
                <li>
                  <a>Casual</a>
                </li>
                <li>
                  <a>Professional</a>
                </li>
                <li>
                  <a>Occasion</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="w-full inline-flex justify-between items-center"
              onClick={() => toggleDropdown("dropdown2")}
            >
              <a className="outline-none" href="#">Men&apos;s Fashion</a>
              <DropDown
                className={`mr-4 transition-transform duration-100 ${openDropdown === "dropdown2" ? "rotate-90" : ""
                  }`}
              />
            </button>
            {openDropdown === "dropdown2" && (
              <ul className="flex flex-col mt-3 gap-4 ml-4">
                <li>
                  <a>Casual</a>
                </li>
                <li>
                  <a>Professional</a>
                </li>
                <li>
                  <a>Occasion</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a>Electronics</a>
          </li>
          <li>
            <a className="text-nowrap">Home &amp; Lifestyle</a>
          </li>
          <li>
            <a>Medicine</a>
          </li>
          <li>
            <a>Sports &amp; Outdoor</a>
          </li>
          <li>
            <a>Baby &amp; Toys</a>
          </li>
          <li>
            <a>Grocery &amp; Pets</a>
          </li>
          <li>
            <a>Health &amp; Beauty</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
