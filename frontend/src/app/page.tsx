import FlashSales from "@/components/HomePage/FlashSales/FlashSales";
import Hero from "../components/HomePage/Hero/Hero";
import CategoryBrowser from "@/components/HomePage/CategoryBrowser/CategoryBrowser";
import BestSellingProducts from "@/components/HomePage/BestSellingProducts/BestSellingProducts";
import Sponcered from "@/components/HomePage/Sponsored/Sponcered";
import ExploreOurProducts from "@/components/HomePage/ExploreOurProducts/ExploreOurProducts";
import Assurity from "@/components/common/UI/Assurity/Assurity";
import CategoryPhone from "@/assets/CategorySvg/CategoryPhone";

export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <CategoryBrowser />
      <BestSellingProducts />
      <Sponcered />
      <ExploreOurProducts />
      <Assurity />
    </div>
  );
}
