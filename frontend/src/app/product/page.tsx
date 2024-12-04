import React from "react";
import Link from "next/link";

type Props = {};

const Size = ["XS", "S", "M", "L", "XL"];

const Product = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/account">Account</Link>
      </div>

      <div className="w-full flex gap-16 justify-between">
        <div className="mx-auto w-full flex gap-8">
          <div className="w-64 flex flex-col gap-6">
            <div className="w-full h-40 bg-secondary rounded"></div>
            <div className="w-full h-40 bg-secondary rounded"></div>
            <div className="w-full h-40 bg-secondary rounded"></div>
            <div className="w-full h-40 bg-secondary rounded"></div>
          </div>
          <div className="bg-secondary rounded w-full"></div>
        </div>
        <div className="w-6/12 flex flex-col gap-4">
          <h1 className="font-semibold tracking-wide text-2xl">
            Havic HV G-92 Gamepad
          </h1>
          <div className="w-full h-5 flex gap-4">
            <div className="w-24 bg-yellow-400"></div>
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
          <div className="w-full h-px my-2 bg-black"></div>
          <div className="">
            <p className="text-xl tracking-wide">Colours:</p>
          </div>
          <div className="flex items-center">
            <p className="text-xl tracking-wide">Size:</p>
            <div className="flex gap-4 px-6">
              {Size.map((s, index) => (
                <div className="size-8 justify-center text-center border-black border rounded hover:border-secondary2 hover:bg-secondary2 hover:text-primary flex items-center">
                  <span className="text-xs font-semibold">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex ">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
