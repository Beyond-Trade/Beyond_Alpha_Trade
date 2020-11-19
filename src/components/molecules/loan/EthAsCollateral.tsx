import React from "react";
function EthAsCollateral() {
  return (
    <>
      <div className="bg-customGray-100 rounded mr-8 w-full">
        <div className="rounded-t flex justify-between items-center bg-gray-300 text-gray-600 text-xs px-2 py-2 font-medium">
          <div className="flex items-center ">
            <h5>ETH AS COLLATERAL</h5>
            <div className="ml-12 bg-gray-400 py-1 px-4 mr-4 rounded-sm">
              sETH
            </div>
            <div className="border border-gray-400 py-1 px-4 rounded-sm">
              sUSD
            </div>
          </div>
          <p className="flex">
            view contacts
            <img
              src="assets/icons/exit.svg"
              style={{ height: "13px", width: "13px", marginLeft: "4px" }}
            />
          </p>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-xs text-gray-600 py-2">INTEREST FEE</h3>
              <h3 className="text-xs text-gray-600 py-2">MINTING FEE</h3>
              <h3 className="text-xs text-gray-600 py-2"># OF OPEN LOANS</h3>
              <h3 className="text-xs text-gray-600 py-2">sETH LIMIT</h3>
              <h3 className="text-xs text-gray-600 py-2">sETH SUPPLY</h3>
            </div>
            <div>
              <h3 className="text-xs  py-2">0.00%</h3>
              <h3 className="text-xs py-2">0.00%</h3>
              <h3 className="text-xs py-2">11</h3>
              <h3 className="text-xs py-2">5,000</h3>
              <h3 className="text-xs py-2">93</h3>
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="border-r-2 w-full " style={{ height: "70%" }}></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-xs text-gray-600 py-2">MIN. COLLAT.SIZE</h3>
              <h3 className="text-xs text-gray-600 py-2">COLLAT.RATIO</h3>
              <h3 className="text-xs text-gray-600 py-2">LOCKED ETH</h3>
              <h3 className="text-xs text-gray-600 py-2">ETH PRICE (USD)</h3>
            </div>
            <div>
              <h3 className="text-xs text-gray-600 py-2">1.0 ETH</h3>
              <h3 className="text-xs text-gray-600 py-2">125%</h3>
              <h3 className="text-xs text-gray-600 py-2">116%</h3>
              <h3 className="text-xs text-gray-600 py-2">416.34</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EthAsCollateral;
