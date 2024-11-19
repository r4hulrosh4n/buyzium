import React from "react";
import ProductCard from "@/components/common/Product/ProductCard";

type Props = {};

const WishList = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center justify-between mb-8">
        <h1>WishList ({1})</h1>
        <button className="font-medium px-12 rounded-md hover:shadow-lg outline-none py-4 border-2 rounded-bg border-gray-400">
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-wrap gap-10 w-full my-10 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="inline-flex items-center justify-between mb-8">
        <h1>WishList ({1})</h1>
        <button className="font-medium px-12 rounded-md hover:shadow-lg outline-none py-4 border-2 rounded-bg border-gray-400">
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-wrap gap-10 w-full my-10 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default WishList;
