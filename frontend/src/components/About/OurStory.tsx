import React from 'react'
import Image from "next/image";
import RightImg from "@/assets/portrait.png";

type Props = {}

const OurStory = (props: Props) => {
  return (
      <div className="relative w-[100%] h-[750px] mb-40 flex items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center w-[550px] items-start gap-10">
            <h1 className="text-5xl tracking-wider font-semibold">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>

        <Image
          src={RightImg}
          alt="img"

          style={{
            objectFit: "cover",
          }}
          className="left-1/2 h-[700px] w-auto absolute left-0"
        />
      </div>
  )
}

export default OurStory
