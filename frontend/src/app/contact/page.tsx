import MailBox from "@/assets/icons/MailBox";
import Link from "next/link";
import Phone from "@/assets/icons/Phone";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <Link href="/" className="text-text1">
          Home
        </Link>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="my-10 w-full flex justify-between gap-10 p-1">
        <div className="basis-2/6 flex p-8 justify-center rounded items-center flex-col gap-10 shadow-sm shrink-0 max-w-96">
          <div className="w-full flex flex-col gap-4 border-b pb-10">
            <div className="flex justify-start items-center gap-4">
              <div className="p-2 rounded-full bg-secondary2 mb-2">
                <Phone className="text-white" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>
          <div className="w-full flex flex-col gap-4 pb-4">
            <div className="flex justify-start items-center gap-4">
              <div className="p-2 rounded-full bg-secondary2 mb-2">
                <MailBox className="text-white" />
              </div>
              <p className="font-medium">Write To US</p>
            </div>
            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
        <form className="basis-4/6 flex p-8 justify-center rounded items-center flex-col gap-10 w-full shadow-sm text-text2">
          <div className="w-full h-12 flex gap-4">
            <div className="flex-1 h-full">
              <input
                alt="Name"
                type="text"
                placeholder="Your Name *"
                className="h-full rounded w-full px-4 placeholder: bg-secondary outline-none"
              />
            </div>
            <div className="flex-1 h-full">
              <input
                alt="email"
                type="text"
                placeholder="Your Email *"
                className="h-full rounded w-full px-4 placeholder: bg-secondary outline-none"
              />
            </div>
            <div className="flex-1 h-full">
              <input
                alt="Phone"
                type="text"
                placeholder="Your Phone *"
                className="h-full rounded w-full px-4 placeholder: bg-secondary outline-none"
              />
            </div>
          </div>
          <div className="w-full flex-1 p-4 bg-secondary rounded ">
            <textarea
              placeholder="Your Message"
              className="w-full h-full bg-secondary outline-none resize-none"
            ></textarea>
          </div>

          <div className="w-full h-14 flex justify-end items-center">
            <button className="h-full bg-secondary2 rounded text-text px-12 font-medium active:bg-red-600 active:shadow-bg hover:shadow-md">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
