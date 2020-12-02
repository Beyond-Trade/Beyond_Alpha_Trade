import { Link } from "react-router-dom";
import React from "react";
function CreateLoan() {
  return (
    <div className="bg-customGray-100 rounded mr-8 w-full">
      <div className="rounded-t flex justify-between bg-gray-300 text-gray-600 text-xs xxl:text-base px-2 py-2 font-medium">
        <h5 className="py-1">CREATE LOAN</h5>
      </div>
      <div className="p-3 text-xxs xxl:text-sm">
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">ETH BEING LOCKED</h3>

          <p className="text-gray-600 py-1">Balance : 0</p>
        </div>
        <div className="rounded-t flex bg-gray-300 text-gray-600 px-2 py-2 font-medium">
          <h3 className="py-1 mr-10 flex items-center">
            <img
              src="assets/icons/Ethereum.svg"
              className="h-3 xxl:h-5 mr-1 xxl:mr-2"
              alt="img"
            />
            ETH
          </h3>
          <h3 className="py-1">0.00</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">sETH BEING BORROWED</h3>
          <p className="text-gray-600 py-1">Balance : 0</p>
        </div>
        <div className="rounded-t flex bg-gray-300 text-gray-600 px-2 py-2 font-medium">
          <h3 className="py-1 mr-10 flex items-center">
            <img
              src="assets/icons/Ethereum.svg"
              className="h-3 xxl:h-5 xl:mr-1 xxl:mr-2"
              alt="img"
            />
            ETH
          </h3>
          <h3 className="py-1">0.00</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">sUSD VALUE</h3>
          <p className="text-gray-600 py-1">$0</p>
        </div>

        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">FEE ?</h3>
          <p className="text-gray-600 py-1">$7.29</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 py-1">GASS PRICE (GWEI)</h3>
          <p className="text-gray-600 py-1">
            $35.00{" "}
            <Link
              to="#"
              className="text-blue-700"
              style={{ textDecoration: "underline" }}
            >
              EDIT
            </Link>
          </p>
        </div>
        <div className="flex mt-3">
          <button className="bg-customBlue-200 p-2 xxl:p-3 w-full text-white rounded">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateLoan;
