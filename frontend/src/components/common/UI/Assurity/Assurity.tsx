import Delivery from "@/assets/icons/Assurity/Delivery";
import Guarantee from "@/assets/icons/Assurity/Guarantee";
import Customer from "@/assets/icons/Assurity/Customer";
import React from "react";

type Props = {};

const data = [
  {
    id: 1,
    label: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $200",
    icon: Delivery,
  },
  {
    id: 2,
    label: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: Guarantee,
  },
  {
    id: 3,
    label: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    icon: Customer,
  },
];
const Assurity = (props: Props) => {
  return (
    <div className="mt-16 container mx-auto flex justify-evenly">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col justify-center items-center gap-4">
          <div className="mb-4 bg-gray-400 rounded-full size-20 flex items-center justify-center">
            <div className="bg-black rounded-full size-14 flex justify-center items-center">
              <item.icon />
            </div>
          </div>
          <h2 className="text-xl font-semibold">{item.label}</h2>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Assurity;
