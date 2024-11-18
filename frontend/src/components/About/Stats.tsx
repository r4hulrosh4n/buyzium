import BagIcon from "@/assets/icons/Stats/BagIcon";
import DollarIcon from "@/assets/icons/Stats/DollarIcon";
import HouseIcon from "@/assets/icons/Stats/HouseIcon";
import MoneyBag from "@/assets/icons/Stats/MoneyBag";
import React from "react";

type Props = {};

const Stats = (props: Props) => {
  const items = [
    {
      icon: HouseIcon,
      description: "Sallers active our site",
      value: 10.5,
    },
    {
      icon: DollarIcon,
      description: "Mopnthly Produduct Sale",
      value: 33,
    },
    {
      icon: BagIcon,
      description: "Customer active in our site",
      value: 45.5,
    },
    {
      icon: MoneyBag,
      description: "Anual gross sale in our site",
      value: 25,
    },
  ];

  return (
    <div className="mb-40 flex justify-between">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-72 group hover:bg-secondary2 hover:border-none rounded border-2 border-black border-opacity-30 flex justify-center items-center"
        >
          <div className="my-10 mx-auto flex flex-col justify-center items-center gap-2">
            <div className="mb-4 bg-gray-400 rounded-full size-20 flex justify-center items-center group-hover:bg-[#FFFFFF4D]">
              <div className="bg-black rounded-full size-14 flex justify-center items-center group-hover:bg-primary">
                <item.icon className="text-text group-hover:text-black"/>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-wide group-hover:text-primary">
              {item.value}k
            </h1>
            <p className="group-hover:text-primary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
