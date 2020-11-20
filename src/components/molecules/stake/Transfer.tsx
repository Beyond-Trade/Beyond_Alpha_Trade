import React from "react";
import Loader from "react-loader-spinner";
import useTransfer from "../../../hooks/stake/useTransfer";
import Dropdown from "../../atomic/stake/Dropdown";
import GasFeeModal from "./GasFeeModal";

function Transfer() {
  const {
    amount,
    amountVal,
    address,
    addressVal,
    balance,
    setMax,
    submit,
    fee,
    submitting,
    handleInputChange,
    openFeeModal,
    close,
    selectFee,
    isOpen,
    dropValues,
    onCoinSelect,
    dropIndex
  } = useTransfer();

  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">TRANSFER</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-medium text-blue-300 mt-6">
            Transfer your ETH, BYN or other synthetic asset
          </p>
          <img
            src="assets/Icons/transfer.svg"
            style={{ height: "150px" }}
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="flex justify-between py-3 px-4 bg-customGray-100 rounded-sm border border-gray-300">
            <h6 className="text-xs font-medium">Transferable amount:</h6>
            <h6 className="text-xs font-medium text-blue-400">{balance} {dropValues[dropIndex]}</h6>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium">Enter amount:</p>
            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <Dropdown fields={dropValues} index={dropIndex} onSelect={onCoinSelect} />
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 text-xs font-medium"
                type="text"
                name="amount"
                value={amount}
                onChange={handleInputChange}
              />
              <button onClick={setMax} className="focus:outline-none bg-customBlue-200 rounded px-2 py-1 text-white text-xxs">
                Max
              </button>
            </div>
            <small className="block text-red-500 italic">{amountVal}</small>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium">Enter destination address:</p>
            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 text-xs font-medium"
                type="text"
                placeholder="eg 0XB8B...8F6BA"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>
            <small className="block text-red-500 italic">{addressVal}</small>
          </div>
          <div className="mt-24 text-center text-xs font-medium">
          <text>
            Ethereum network fee: $0/{fee} GWEI
          </text>
          <text onClick={openFeeModal} className="text-blue-500 underline ml-1 cursor-pointer">EDIT</text>
          </div>
          <button onClick={submit} className="focus:outline-none flex justify-center bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-2">
          {!submitting && "SEND NOW"}
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

export default Transfer;
