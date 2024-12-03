import React from "react";
import Link from "next/link";
import DropDown from "@/assets/icons/DropDown";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/account">Cart</Link>
      </div>
      <div className="flex flex-col my-10 justify-between gap-20">
        <div className="container px-2 w-full flex flex-col gap-4">
          <div className="mb-2 py-4 px-10 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="min-w-64 w-2/4 inline-flex items-center gap-4">Product</p>
              <div className="w-full h-full flex justify-between">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="py-6 px-10 shadow-sm">
              <div className="flex justify-between items-center">
                <div className="min-w-64 w-2/4 inline-flex items-center gap-4">
                  <div className="size-12 bg-red-400"></div>
                  <p>Samsung LCD</p>
                </div>
                <div className="w-full h-full flex justify-between pr-6 items-center">
                  <span>$134</span>
                  <div className="w-20 rounded border-2 border-black/40 flex justify-between items-center gap-2 py-1 px-3">
                    <p className="">04</p>
                    <div className="flex flex-col gap-0 items-center">
                      <button className="outline-none h-5 flex items-center justify-between px-2 rounded active:bg-gray-200 hover:bg-gray-200">
                        <DropDown className="-rotate-90 w-4 p-0" />
                      </button>
                      <button className="outline-none h-5 flex items-center justify-between px-2 rounded active:bg-gray-200 hover:bg-gray-200">
                        <DropDown className="rotate-90 w-4 p-0" />
                      </button>
                    </div>
                  </div>
                  <span>$223</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="py-4 px-8 border rounded hover:bg-secondary2 hover:text-secondary hover:border-none font-medium border-black">
              Return to Shop
            </button>
            <button className="py-4 px-8 border rounded hover:bg-secondary2 hover:text-secondary hover:border-none font-medium border-black">
              Update Cart
            </button>
          </div>
        </div>

        <div className="container w-full h-72 bg-pink-200">hh</div>
      </div>
    </div>
  );
};

export default Cart;
