import React from "react";

function Transfer() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">TRANSFER</h3>
      <div className="flex">
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
                <h6 className="text-xs font-medium text-blue-400">0.00 BYN</h6>
            </div>
          <div className="mt-6">
            <p className="text-xs font-medium">
              Enter amount: 
            </p>
            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <button className="focus:outline-none text-gray-600 text-xs font-medium flex items-center border-r pr-4 border-gray-500">
                sUSD
                <img src="assets/Icons/arrow-down.svg" className="ml-1 w-2" />
              </button>
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 text-xs font-medium"
                type="text"
                value="0.00"
              />
              <button className="focus:outline-none bg-customBlue-200 rounded px-2 py-1 text-white text-xxs">Max</button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium">
              Enter destination address:
            </p>
            <div className="bg-gray-300 mt-2 rounded px-4 py-3 flex items-center">
              <input
                className="bg-gray-300 focus:outline-none ml-2 w-full text-gray-600 text-xs font-medium"
                type="text"
                placeholder="eg 0XB8B...8F6BA"
              />
            </div>
          </div>
          <h6 className="mt-6 text-center text-xs font-medium">
            Ethereum network fee: $0/25 GWEI
          </h6>
          <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-2">
            SEND NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
