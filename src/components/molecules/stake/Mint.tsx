import React from "react";
import Dropdown from "../../atomic/stake/Dropdown";
import GeneralTab from "../../atomic/stake/GeneralTab";

function Mint() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">Mint</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-medium text-blue-300 mt-6">
            Mint USDb by staking your BYN.
            <br />
            You can trade various synthetic assets using
            <br />
            USDb as well as earn staking reward daily from
            <br />
            your staked BYN
          </p>
          <img
            src="assets/Icons/mint-illustration.svg"
            style={{ height: "150px" }}
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="mt-8">
            <p className="text-xs font-medium">
              Confirm or enter amount to mint:
            </p>
            <div className="bg-gray-300 mt-2 rounded p-2 flex items-center">
              <Dropdown />
              <input
                className="bg-gray-300 focus:outline-none ml-2"
                type="text"
                value="0.00"
              />
            </div>
          </div>
          <div className="flex justify-between text-xxs font-medium mt-1">
            <h6>Staking: 0 BYN</h6>
            <h6>Estimated C-Ratio: 0%</h6>
          </div>
          <h6 className="mt-24 text-center text-xs font-medium">
            Ethereum network fee: $0/25 GWEI
          </h6>
          <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-2">
            MINT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mint;
