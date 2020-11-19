import * as React from "react";

function MakeOrders() {
  return (
    <div className="bg-customGray-100 rounded ml-4 mt-4 w-74">
      <div className="bg-gray-300 py-1 px-3 flex justify-between rounded-t">
        <h5 className="text-xs font-semibold text-gray-600">BUY/SELL</h5>
        <button className="focus:outline-none bg-customBlue-200 px-2 flex items-center text-xxs text-white">
          Reverse
          <img src="assets/Icons/reverse.svg" className="ml-1 h-2" />
        </button>
      </div>
      <div className="px-3">
        <div className="flex justify-between text-xxs text-gray-600 mt-4">
          <text>Sell</text>
          <text>Balance:</text>
        </div>
        <div className="bg-gray-300 mt-2 rounded-sm py-2 font-medium text-xs text-gray-700 px-2 flex items-center">
          <img src="assets/Icons/eth.svg" className="ml-1 w-4 mr-1" />
          sUSD
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full"
            type="text"
            value="0.00"
          />
        </div>
        <div className="flex justify-between text-xxs text-gray-600 mt-4">
          <text>Buy</text>
          <text>Balance:</text>
        </div>
        <div className="bg-gray-300 mt-2 rounded-sm py-2 font-medium text-xs text-gray-700 px-2 flex items-center">
          <img src="assets/Icons/eth.svg" className="ml-1 w-4 mr-1" />
          sUSD
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className="bg-gray-300 focus:outline-none ml-2 w-full"
            type="text"
            value="0.00"
          />
        </div>
        <div className="flex mt-3">
          <button className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 text-xxs mr-2">
            25%
          </button>
          <button className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 text-xxs mr-2">
            50%
          </button>
          <button className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 text-xxs mr-2">
            75%
          </button>
          <button className="focus:outline-none w-full rounded-sm text-white bg-customBlue-100 py-1 px-2 text-xxs">
            100%
          </button>
        </div>
        <div className="flex justify-between text-xxs text-gray-700 mt-2">
          <text>USD Value</text>
          <text>$0</text>
        </div>
        <div className="flex justify-between text-xxs text-gray-700 mt-1">
          <text>FEE ?</text>
          <text>$7.29</text>
        </div>
        <div className="flex justify-between text-xxs text-gray-700 mt-1">
          <text>GAS PRICE(GWE)</text>
          <div>
            <text>$35.00</text>
            <text className="text-customBlue-200 underline cursor-pointer	">
              Edit
            </text>
          </div>
        </div>
        <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-1 mt-4">
          CONFIRM TRADE NOW
        </button>
      </div>
    </div>
  );
}

export default MakeOrders;
