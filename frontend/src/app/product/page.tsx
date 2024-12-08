import React from "react";
import Link from "next/link";
import WishlistIcon from "@/assets/icons/WishlistIcon";
import Delivery from "@/assets/icons/Delivery";
import Image from "next/image";
import Plus from "@/assets/icons/Plus";
import Minus from "@/assets/icons/Minus";
import Star from "@/assets/icons/Star";
import ReturnIcon from "@/assets/icons/ReturnIcon";
import RelatedProducts from "@/components/Products/RelatedProducts";
import ProductImage1 from "@/assets/ProductCardImg/ProductImages/image63.png";
import ProductImage2 from "@/assets/ProductCardImg/ProductImages/image61.png";
import ProductImage3 from "@/assets/ProductCardImg/ProductImages/image59.png";
import ProductImage4 from "@/assets/ProductCardImg/ProductImages/image58.png";
import ProductImage5 from "@/assets/ProductCardImg/ProductImages/image57.png";

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
            <div className="w-full h-36 bg-secondary rounded flex justify-center items-center">
              <Image src={ProductImage2} width={130} height={130} alt="image" />
            </div>
            <div className="w-full h-36 bg-secondary rounded flex justify-center items-center">
              <Image src={ProductImage3} width={130} height={130} alt="image" />
            </div>
            <div className="w-full h-36 bg-secondary rounded flex justify-center items-center">
              <Image src={ProductImage4} width={130} height={130} alt="image" />
            </div>
            <div className="w-full h-36 bg-secondary rounded flex justify-center items-center">
              <Image src={ProductImage5} width={130} height={130} alt="image" />
            </div>
          </div>
          <div className="bg-secondary rounded w-full flex justify-center items-center">
            <Image src={ProductImage1} width={500} height={500} alt="image" />
          </div>
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
            <span className="border-r border-black/50 text-sm text-black/50 pr-4">
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
            <button className="size-5 rounded-full hover:border-2 hover:border-black active:border-2 active:border-black bg-blue-200 flex items-center justify-center"></button>
            <button className="size-5 rounded-full hover:border-2 hover:border-black active:border-2 active:border-black bg-red-400 flex items-center justify-center"></button>
          </div>
          <div className="flex py-1 items-center">
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
                <Link href="#" className="text-xs font-medium underline">
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>
            <div className="flex gap-4 p-6 items-center">
              <ReturnIcon className="text-black" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="font-medium text-xs">
                  Free 30 Days Delivery Returns.{" "}
                  <Link href="#" className="font-medium text-xs underline">
                    {" "}
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Product;
