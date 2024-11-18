"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TwitterSvg from "@/assets/icons/Social/TwitterSvg";
import Img from "@/assets/About/Team/HardyBrownImg.png";
import InstagramSvg from "@/assets/icons/Social/InstagramSvg";
import LinkedInSvg from "@/assets/icons/Social/LinkedInSvg";
import { teamMembers } from "./TeamData.ts";

const groupByThree = (arr) => {
  const groups = [];
  for (let i = 0; i < arr.length; i += 3) {
    groups.push(arr.slice(i, i + 3)); // Create subgroups of 3
  }
  return groups;
};

type Props = {};

const Team = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Members = groupByThree(teamMembers);
  console.log(Members);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Members.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [Members.length]);

  return (
    <div className="flex mb-32 overflow-x-hidden">
      <div className="w-full flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Members.map((group, index) => (
          <div
            key={index}
            className="flex px-4 w-full flex-shrink-0 justify-between"
          >
            {group.map((member, index) => (
              <div key={index} className="w-96 h-[560px] flex-shrink-0">
                <div className="relative h-[75%] bg-secondary rounded-md">
                  <Image
                    src={Img}
                    alt={member.name}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-auto h-[90%]"
                  />
                </div>
                <div className="flex h-[25%] items-end basis-1">
                  <div className="flex flex-col gap-2 ">
                    <h1 className="tracking-wide font-medium text-3xl leading-none">
                      {member.name}
                    </h1>
                    <span className="">{member.position}</span>
                    <div className="w-40 mt-1 flex gap-3 ">
                      <a
                        href={member.socialLinks.twitter}
                        aria-label="Twitter"
                        className="p-[1px] group rounded-sm hover:bg-gray-200"
                      >
                        <TwitterSvg className="group-hover:text-primary" />
                      </a>
                      <a
                        href={member.socialLinks.instagram}
                        aria-label="Instagram"
                        className="p-[1px] group rounded-sm hover:bg-gray-200"
                      >
                        <InstagramSvg className="group-hover:text-primary" />
                      </a>
                      <a
                        href={member.socialLinks.linkedIn}
                        aria-label="LinkedIn"
                        className="p-[1px] group rounded-sm hover:bg-gray-200"
                      >
                        <LinkedInSvg className="group-hover:text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

