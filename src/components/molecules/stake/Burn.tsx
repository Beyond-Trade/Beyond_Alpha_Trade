import React from "react";
import Dropdown from "../../atomic/stake/Dropdown";

function Burn() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">BURN</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-medium text-blue-300 mt-6">
            Burn sUSD to unlock your staked BYN. This
            <br />
            increases your Collateralization Ratio and
            <br />
            reduces your debt, allowing you to transfer
            <br />
            your non-escrowed BYN.
          </p>
          <img
            src="assets/Icons/burn.svg"
            style={{ height: "150px" }}
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="mt-6">
            <p className="text-xs font-medium">
              Confirm or enter amount to burn:
            </p>
            <div className="flex mt-2">
              <button className="focus:outline-none whitespace-no-wrap bg-customBlue-200 py-1 px-3 text-xxs text-white rounded">
                Burn Max
              </button>
              <div className="bg-gray-300 py-1 px-3 text-center text-xxs text-gray-600 font-medium ml-2 rounded w-full">
                Fix your collateralization Ratio
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium text-gray-500">$ 0</p>
            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <text className="focus:outline-none text-gray-600 text-xs font-medium flex items-center border-r pr-4 border-gray-500">
                USDb
              </text>
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 text-xs font-medium"
                type="text"
                value="0.00"
              />
              <button className="focus:outline-none bg-customBlue-200 rounded px-2 py-1 text-white text-xxs">
                Max
              </button>
            </div>
          </div>
          <div className="text-center mt-2 text-xxs text-gray-800 font-medium">
            View transferable BYN
          </div>

          <h6 className="mt-8 text-center text-xs text-gray-800 font-medium">
            Ethereum network fee: $0/25 GWEI
          </h6>
          <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-2">
            BURN NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Burn;
