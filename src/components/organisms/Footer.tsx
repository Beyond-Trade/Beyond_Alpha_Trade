import React from "react";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  return (
    <div className="bg-customBlue-300 px-20 pt-16 mt-5">
      <div className="xl:flex lg:flex">
        <div className="w-full xl:text-xxs xxl:text-base">
          <h1 className="font-bold text-white xl:text-xl xxl:text-4xl">
            BEYOND
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed
            diam nonumy eirmod.
          </p>
          <p className="text-gray-400 mt-4">+94 722 321 911</p>
          <p className="text-gray-400 mt-4">MON - SUN / 9:00 AM - 8:00 PM</p>
          <p className="text-gray-400 mt-4">support@beyond.com</p>
        </div>
        <div className="flex flex-col xl:text-xs xxl:text-base items-start pr-20">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            PRODUCTS
          </h4>
          <p className="text-gray-500 mt-4 cursor-pointer">Stake</p>
          <p className="text-gray-500 mt-4 cursor-pointer">Market</p>
          <p className="text-gray-500 mt-4 cursor-pointer">Trade</p>
          <p className="text-gray-500 mt-4 cursor-pointer">Loan</p>
        </div>
        <div className="flex flex-col xl:text-xs xxl:text-base items-start pr-20">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            COMPANY
          </h4>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => {
              history.push("/about_us");
            }}
          >
            About Us
          </p>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => {
              history.push("/contact_us");
            }}
          >
            Contact Us
          </p>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => {
              history.push("/support");
            }}
          >
            Support
          </p>
          <p className="text-gray-500 mt-4 cursor-pointer">News/Blog</p>
        </div>
        <div className="flex flex-col xl:text-xs xxl:text-base items-start w-64 mr-16">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            TERMS
          </h4>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => history.push("/privacy_policy")}
          >
            {" "}
            Privacy Policy
          </p>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => history.push("/terms_and_conditions")}
          >
            Terms of Usage
          </p>
          <p
            className="text-gray-500 mt-4 cursor-pointer"
            onClick={() => history.push("/disclaimer")}
          >
            Disclaimer
          </p>
        </div>
        <div className="flex flex-col items-start pr-20">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            SOCIAL
          </h4>
          <div className="flex mt-4">
            <button className="focus:outline-none mr-4 xl:w-8 xxl:w-10 xl:h-8 xxl:h-10 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/facebook-icon.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 xl:w-8 xxl:w-10 xl:h-8 xxl:h-10 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/instagram-icon.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 xl:w-8 xxl:w-10 xl:h-8 xxl:h-10 flex justify-center items-center rounded-full bg-white">
              <img src="assets/Icons/linkedin-con.svg" alt="img" />
            </button>
            <button className="focus:outline-none xl:w-8 xxl:w-10 xl:h-8 xxl:h-10 flex justify-center items-center rounded-full bg-blue-500">
              <img src="assets/Icons/pinterest-icon.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
      <div className="xl:text-xxs xxl:text-base mt-32 pb-10">
        <p className="text-gray-400">
          ©Copyright Beyond 2020. All rights reserved - Design by Coding Pixel.
        </p>
      </div>
    </div>
  );
}

export default Footer;
