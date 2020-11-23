import CloseLoan from "../components/molecules/loan/CloseLoan";
import ContactUsBanner from "../components/atomic/contactUs/ContactUsBanner";
import CreateLoan from "../components/molecules/loan/CreateLoan";
import EthAsCollateral from "../components/molecules/loan/EthAsCollateral";
import { Link } from "react-router-dom";
import React from "react";
import YourLoans from "../components/molecules/loan/YourLoans";
import YourWalet from "../components/molecules/loan/YourWalet";
function ContactUs() {
  return (
    <div>
      <ContactUsBanner />
      <div className="xl:flex lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8">
        <div className="flex-1 xl:mr-8 lg:mr-8">
          <h1 className="py-3 text-2xl">GET IN TOUCH</h1>
          <p className="text-xs">
            if you have any query,feel free to get in touch us.Fill the form
            bellow to send us your query.
          </p>
          <div className="flex">
            <div className="w-full py-3 mr-3">
              <p className="py-2">Name</p>
              <input
                className="bg-gray-100 focus:outline-none w-full p-3"
                type="text"
                value="0.00"
              />
            </div>
            <div className="w-full py-3">
              <p className="py-2">Email</p>
              <input
                className="bg-gray-100 focus:outline-none w-full p-3"
                type="text"
                value="0.00"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full py-3 mr-3">
              <p className="py-2">Phone</p>
              <input
                className="bg-gray-100 focus:outline-none w-full p-3"
                type="text"
                value="0.00"
              />
            </div>
            <div className="w-full py-3">
              <p className="py-2">Website</p>
              <input
                className="bg-gray-100 focus:outline-none w-full p-3"
                type="text"
                value="0.00"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full py-3">
              <p className="py-2">Message</p>
              <textarea
                className="bg-gray-100 focus:outline-none w-full p-3"
                value="0.00"
              />
            </div>
          </div>
          <div className="flex" style={{ justifyContent: "flex-end" }}>
            <button className="bg-customBlue-200 p-3 content-end text-white rounded">
              SEND MESSAGE
            </button>
          </div>
        </div>
        {/* <div className="xl:w-300 lg:w-300">MAP</div> */}
      </div>
      <div className=" lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8 h-48">
        <div className="flex justify-center w-full">
          <div className="w-64 flex-col border flex  p-8 items-center justify-center">
            <img
              src="assets/Icons/phone-black.png"
              alt="img"
              className="h-8 content-end"
            />
            CALL US
            <p className="text-xs">+94 722 321 911</p>
          </div>
          <div className="w-64 flex-col border mx-3  p-8 flex items-center justify-center">
            <img
              src="assets/Icons/plane-black.png"
              alt="img"
              className="h-8 content-end"
            />
            EMAIL US
            <p className="text-xs">suppport@beyond.com</p>
          </div>
          <div className="w-64 flex-col border p-8 flex items-center justify-center">
            <img
              src="assets/Icons/pin-black.png"
              alt="img"
              className="h-8 content-end"
            />
            LOCATE US
            <p className="text-xs">
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
