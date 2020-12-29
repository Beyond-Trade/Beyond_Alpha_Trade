import CloseLoan from "../components/molecules/loan/CloseLoan";
import ContactUsBanner from "../components/atomic/contactUs/ContactUsBanner";
import CreateLoan from "../components/molecules/loan/CreateLoan";
import EthAsCollateral from "../components/molecules/loan/EthAsCollateral";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import YourLoans from "../components/molecules/loan/YourLoans";
import YourWalet from "../components/molecules/loan/YourWalet";
function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <ContactUsBanner />
      <div className="xl:flex lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8">
        <div className="flex-1 xl:mr-8 lg:mr-8">
          <h1 className="py-3 xl:text-2xl xxl:text-3xl text-customBlack-500">GET IN TOUCH</h1>
          <p className="xl:text-xs xxl:text-lg text-customBlack-500">
            if you have any query,feel free to get in touch us.Fill the form
            bellow to send us your query.
          </p>
          <div className="flex">
            <div className="w-full py-3 mr-3">
              <p className="py-2">Name</p>
              <input
                className="focus:outline-none w-full p-3 border border-white  focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550"
                type="text"
                style={{ backgroundColor: "#fcfcfc" }}
                value=""
              />
            </div>
            <div className="w-full py-3">
              <p className="py-2">Email</p>
              <input
                className="focus:outline-none w-full p-3 border border-white  focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550"
                type="text"
                style={{ backgroundColor: "#fcfcfc" }}
                value=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full py-3 mr-3">
              <p className="py-2">Phone</p>
              <input
                className="focus:outline-none w-full p-3 border border-white  focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550"
                type="text"
                style={{ backgroundColor: "#fcfcfc" }}
                value=""
              />
            </div>
            <div className="w-full py-3">
              <p className="py-2">Website</p>
              <input
                className="focus:outline-none w-full p-3 border border-white  focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550"
                type="text"
                style={{ backgroundColor: "#fcfcfc" }}
                value=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full py-3">
              <p className="py-2">Message</p>
              <textarea
                className=" focus:outline-none w-full p-3 border border-white  focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550"
                style={{ backgroundColor: "#fcfcfc" }}
                value=""
              />
            </div>
          </div>
          <div className="flex" style={{ justifyContent: "flex-end" }}>
            <button className="bg-customBlack-500 p-3 content-end xl:text-sm text-white rounded">
              SEND MESSAGE
            </button>
          </div>
        </div>
        {/* <div className="xl:w-300 lg:w-300">MAP</div> */}
      </div>
      <div className=" lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8 xl:h-48 xxl:h-64">
        <div className="flex justify-center w-full">
          <div className="w-1/4 flex-col border mx-3 xl:text-xl xxl:text-3xl  p-8 flex items-center justify-center  xxl:font-medium focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550">
            <img
              src="/assets/Icons/phone-black.png"
              alt="img"
              className="xl:h-8 xxl:h-12 content-end"
            />
            CALL US
            <p className="xl:text-xxs xxl:text-lg font-light">
              +94 722 321 911
            </p>
          </div>
          <div className="w-1/4 flex-col border mx-3 xl:text-xl xxl:text-3xl  p-8 flex items-center justify-center  xxl:font-medium focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550">
            <img
              src="/assets/Icons/plane@3x.png"
              alt="img"
              className="xl:h-8 xxl:h-12 content-end"
            />
            EMAIL US
            <p className="xl:text-xxs xxl:text-lg font-light">
              suppport@beyond.com
            </p>
          </div>
          <div className="w-1/4 flex-col border mx-3 xl:text-xl xxl:text-3xl  p-8 flex text-center items-center justify-center  xxl:font-medium focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550">
            <img
              src="/assets/Icons/pin-black.png"
              alt="img"
              className="xl:h-8 xxl:h-12 content-end"
            />
            LOCATE US
            <p className="xl:text-xxs xxl:text-lg font-light">
              2591 nort Forsyth Road Suite H,Orlando (32807) Florida United
              States.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
