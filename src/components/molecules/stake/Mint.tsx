import React from "react";
import useMint from "../../../hooks/stake/useMint";
import Loader from "react-loader-spinner";
import GasFeeModal from "./GasFeeModal";

function Mint() {
  const { amount, amountVal, submit, fee, submitting, setAmount, openFeeModal, close, selectFee, isOpen } = useMint();
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
            <div className="bg-gray-300 mt-2 rounded px-2 text-gray-700 text-sm flex items-center">
              <text className="focus:outline-none text-gray-600 text-xs font-medium flex items-center border-r pr-4 border-gray-500">
                USDb
              </text>
              <input
                className="bg-gray-300 focus:outline-none ml-2 py-2 w-full"
                type="text"
                name="amount"
                value={amount}
                onChange={setAmount}
              />
            </div>
            <small className="block text-red-500 italic">{amountVal}</small>
          </div>
          <div className="flex justify-between text-xxs font-medium mt-1">
            <h6>Staking: 0 BYN</h6>
            <h6>Estimated C-Ratio: 0%</h6>
          </div>
          <div className="mt-24 text-center text-xs font-medium">
          <text>
            Ethereum network fee: $0/{fee} GWEI
          </text>
          <text onClick={openFeeModal} className="text-blue-500 underline ml-1 cursor-pointer">EDIT</text>
          </div>
          <button
            onClick={submit}
            className="focus:outline-none bg-customBlue-200 flex justify-center text-white text-xs w-full rounded py-2 mt-2"
          >
            {!submitting && "MINT NOW"}
            {submitting && (
              <Loader type="Bars" color="#ffffff" height={18} width={20} />
            )}
          </button>
        </div>
      </div>
      <GasFeeModal isOpen={isOpen} close={close} activeFee={fee} select={selectFee} />
    </div>
  );
}

export default Mint;
