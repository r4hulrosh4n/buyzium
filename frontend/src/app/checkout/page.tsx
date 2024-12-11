"use client";
import React from "react";
import Link from "next/link";
import BkaskIcon from "@/assets/icons/Payment/bkash.svg";
import VisaIcon from "@/assets/icons/Payment/visa.svg";
import NamanIcon from "@/assets/icons/Payment/naman.svg";
import MasterIcon from "@/assets/icons/Payment/master.svg";

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/checkout">Checkout</Link>
      </div>
      <div className="flex w-full my-10 flex-col">
        <h1 className="text-3xl font-medium tracking-wide">Billing Details</h1>
        <div className="flex my-10 gap-48 justify-between">
          <div className="flex w-full flex-col">
            <form className="flex min-w-96 2xl:pr-40 flex-col gap-8">
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  First Name<span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">Company Name</label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  Street Address<span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  Apartment, floor, etc. (optional)
                  <span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  Town/City<span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  Phone Number<span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-text1">
                  Email Address<span className="text-secondary2/50">*</span>
                </label>
                <input className="bg-secondary rounded p-4 outline-none" />
              </div>
            </form>
            <div className="mt-4 flex gap-3">
              <button className="size-6 border-black/50 text-bg active:bg-secondary2 active:border-secondary2 rounded border-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
              <p className="text-text2">
                Save this information for faster check-out next time
              </p>
            </div>
          </div>
          <div className="w-full my-10 flex flex-col gap-10">
            <div className="flex flex-col gap-10 w-[80%]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex items-center size-14 bg-pink-300"></div>
                  <div>
                    <p>LCD Monitor</p>
                  </div>
                </div>
                <p>$120</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex items-center size-14 bg-pink-300"></div>
                  <div>
                    <p>LCD Monitor</p>
                  </div>
                </div>
                <p>$120</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[80%]">
              <div className="flex w-full justify-between items-center border-text1 border-b pb-4">
                <p>Subtotal:</p>
                <p>$1023</p>
              </div>
              <div className="flex w-full justify-between items-center border-text1 border-b pb-4">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p>Total:</p>
                <p>$1023</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[80%]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="items-center size-7 rounded-full z-0 border-2 border-black relative after:absolute active:after:size-4 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black after:z-10"></div>
                  <div>
                    <p>Bank</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 h-10 overflow-y-hidden">
                  <BkaskIcon alt="Visa" width={40} height={40} />
                  <VisaIcon alt="Visa" width={40} height={40} />
                  <MasterIcon alt="Visa" width={40} height={40} />
                  <NamanIcon alt="Visa" width={40} height={40} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="items-center size-7 rounded-full z-0 border-2 border-black relative after:absolute active:after:size-4 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black after:z-10"></div>
                  <div>
                    <p>Cash on delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-16 flex gap-6 justify-between">
              <input
                alt="Coupon Code"
                placeholder="Coupon Code"
                className="py-4 w-40 flex-grow px-8 rounded font-medium outline-none border-black border"
              ></input>
              <button className="py-4 px-14 rounded text-secondary outline-none bg-secondary2 hover:text-primary hover:border-none font-medium border-black">
                Apply Coupon
              </button>
            </div>
            <button className="py-4 w-60 px-14 rounded text-secondary outline-none bg-secondary2 hover:text-primary hover:border-none font-medium border-black">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
