import React from "react";
import ProductCard from "@/components/common/Product/ProductCard";

type Props = {};

const WishList = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 gap-20 overflow-x-hidden">
      <div className="w-full flex flex-col">
        <div className="inline-flex items-center justify-between">
          <h1 className="text-xl">WishList ({1})</h1>
          <button className="font-medium px-12 rounded-md hover:shadow-lg outline-none py-4 border-2 rounded-bg border-gray-400">
            {" "}
            Move All To Bag{" "}
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
      <div className="w-full flex flex-col">
        <div className="inline-flex items-center justify-between">
          <div className="inline-flex items-center gap-4">
            <div className="w-6 h-12 bg-secondary2 rounded"></div>
            <h1 className="text-xl">Just For You</h1>
          </div>
          <button className="font-medium px-12 rounded-md hover:shadow-lg outline-none py-4 border-2 rounded-bg border-gray-400">
            See All
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
    </div>
  );
};

export default WishList;
