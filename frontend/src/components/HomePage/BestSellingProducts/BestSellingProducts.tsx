import ProductCard from "@/components/common/Product/ProductCard";
import React from "react";

type Props = {};
const BestSellingProducts = (props: Props) => {
  return (
    <section className="container mx-auto mt-16 gap-8 flex flex-col overflow-hidden">
      <div className="flex items-center">
        <div className="bg-secondary2 w-6 h-12 rounded"></div>
        <span className="text-secondary2 ml-4 font-semibold">This Month</span>
      </div>
      <div className="flex mb-4 justify-between">
        <h1 className="text-4xl tracking-wider font-semibold">
          Best Selling Products
        </h1>
        <button className="text-bg bg-secondary2 py-3 px-8 rounded">
          View All
        </button>
      </div>

      <div className="flex FlashSalesProducts overflow-x-scroll space-x-8 scrollbar-hide">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default BestSellingProducts;
