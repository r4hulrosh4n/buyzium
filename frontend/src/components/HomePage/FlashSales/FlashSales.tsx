"use client";
import React, { useState, useEffect } from "react";
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";
import ProductCard from "@/components/common/Product/ProductCard";

type Props = {};

const FlashSales = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const countDownDate = new Date("Nov 24, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = countDownDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor( (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
      const minutes = Math.floor( (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),);
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (timeRemaining < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-36 gap-8 flex flex-col overflow-hidden">
      <div className="flex items-center">
        <div className="bg-secondary2 w-6 h-12 rounded"></div>
        <span className="text-secondary2 ml-4 font-semibold">Today&apos;s</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-end -mt-6 space-x-32">
          <h1 className="text-4xl tracking-wider font-semibold">Flash Sales</h1>
          <div className="flex">
            <div>
              <span className="text-xs font-medium">Days</span>
              <p className="text-3xl tracking-wider font-bold">
                {formatTime(timeLeft.days)}
                <span className="mx-4 font-semibold text-[30px] text-secondary2 -top-3">
                  :
                </span>
              </p>
            </div>
            <div>
              <span className="text-xs font-medium">Hours</span>
              <p className="text-3xl tracking-wider font-bold">
                {formatTime(timeLeft.hours)}
                <span className="mx-4 font-semibold text-[30px] text-secondary2 -top-3">
                  :
                </span>
              </p>
            </div>
            <div>
              <span className="text-xs font-medium">Minutes</span>
              <p className="text-3xl tracking-wider font-bold">
                {formatTime(timeLeft.minutes)}
                <span className="mx-4 font-semibold text-[30px] text-secondary2 -top-3">
                  :
                </span>
              </p>
            </div>
            <div>
              <span className="text-xs font-medium">Seconds</span>
              <p className="text-3xl tracking-wider font-bold">
                {formatTime(timeLeft.seconds)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-secondary rounded-full">
            <LeftArrow className="" />
          </button>
          <button className="p-2 bg-secondary rounded-full">
            <RightArrow className="" />
          </button>
        </div>
      </div>
      <div className="flex FlashSalesProducts overflow-x-scroll space-x-8 scrollbar-hide">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className="mt-10 flex justify-center bg-bg items-center">
        <button className="py-4 px-12 rounded-md bg-secondary2 text-primary">
          View All Products
        </button>
      </div>
      <div className="mt-10 h-px w-full bg-gray-300"></div>
    </div>
  );
};

export default FlashSales;
