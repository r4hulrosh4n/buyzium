"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FeaturedImg1 from "@/assets/hero.png";
import FeaturedImg2 from "@/assets/hero.png";
import FeaturedImg3 from "@/assets/hero.png";
import FeaturedImg4 from "@/assets/hero.png";
import FeaturedImg5 from "@/assets/hero.png";
import RightArrow from "@/assets/icons/RightArrow";
import AppleLogo from "@/assets/icons/AppleLogo";

type Props = {};

const Featured = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredSlides = [
    {
      id: 1,
      image: FeaturedImg1,
      title: "iPhone 14 Series",
      discount: "10%",
    },
    {
      id: 2,
      image: FeaturedImg2,
      title: "iPhone 15 Series",
      discount: "20%",
    },
    {
      id: 3,
      image: FeaturedImg3,
      title: "iPhone 13 Series",
      discount: "30%",
    },
    {
      id: 4,
      image: FeaturedImg4,
      title: "iPhone 12 Series",
      discount: "25%",
    },
    {
      id: 5,
      image: FeaturedImg5,
      title: "iPhone 11 Series",
      discount: "30%",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredSlides.length]);

  return (
    <div className="relative w-full h-[340px] bg-black ml-10 mt-10 xl:pl-20 flex justify-end overflow-hidden">
      <div className="w-full flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
        {featuredSlides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex justify-between items-center"
          >
            <div className="text-text flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <AppleLogo />
                <p className="pt-2 text-text text-sm">{slide.title}</p>
              </div>
              <h1 className="hyphens-manual font-semibold tracking-wide text-text leading-snug text-5xl">
                {" "}
                Up to {slide.discount} <br /> off Voucher{" "}
              </h1>
              <div className="flex items-center gap-2">
                <p className="underline underline-offset-8 text-text font-medium">
                  {" "}
                  Shop Now{" "}
                </p>
                <RightArrow />
              </div>
            </div>
            <Image
              src={slide.image}
              alt="Featured"
              priority
              className="pt-6 object-contain"
            />
          </div>
        ))}
      </div>

<div className="absolute bottom-4 left-[50%] transform -translate-x-1/2 flex gap-4">
  {featuredSlides.map((_,index) => (
    <div
      key={index}
      className={`rounded-full flex justify-center items-center size-4 ${currentIndex === index ? "bg-secondary2" : "bg-primary1"}`}
    ></div>
  ))}
</div>

      <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2 flex gap-4">
        {featuredSlides.map((_, index) => (
          <div
            key={index}
            className={`rounded-full flex justify-center items-center size-4 ${currentIndex === index ? "bg-secondary2" : "bg-primary1"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
