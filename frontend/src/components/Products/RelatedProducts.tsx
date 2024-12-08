import ProductCard from "@/components/common/Product/ProductCard";
import React from "react";

type Props = {};
const RelatedProducts = (props: Props) => {
  return (
    <section className="container mx-auto my-16 gap-8 flex flex-col overflow-hidden">
      <div className="flex items-center">
        <div className="bg-secondary2 w-6 h-12 rounded"></div>
        <span className="text-secondary2 ml-4 font-semibold">Related Items</span>
      </div>
      <div className="flex mb-4 justify-between"></div>

      <div className="flex FlashSalesProducts overflow-x-scroll space-x-8 scrollbar-hide">
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

export default RelatedProducts;
