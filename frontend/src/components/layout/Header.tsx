"use client";

import React from "react";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <header className="bg-bg h-24 text-text2 flex items-center flex-col justify-end after:absolute after:bg-gray-300 after:w-full after:h-[1px]">
      <div className="container mx-auto navbar h-12 mb-3 flex flex-row justify-between items-center">
        <a href="/" className="text-3xl font-bold tracking-wide">
          Buyzium
        </a>
        <ul className="flex flex-row items-center justify-center space-x-12">
          <li className="list-none text-base">
            <a
              href="/"
              className="cursor-pointer border-b-[2px] border-b-gray-400 pb-[2px] border-black"
            >
              Home
            </a>
          </li>
          <li className="list-none text-base">
            <a
              href="/contact"
              className="cursor-pointer border-b-gray-400 pb-[2px] border-black"
            >
              Contact
            </a>
          </li>
          <li className="list-none text-base">
            <a
              href="/about"
              className="cursor-pointer border-b-gray-400 pb-[2px] border-black"
            >
              About
            </a>
          </li>
          <li className="list-none text-base">
            <a
              href="/signup"
              className="cursor-pointer border-b-gray-400 pb-[2px] border-black"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <div className="flex flex-row space-x-8">
          <div className="flex bg-secondary rounded py-2">
            <input
              className="px-4 w-52 placeholder:text-xs text-xs outline-none bg-secondary"
              placeholder="What are you looking for?"
            ></input>
            <span className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather cursor-pointer feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
          <a
            href="/wishlist"
            className="relative after:content-['1'] after:text-primary after:absolute after:bottom-3 after:left-3 after:bg-secondary2 after:w-4 after:h-4 after:text-xs after:rounded-full after:flex after:items-center after:justify-center my-auto cursor-pointer hover:shadow-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </a>
          <a
            href="/cart"
            className="relative after:content-['4'] after:text-primary after:absolute after:bottom-3 after:left-3 after:bg-secondary2 after:w-4 after:h-4 after:text-xs after:rounded-full after:flex after:items-center after:justify-center my-auto cursor-pointer hover:shadow-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:shadow-black"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </a>
          <a href="/account" className="my-auto cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="active:bg-secondary2 active:p-1 active:text-primary rounded-full"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
