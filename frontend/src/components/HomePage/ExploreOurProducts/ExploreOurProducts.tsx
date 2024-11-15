import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";
import OurProductCard from "@/components/common/Product/OurProductCard";
import React from "react";

type Props = {};

const ExploreOurProducts = (props: Props) => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex items-center">
        <div className="bg-secondary2 w-6 h-12 rounded"></div>
        <span className="text-secondary2 ml-4 font-semibold">Our Products</span>
      </div>
      <div className="mt-8 mb-16 flex justify-between">
        <h1 className="text-4xl tracking-wider font-semibold">
          Explore Our Products
        </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-secondary rounded-full">
            <LeftArrow className="" />
          </button>
          <button className="p-2 bg-secondary rounded-full">
            <RightArrow className="" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-auto gap-8 justify-between overflow-hidden">
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard className="md:hidden 2xl:block"/>
        <OurProductCard className="md:hidden 2xl:block"/>
      </div>
      <div className="mt-16 flex justify-center bg-bg items-center">
        <button className="mb-16 py-4 px-12 rounded-md bg-secondary2 text-primary">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExploreOurProducts;
