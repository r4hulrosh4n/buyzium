import React from "react";
import Image from "next/image";
import ProductImg from "@/assets/ProductCardImg/2.png";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="group overflow-hidden relative flex items-center justify-center rounded-md w-64 h-60 bg-secondary">
        <Image className="object-cover" src={ProductImg} alt="product" />
        <div className="absolute flex items-center left-3 top-3 rounded-md bg-secondary2 py-1 px-3">
          <span className="text-xs text-primary">-40%</span>
        </div>
        <div className="absolute flex items-center bg-primary right-3 top-3 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div className="absolute flex items-center bg-primary right-3 top-14 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <button className="-bottom-4 opacity-0 transform group-hover:opacity-100 group-hover:bottom-0 ease-in-out duration-300 w-full text-bg bg-button rounded-b-md py-2 absolute">Add to cart</button>
      </div>
      <div className="mt-4 flex flex-col justify-end space-y-2">
        <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
        <p className="text-secondary2 font-medium">
          $120
          <span className="ml-4 text-button text-black line-through">$160</span>
        </p>
        <div className="flex items-center">
          <div className="stars flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <span className="text-text1 text-xs ml-2 font-semibold">(88)</span>
        </div>
      </div>
    </div>
      );
};

      export default ProductCard;
