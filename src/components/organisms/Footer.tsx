import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-customBlack-500 px-20 pt-16 mt-5 text-white">
      <div className="xl:flex lg:flex">
        <div className="w-full text-xs xxl:text-base">
          <h1 className="font-bold text-xl xxl:text-4xl">
            BEYOND
          </h1>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed
            diam nonumy eirmod.
          </p>
          <p className=" mt-4">+94 722 321 911</p>
          <p className=" mt-4">MON - SUN / 9:00 AM - 8:00 PM</p>
          <p className=" mt-4">support@beyond.com</p>
        </div>
        <div className="flex flex-col text-xs mt-6 lg:mt-1 xxl:text-base items-start pr-20">
          <h4 className="text-white text-sm xxl:text-lg font-semibold">PRODUCTS</h4>
          <NavLink to="/stake/get_byn" className="mt-4 cursor-pointer">Stake</NavLink>
          <NavLink to="/market" className="mt-4 cursor-pointer">Market</NavLink>
          <NavLink to="/trade" className="mt-4 cursor-pointer">Trade</NavLink>
          <NavLink to="/loan" className="mt-4 cursor-pointer">Loan</NavLink>
        </div>
        <div className="flex flex-col text-xs mt-6 lg:mt-1 xxl:text-base items-start pr-20">
          <h4 className="text-white text-sm xxl:text-lg font-semibold">
            COMPANY
          </h4>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/about_us"
          >
            About Us
          </NavLink>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/contact_us"
          >
            Contact Us
          </NavLink>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/support"
          >
            Support
          </NavLink>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/news_blog"
          >
            News/Blog
          </NavLink>
        </div>
        <div className="flex flex-col text-xs mt-6 lg:mt-1 xxl:text-base items-start w-64 mr-16">
          <h4 className="text-white text-sm xxl:text-lg font-semibold">
            TERMS
          </h4>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/privacy_policy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/terms_and_conditions"
          >
            Terms of Usage
          </NavLink>
          <NavLink
            className="mt-4 cursor-pointer"
            to="/disclaimer"
          >
            Disclaimer
          </NavLink>
        </div>
        <div className="flex flex-col mt-6 lg:mt-1 items-start pr-20">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            SOCIAL
          </h4>
          <div className="flex mt-4">
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full ">
              <img src="/assets/Images/facebook.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Images/instagram.svg" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Images/linkedin.svg" alt="img" />
            </button>
            <button className="focus:outline-none w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Images/pinterest v2.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-xxs xxl:text-base mt-16 pb-10">
        <p className="">
          ©Copyright Beyond 2020. All rights reserved - Design by Coding Pixel.
        </p>
      </div>
    </div>
  );
}

export default Footer;
