"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Product from "@/assets/sponceredImage.png";

type Props = {};

const Sponcered = (props: Props) => {
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
    const countDownDate = new Date("Nov 16, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = countDownDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
      );
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
    <div className="mt-36 flex items-center justify-center relative container mx-auto bg-button h-[500px] overflow-hidden w-full">
      <div className="absolute right-52 bottom-16 bg-[#D9D9D9BF] rounded-full w-96 h-96 blur-4xl z-0"></div>
      <div className="flex w-[90%] justify-between z-10">
        <div className="w-[30rem] flex flex-col gap-y-6">
          <p className="font-semibold text-button1">Categories</p>
          <h1 className="text-5xl font-semibold leading-[4rem] tracking-wide text-bg">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-x-5">
            <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-bg">
              <p className="text-sm leading-3 font-semibold">
                {formatTime(timeLeft.days)}
              </p>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-bg">
              <p className="text-sm leading-3 font-semibold">
                {formatTime(timeLeft.hours)}
              </p>
              <span className="text-xs">Hours</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-bg">
              <p className="text-sm leading-3 font-semibold">
                {formatTime(timeLeft.minutes)}
              </p>
              <span className="text-xs">Minutes</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-bg">
              <p className="text-sm leading-3 font-semibold">
                {formatTime(timeLeft.seconds)}
              </p>
              <span className="text-xs">Seconds</span>
            </div>
          </div>
          <button className="mt-3 inline-block w-44 bg-button1 py-4 text-text font-medium rounded">
            Buy Now!
          </button>
        </div>
        <Image
          src={Product}
          width={500}
          height={500}
          alt="SponceredImage"
          className="w-auto h-auto max-w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,_0.8,_0.25,_1)] transform hover:-translate-y-6"
        />
      </div>
    </div>
  );
};

export default Sponcered;
