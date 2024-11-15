import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-black h-12">
      <div className="container h-[100%] flex items-center justify-end mx-auto flex-row ">
        <span className="mx-auto flex-2 text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <div className="lang">
          <button className="text-white focus:outline-none">English &#9662;</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
