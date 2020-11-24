import { Link } from "react-router-dom";
import React from "react";
function CloseLoan() {
  return (
    <div className="bg-customGray-100 rounded mr-8 w-full mt-3 xl:text-xxs xxl:text-base">
      <div className="rounded-t flex justify-between bg-gray-300 text-gray-600 xl:text-xs xxl:text-base px-2 py-2 font-medium">
        <h5 className="py-1">CLOSE LOAN</h5>
      </div>
      <div className="p-3">
        <div>
          <h3 className="text-gray-600 py-1">ETH BEING UNLOCKED</h3>

          <p className="text-gray-600 py-1">Balance :</p>
        </div>

        <div>
          <h3 className="text-gray-600 py-1">sETH BEING UNBORROWED</h3>
          <p className="text-gray-600 py-1">Balance :</p>
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
          <button className="bg-customBlue-200 p-1 w-full text-white rounded">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}
export default CloseLoan;
