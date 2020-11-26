import Dropdown from "../../atomic/stake/Dropdown";
import React from "react";

function Burn() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="xl:text-lg xxl:text-2xl font-bold">BURN</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="xl:text-xs xxl:text-xl font-light text-blue-1000 mt-6">
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
            alt="img"
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="mt-6">
            <p className="xl:text-xs xxl:text-base font-normal">
              Confirm or enter amount to burn:
            </p>
            <div className="flex mt-2">
              <button className="focus:outline-none whitespace-no-wrap bg-customBlue-200 py-1 px-3 xl:text-xxs xxl:text-base xl:h-8 xxl:h-12 text-white rounded">
                Burn Max
              </button>
              <div className="bg-gray-300 py-1 px-3 text-center flex items-center justify-center xl:text-xxs xxl:text-base text-gray-600 font-medium ml-2 xl:h-8 xxl:h-12 rounded w-full">
                Fix your collateralization Ratio
              </div>
            </div>
          </div>
          <div className="mt-6 xl:text-xs xxl:text-base">
            <div className="flex justify-between">
              <p className=" font-medium text-gray-500">$ 0</p>
              <p className=" font-medium text-gray-500">$ 0</p>
            </div>

            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <text className="focus:outline-none text-gray-600 font-medium flex items-center border-r pr-4 border-gray-500">
                USDb
              </text>
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 font-medium"
                type="text"
                value="0.00"
              />
              <button className="focus:outline-none bg-customBlue-200 rounded px-2 py-1 text-white ">
                Max
              </button>
            </div>
          </div>
          <div className="text-center mt-2 xl:text-xxs xxl:text-base text-gray-800 font-normal">
            View transferable BYN
          </div>

          <h6 className="mt-8 text-center xl:text-xs xxl:text-base text-gray-800 font-normal">
            Ethereum network fee: $0/25 GWEI
          </h6>
          <button className="focus:outline-none bg-customBlue-200 text-white xl:text-xs xxl:text-base w-full rounded py-2 mt-2">
            BURN NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Burn;
