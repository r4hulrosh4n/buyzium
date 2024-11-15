import FlashSales from "@/components/HomePage/FlashSales/FlashSales";
import Hero from "../components/HomePage/Hero/Hero";
import CategoryBrowser from "@/components/HomePage/CategoryBrowser/CategoryBrowser";
import BestSellingProducts from "@/components/HomePage/BestSellingProducts/BestSellingProducts";
import Sponcered from "@/components/HomePage/Sponsored/Sponcered";
import ExploreOurProducts from "@/components/HomePage/ExploreOurProducts/ExploreOurProducts";
import Assurity from "@/components/HomePage/Assurity/Assurity";

export default function Home() {
  return (
    <div className="mb-40">
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
