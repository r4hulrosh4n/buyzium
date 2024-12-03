"use client";
import React from "react";
import Link from "next/link";
import CategoryCamera from "@/assets/CategorySvg/CategoryCamera";
import CategoryPhone from "@/assets/CategorySvg/CategoryPhone";
import CategoryWatch from "@/assets/CategorySvg/CategoryWatch";
import CategoryComputer from "@/assets/CategorySvg/CategoryComputer";
import CategoryHeadphone from "@/assets/CategorySvg/CategoryHeadphone";
import CategoryGamepad from "@/assets/CategorySvg/CategoryGamepad";
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";

const Category = [
  {
    id: 1,
    label: "Camera",
    link: "camera",
    image: CategoryCamera,
  },
  {
    id: 2,
    label: "Phone",
    link: "phone",
    image: CategoryPhone,
  },
  {
    id: 3,
    label: "Computer",
    link: "computer",
    image: CategoryComputer,
  },
  {
    id: 4,
    label: "Watch",
    link: "watch",
    image: CategoryWatch,
  },
  {
    id: 5,
    label: "Gamepad",
    link: "gamepad",
    image: CategoryGamepad,
  },
  {
    id: 6,
    label: "HeadPhone",
    link: "headphone",
    image: CategoryHeadphone,
  },
];

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
        {Category.map((item) => (
          <Link
            href="/"
            key={item.id}
            className="text-black rounded-md w-48 h-36 border-2 justify-center items-center flex flex-col gap-4 group cursor-pointer hover:border-none hover:shadow-xl transition-colors duration-200 hover:bg-secondary2"
          >
            <item.image className="text-black group-hover:text-white" />
            <p className="text-black font-normal group-hover:text-white">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-10 h-px w-full bg-gray-300"></div>
    </div>
  );
};

export default CategoryBrowser;
