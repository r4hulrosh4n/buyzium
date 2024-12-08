import React from "react";
import Link from "next/link";
import WishlistIcon from "@/assets/icons/WishlistIcon";
import Delivery from "@/assets/icons/Delivery";
import Plus from "@/assets/icons/Plus";
import Minus from "@/assets/icons/Minus";
import Star from "@/assets/icons/Star";

const Size = ["XS", "S", "M", "L", "XL"];

const Product = () => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/account">Account</Link>
      </div>

      <div className="w-full flex my-10 gap-16 justify-between">
        <div className="mx-auto w-full flex gap-8">
          <div className="w-64 flex flex-col justify-between overflow-hidden">
            <div className="w-full h-36 bg-secondary rounded"></div>
            <div className="w-full h-36 bg-secondary rounded"></div>
            <div className="w-full h-36 bg-secondary rounded"></div>
            <div className="w-full h-36 bg-secondary rounded"></div>
          </div>
          <div className="bg-secondary rounded w-full"></div>
        </div>
        <div className="w-6/12 flex flex-col gap-4">
          <h1 className="font-semibold tracking-wide text-2xl">
            Havic HV G-92 Gamepad
          </h1>
          <div className="w-full h-5 flex gap-4">
            <div className="flex items-center gap-px">
              <Star className="fill-yellow-400 p-px" />
              <Star className="fill-yellow-400 p-px" />
              <Star className="fill-yellow-400 p-px" />
              <Star className="fill-gray-400 p-px" />
              <Star className="fill-gray-400 p-px" />
            </div>
            <span className="border-r border-black text-sm text-black/50 pr-4">
              (150 Reviews)
            </span>
            <span className="text-sm text-button1">In Stock</span>
          </div>
          <h1 className="font-normal tracking-wide text-2xl">$192.00</h1>
          <p className="pr-10 text-sm pt-2">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="w-full h-px my-2 bg-black/50"></div>
          <div className="flex items-center gap-2">
            <p className="text-xl tracking-wide mr-4">Colours:</p>
            <button className="size-5 rounded-full bg-black flex items-center justify-center">
              <div className="size-4 rounded-full bg-blue-300 border-2 border-white"></div>
            </button>
            <button className="size-5 rounded-full bg-secondary2 flex items-center justify-center">
              <div className="size-4 rounded-full bg-secondary2 border-2 border-secondary2"></div>
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-xl tracking-wide">Size:</p>
            <div className="flex gap-4 px-6">
              {Size.map((s, index) => (
                <button
                  key={index}
                  className="size-8 justify-center text-center border-black/50 border rounded hover:border-secondary2 hover:bg-secondary2 hover:text-primary flex items-center"
                >
                  <span className="text-xs font-semibold">{s}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="flex-grow rounded flex justify-between size-12 border border-black/50">
              <button className="flex items-center justify-center w-14 border-black/50 border-r hover:text-white hover:border-none hover:bg-secondary2 outline-none">
                <Minus />
              </button>
              <span className="flex justify-center items-center mx-4 text-xl font-medium">
                2
              </span>
              <button className="flex items-center justify-center w-14 border-black/50 border-l hover:text-white hover:border-none hover:bg-secondary2 outline-none">
                <Plus />
              </button>
            </div>
            <button className="flex-grow rounded size-12 bg-secondary2 flex items-center justify-center font-medium outline-none">
              <p className="text-white ">Buy Now</p>
            </button>
            <div className="ml-1 rounded size-10 flex items-center justify-center border border-black/50 hover:text-white hover:border-none hover:bg-secondary2 outline-none">
              <WishlistIcon className="p-px" />
            </div>
          </div>
          <div className="w-full mt-8 rounded border border-black/50">
            <div className="flex gap-4 p-6 items-center border-b border-black/50">
              <Delivery className="text-black" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <span className="text-xs underline">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="flex gap-4 p-6 items-center">
              <Delivery className="text-black" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <span className="text-xs">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
