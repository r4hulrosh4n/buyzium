import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-black text-text py-10 border border-black w-[100%]">
      <div className="container h-[100%] flex flex-col justify-between mx-auto overflow-hidden">
        <div className=" flex justify-between mt-16">
          <div className="flex flex-col space-y-4">
            <div className="text-3xl font-bold mb-1">Buyzium</div>
            <a className="cursor-pointer text-xl font-medium">Subscribe</a>
            <a className="">Get 10% off on your first order</a>
            <div className="border-2 rounded border-white p-0 flex py-3 px-4 items-center">
              <input
                className="w-40 bg-black outline-none"
                placeholder="Enter Your Email"
              ></input>
              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 rotate-45 h-6 text-gray-500 ml-0"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-medium mb-1">Support</div>
            <ul className="flex flex-col space-y-4">
              <li>245-Mombay,India</li>
              <li>buyzium@gmail.com</li>
              <li>+91-827349919999</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-medium mb-1">Account</div>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/account">My Account</a>
              </li>
              <li>
                <a href="/login">Login / Register</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/wishlist">Whislist</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-medium mb-1">Quick Links</div>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/account">privacy Policy</a>
              </li>
              <li>
                <a href="/login">Terms Of Use</a>
              </li>
              <li>
                <a href="/cart">FAQ</a>
              </li>
              <li>
                <a href="/wishlist">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-medium mb-1">Download App</div>
            <div className="flex flex-col space-y-2">
              <span className="text-xs text-gray-400">
                Save $3 with App New User Only
              </span>
              <div className="flex space-x-2">
                <div className="flex border items-center rounded-md border-gray-400 py-2 px-2 space-x-1">
                  {" "}
                  <svg
                    fill="#FAFAFA"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 22.773 22.773"
                  >
                    <g>
                      <g>
                        <path
                          d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
			c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                        />
                        <path
                          d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
			c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
			c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
			c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
			c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
			c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>App Store </span>
                </div>
                <div className="flex border items-center rounded-md border-gray-400 py-2 px-2 space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span>App Store </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
