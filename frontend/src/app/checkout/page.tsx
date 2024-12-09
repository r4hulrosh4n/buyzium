import React from "react";
import Link from "next/link";

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
            <form className="flex min-w-96 pr-40 flex-col gap-8">
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
              <button className="size-6 rounded border border-2 border-secondary2"></button>
              <p className="text-text2">
                Save this information for faster check-out next time
              </p>
            </div>
          </div>
          <div className="w-full flex size-96 bg-pink-100">kdkdkdk</div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
