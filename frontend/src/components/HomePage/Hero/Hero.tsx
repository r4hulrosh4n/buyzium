import React from "react";
import Category from "./Category";
import Featured from "./Featured";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex relative container mx-auto">
      <Category />
      <Featured />
    </div>
  );
};

export default Hero;
