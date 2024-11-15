"use client";
import React from "react";
import CategoryCamera from "@/assets/CategorySvg/CategoryCamera";
import CategoryPhone from "@/assets/CategorySvg/CategoryPhone";
import CategoryWatch from "@/assets/CategorySvg/CategoryWatch";
import CategoryComputer from "@/assets/CategorySvg/CategoryComputer";
import CategoryHeadphone from "@/assets/CategorySvg/CategoryHeadphone";
import CategoryGamepad from "@/assets/CategorySvg/CategoryGamepad";
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";

type Props = {};
const CategoryBrowser = (props: Props) => {
  return (
    <div className="container mx-auto mt-16 gap-8 flex flex-col overflow-hidden">
      <div className="flex items-center">
        <div className="bg-secondary2 w-6 h-12 rounded"></div>
        <span className="text-secondary2 ml-4 font-semibold">Categories</span>
      </div>
      <div className="flex mb-4 justify-between">
        <div className="flex items-end -mt-6 space-x-32">
          <h1 className="text-4xl tracking-wider font-semibold">
            Browse By category
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-secondary rounded-full">
            <LeftArrow className="" />
          </button>
          <button className="p-2 bg-secondary rounded-full">
            <RightArrow className="" />
          </button>
        </div>
      </div>
      <div className="flex w-full xl:justify-around justify-between">
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryCamera className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Camera
          </p>
        </a>
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryPhone className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Phone
          </p>
        </a>
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryComputer className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Computer
          </p>
        </a>
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryWatch className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Watch
          </p>
        </a>
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryGamepad className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Gamepad
          </p>
        </a>
        <a className="rounded-md w-48 h-36 border-2 justify-center text-button items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2">
          <CategoryHeadphone className="group-hover:text-white" />
          <p className="text-black font-normal group-hover:text-white">
            Headphones
          </p>
        </a>
      </div>
      <div className="mt-10 h-px w-full bg-gray-300"></div>
    </div>
  );
};

export default CategoryBrowser;
