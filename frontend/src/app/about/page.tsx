import React from "react";
import OurStory from "@/components/About/OurStory";
import Stats from "@/components/About/Stats";
import Team from "@/components/About/Team";
import Assurity from "@/components/common/UI/Assurity/Assurity";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-20 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <a href="/" className="text-text1">
          Home
        </a>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <a href="/about">About</a>
      </div>

      <OurStory />
      <Stats />
      <Team />
      <Assurity />
    </div>
  );
};

export default About;
