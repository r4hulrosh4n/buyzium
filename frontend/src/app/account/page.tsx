import React from "react";

type Props = {};

const Account = (props: Props) => {
  return (
    <div className="container flex flex-col mx-auto my-10 overflow-x-hidden">
      <div className="inline-flex items-center mb-8">
        <a href="/" className="text-text1">
          Home
        </a>
        <div className="w-[1px] rotate-[24deg] mx-4 h-4 opacity-50 bg-black"></div>
        <a href="/account">Account</a>
      </div>
      <div className="flex my-10 justify-between gap-12">
        <div className="flex flex-col items-start max-w-64 min-w-52 flex-1 h-80 gap-2">
          <p className="my-1 font-medium text-text2">Manage My Account</p>
          <button className="text-text1 px-8 active:text-secondary2">
            My Profile
          </button>
          <button className="text-text1 px-8 active:text-secondary2">
            Address Book
          </button>
          <button className="text-text1 px-8 active:text-secondary2">
            My Payment Options
          </button>
          <p className="my-1 font-medium text-text2">My Orders</p>
          <button className="text-text1 px-8 active:text-secondary2">
            My Returns
          </button>
          <button className="text-text1 px-8 active:text-secondary2">
            My Cancellations
          </button>
          <p className="my-1 font-medium text-text2">My Wishlist</p>
        </div>
        <div className="m-1 flex-1 bg-bg shadow-sm px-20 py-10 flex flex-col gap-6 rounded">
          <h1 className="text-secondary2 text-xl font-medium leading-none">
            Edit Your profile
          </h1>
          <div className="w-full flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label>First Name</label>
              <input
                type="text"
                alt="First Name"
                placeholder="Nicky"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label>Last Name</label>
              <input
                type="text"
                alt="Last Name"
                placeholder="Verma"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                alt="Email"
                placeholder="nickyverma@gmail.com"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label>Address</label>
              <input
                type="text"
                alt="Address"
                placeholder="Giridih, Jharkhand, India"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label>Password Changes</label>
            <div className="w-full flex flex-col gap-4">
              <input
                type="password"
                alt="Current Password"
                placeholder="Current Password"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
              <input
                type="password"
                alt="New Password"
                placeholder="New Password"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
              <input
                type="password"
                alt="Confirm New Password"
                placeholder="Confirm New Password"
                className="bg-secondary placeholder:text-text1 rounded p-4"
              />
            </div>
          </div>
          <div className="w-full h-14 flex justify-end gap-4 items-center">
            <button className="h-full bg-bg rounded text-text2 px-4 font-medium active:bg-secondary active:shadow-bg hover:shadow-md">
              Cancel
            </button>
            <button className="h-full bg-secondary2 rounded text-text px-12 font-medium active:bg-red-600 active:shadow-bg hover:shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
