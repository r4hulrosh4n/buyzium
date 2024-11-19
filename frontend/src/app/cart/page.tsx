import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <a href="/" className="text-text1">
          Home
        </a>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <a href="/account">Account</a>
      </div>
    </div>
  );
};

export default Cart;
