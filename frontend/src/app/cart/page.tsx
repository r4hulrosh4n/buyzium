"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import DropDown from "@/assets/icons/DropDown";

type Props = {};

const cartProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "LCD A",
    price: 499,
    quantity: 2,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Phone B",
    price: 299,
    quantity: 1,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "TV C",
    price: 159,
    quantity: 3,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Laptop D",
    price: 89,
    quantity: 5,
  },
];

const Cart = (props: Props) => {
  const [productQuantities, setProductQuantities] = useState(0);

  const incrementQuantity = () => {
    setProductQuantities((prev) => prev + 1);
  };

  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/account">Cart</Link>
      </div>
      <div className="flex flex-col my-10 justify-between gap-16">
        <div className="container px-2 w-full flex flex-col gap-4">
          <div className="mb-2 py-4 px-10 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="min-w-64 w-2/4 inline-flex items-center gap-4">
                Product
              </p>
              <div className="w-full h-full flex justify-between">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[340px] overflow-scroll gap-6">
            {cartProducts.map((product) => (
              <div key={product.id} className="py-6 px-10 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="min-w-64 w-2/4 inline-flex items-center gap-4">
                    <div className="size-12 bg-red-400"></div>
                    <p>{product.name}</p>
                  </div>
                  <div className="w-full h-full flex justify-between pr-6 items-center">
                    <span>${product.price}</span>
                    <div className="w-20 rounded border-2 border-black/40 flex justify-between items-center gap-2 py-1 px-3">
                      <p className="">{productQuantities}</p>
                      <div className="flex flex-col gap-0 items-center">
                        <button
                          onClick={incrementQuantity}
                          className="outline-none h-5 flex items-center justify-between px-2 rounded active:bg-gray-200 hover:bg-gray-200"
                        >
                          <DropDown className="-rotate-90 w-4 p-0" />
                        </button>
                        <button className="outline-none h-5 flex items-center justify-between px-2 rounded active:bg-gray-200 hover:bg-gray-200">
                          <DropDown className="rotate-90 w-4 p-0" />
                        </button>
                      </div>
                    </div>
                    <span>${product.price * product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-between items-center">
            <button className="py-4 px-8 rounded hover:bg-secondary2 hover:text-secondary hover:border-secondary2 font-medium border-text1 border-2">
              Return to Shop
            </button>
            <button className="py-4 px-8 rounded hover:bg-secondary2 hover:text-secondary hover:border-secondary2 font-medium border-text1 border-2">
              Update Cart
            </button>
          </div>
        </div>

        <div className="container w-full flex gap-80 px-2">
          <div className="w-full h-16 flex gap-6 justify-between">
            <input
              alt="Coupon Code"
              placeholder="Coupon Code"
              className="py-4 w-40 flex-grow px-8 rounded font-medium outline-none border-black border-2"
            ></input>
            <button className="py-4 px-8 rounded text-secondary outline-none bg-secondary2 hover:text-primary hover:border-none font-medium border-black">
              Apply Coupon
            </button>
          </div>
          <div className="w-full p-6 border-2 border-black rounded flex flex-col gap-4">
            <h1>Cart Total</h1>
            <div className="w-full border-b pb-4 border-b-text1 flex justify-between items-center">
              <span>Subtotal:</span>
              <span>
                $
                {cartProducts.reduce((sum, product) => {
                  return sum + product.price * product.quantity;
                }, 0)}
              </span>
            </div>
            <div className="w-full border-b pb-4 border-b-text1 flex justify-between items-center">
              <span>Shipping:</span>
              <span>$0</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span>Total:</span>
              <span>
                $
                {cartProducts.reduce((sum, product) => {
                  return sum + product.price * product.quantity;
                }, 0) + 0}
              </span>
            </div>
            <button className="w-64 mx-auto py-4 px-8 rounded outline-none text-secondary bg-secondary2 hover:text-primary hover:border-none font-medium border-black">
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
