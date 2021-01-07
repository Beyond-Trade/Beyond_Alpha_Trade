import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { useAlert } from "react-alert";

function Footer() {
  const [isOpen,setIsopen]=useState(false)
  const alert = useAlert();
  return (
    <div className="bg-customBlack-500 px-20 pt-16 mt-5 text-white">
      <div className="xl:flex lg:flex">
        <div className="w-full text-xs xxl:text-base">
          <h1 className="font-bold text-xl xxl:text-4xl">
            BEYOND
          </h1>
          <p className=" mt-4">
          A decentralized platform for creating and trading synthetic financial products <br/>
designed to suit the needs of the investors of various asset classes

          </p>
          <p className=" mt-4">contact@beyondfinance.io</p>
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
          <a  className="mt-4 cursor-pointer" href="http://beyondfinance.io/" target = "_blank" rel="noopener noreferrer">Homepage</a>
          {/* <NavLink
            className="mt-4 cursor-pointer"
            to="/"
          >
            Homepage
          </NavLink> */}
          <a  className="mt-4 cursor-pointer" href="http://beyondfinance.io/about" target = "_blank" rel="noopener noreferrer" >About</a>
          {/* <NavLink
            className="mt-4 cursor-pointer"
            to="/about_us"
          >
            About
          </NavLink> */}
          <button
            className="mt-4 cursor-pointer focus:outline-none"
            onClick={()=>alert.show(" Under Preparation", { type: "info" })}
          >
            Blog
          </button>
          {/* <NavLink
            className="mt-4 cursor-pointer"
            to="/contact_us"
          >
            Contact Us
          </NavLink> */}
          <a  className="mt-4 cursor-pointer" href="mailto:contact@beyondfinance.io" target = "_blank" rel="noopener noreferrer">Contact us</a>
          
        </div>
        <Modal isOpen={isOpen} style={customStyle} >
      <div className="flex justify-end items-center pb-2">
        <button onClick={() => setIsopen(false)} className="focus:outline-none">
        {/* <button className="focus:outline-none"> */}
          <img src="/assets/Icons/Cross.svg" />
        </button>
      </div>
      <div className="flex text-center items-center  pb-2 text-red-600 font-bold">
      </div>
      <div className="flex-col text-center items-center content-center pt-2">
      Under Preparation
      </div>
      
    </Modal>
        {/* <div className="flex flex-col text-xs mt-6 lg:mt-1 xxl:text-base items-start w-64 mr-16">
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
        </div> */}
        <div className="flex flex-col mt-6 lg:mt-1 items-start pr-20">
          <h4 className="text-white xl:text-sm xxl:text-lg font-semibold">
            SOCIAL
          </h4>
          <div className="flex mt-4">
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full ">
              <img src="/assets/Icons/telegram.svg" className="h-full" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Icons/twitter.svg" className="h-full" alt="img" />
            </button>
            <button className="focus:outline-none mr-4 w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Icons/medium.svg" className="h-full" alt="img" />
            </button>
            <button className="focus:outline-none w-8 xxl:w-10 h-8 xxl:h-10 flex justify-center items-center rounded-full">
              <img src="/assets/Icons/github.svg" className="h-full" alt="img" />
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

const customStyle = {
  overlay: {
    backgroundColor: "#00000080",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  content: {
    padding: "10px",
    backgroundColor: "#ffffff",
    width: "30%",
    border: "0 px",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    margin: "auto",
  },
};
