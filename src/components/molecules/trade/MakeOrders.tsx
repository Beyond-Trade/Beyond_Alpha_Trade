import * as React from "react";

import GasFeeModal from "../stake/GasFeeModal";
import Loader from "react-loader-spinner";
import useMakeOrders from "../../../hooks/trade/useMakeOrders";

function MakeOrders() {
  const {
    submitting,
    isFeeOpen,
    fee,
    inputs,
    openFeeModal,
    closeFeeModal,
    submit,
    selectFee,
    toggleBuySell,
    to,
    from,
    fromBalance,
    toBalance,
    handleFromChange,
    handleToChange,
    setPercentage,
    usdValue,
    toImage,
    fromImage
  } = useMakeOrders();

  return (
    <div className="bg-customGray-100 rounded xl:ml-4 lg:ml-4 md:ml-4 mt-4 md:w-94 xl:w-94 lg:w-94">
      <div className="bg-gray-300 py-1 px-3 flex justify-between rounded-t">
        <h5 className="xl:text-xs xxl:text-base font-semibold text-gray-600">
          BUY/SELL
        </h5>
        <button
          onClick={toggleBuySell}
          className="focus:outline-none bg-customBlue-200 px-2 flex items-center xl:text-xxs xxl:text-base text-white"
        >
          Reverse
          <img src="assets/Icons/reverse.svg" className="ml-1 h-2" />
        </button>
      </div>
      <div className="px-3 pb-3">
        <div className="flex justify-between xl:text-xxs xxl:text-base text-gray-600 mt-4">
          <text>Sell</text>
          <text>Balance: {fromBalance}</text>
        </div>
        <div className="bg-gray-300 mt-2 rounded-sm py-2 font-medium text-xs text-gray-700 px-2 flex items-center">
          <img src={fromImage} className="ml-1 w-4 mr-1" />
          {from}
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full appearance-none"
            type="number"
            name="from"
            value={inputs.from}
            onChange={handleFromChange}
          />
        </div>
        <small className="italic text-red-500 text-xxs">{inputs.fromVal}</small>
        <div className="flex justify-between xl:text-xxs xxl:text-base text-gray-600 mt-4">
          <text>Buy</text>
          <text>Balance: {toBalance}</text>
        </div>
        <div className="bg-gray-300 mt-2 rounded-sm py-2 font-medium text-xs text-gray-700 px-2 flex items-center">
          <img src={toImage} className="ml-1 w-4 mr-1" />
          {to}
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full appearance-none"
            type="number"
            name="to"
            value={inputs.to}
            onChange={handleToChange}
          />
        </div>
        <small className="italic text-red-500 xl:text-xxs xxl:text-sm">
          {inputs.toVal}
        </small>
        <div className="flex mt-3 xl:text-xxs xxl:text-sm">
          <button
            onClick={() => setPercentage(25)}
            className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 mr-2"
          >
            25%
          </button>
          <button
            onClick={() => setPercentage(50)}
            className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 mr-2"
          >
            50%
          </button>
          <button
            onClick={() => setPercentage(75)}
            className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 mr-2"
          >
            75%
          </button>
          <button
            onClick={() => setPercentage(100)}
            className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2"
          >
            100%
          </button>
        </div>
        <div className="flex justify-between font-medium xl:text-xxs xxl:text-sm text-gray-700 mt-2">
          <text>USD Value</text>
          <text>${usdValue}</text>
        </div>
        <div className="flex justify-between xl:text-xxs xxl:text-sm font-medium text-gray-700 mt-1">
          <text>FEE ?</text>
          <text>$7.29</text>
        </div>
        <div className="flex justify-between xl:text-xxs xxl:text-sm font-medium text-gray-700 mt-1">
          <text>GAS PRICE(GWE)</text>
          <div>
            <text>${fee}</text>
            <text
              onClick={openFeeModal}
              className="text-customBlue-200  ml-1 underline cursor-pointer	"
            >
              Edit
            </text>
          </div>
        </div>
        <button
          onClick={submit}
          className="focus:outline-none bg-customBlue-200 hover:bg-blue-500 flex justify-center text-white text-xs w-full rounded py-2 mt-4"
        >
          {!submitting && "CONFIRM TRADE NOW"}
          {submitting && (
            <Loader type="Bars" color="#ffffff" height={18} width={20} />
          )}
        </button>
      </div>
      <GasFeeModal
        isOpen={isFeeOpen}
        close={closeFeeModal}
        activeFee={fee}
        select={selectFee}
      />
    </div>
  );
}

export default MakeOrders;
