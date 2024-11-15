"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import LeftImg from "@/assets/SideImage.png";

type Props = {};

const SignUp = (props: Props) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex pt-14 pb-20">
      <div className="w-[55%] flex justify-end">
        <Image
          src={LeftImg}
          alt="Shopping Cart and Mobile"
          className="w-full max-w-4xl"
        />
      </div>

      {isLogin ? (
        <div className="w-[45%] flex items-center pl-48">
          <div className="flex flex-col gap-6 w-96">
            <h2 className="text-4xl font-medium">Create an account</h2>
            <p className="text-base pb-3">Enter your details below</p>
            <form className="space-y-4">
              <input
                type="name"
                placeholder="Name"
                className="w-full outline-none py-3 border-b-2 bg-bg border-gray-300"
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full outline-none py-3 border-b-2 bg-bg border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none py-3 border-b-2 bg-bg border-gray-300"
              />
            </form>
            <button className="w-full mt-4 py-3 bg-secondary2 text-white rounded font-medium">
              Create Account
            </button>
            <button className=" flex justify-center gap-4 w-full py-3 border-2 border-gray-300 rounded font-regular text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
                id="google"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Sign up with Google
            </button>
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a
                href="#"
                onClick={toggleAuth}
                className="ml-2 border-b-2 border-gray-300 font-medium text-gray-600"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="w-[45%] flex items-center pl-48">
          <div className="flex flex-col gap-6 w-96">
            <h2 className="text-4xl font-medium">Log in To Buyzium</h2>
            <p className="text-base pb-3">Enter your details below</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full outline-none py-3 border-b-2 bg-bg border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none py-3 border-b-2 bg-bg border-gray-300"
              />
            </form>
            <div className="flex mt-4 items-center justify-between">
              <button className="w-36 py-3 bg-secondary2 text-white rounded font-medium">
                Log ln
              </button>
              <a
                href="#"
                className="font-regular text-secondary2"
              >
                Forget Password?
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
