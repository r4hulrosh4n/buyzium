"use client";
import React from "react";

const TopHeader = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen && (
        <div className="bg-black h-12 hidden sm:block">
          <div className="container h-[100%] flex items-center justify-end mx-auto flex-row ">
            <p className="mx-auto flex-2 text-sm text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a
                href="/"
                onClick={toggleOpen}
                className="p-2 text-sm font-semibold underline underline-offset-1"
              >
                Shop Now
              </a>
            </p>

            <select className="text-white bg-black inline-flex text-sm focus:outline-none rounded-none shadow-sm px-4 py-2">
              <option>English</option>
              <option>Spanish</option>
              <option>Hindi</option>
              <option>German</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
