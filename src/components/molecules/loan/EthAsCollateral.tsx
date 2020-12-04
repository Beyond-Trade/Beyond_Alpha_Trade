import React, { useEffect } from "react";
import useCreateLoan from "../../../hooks/Loan/useCreateLoan";
function EthAsCollateral({handleETHb,handleUSDb,loanType}:any) {


useEffect(()=> {
  console.log('from component', )
})


  return (
    <>
      <div className="bg-customGray-100 rounded mr-8 w-full">
        <div className="rounded-t flex justify-between items-center bg-gray-300 text-gray-600 text-xs xxl:text-sm px-2 py-2 font-medium">
          <div className="flex items-center ">
            <h5>ETH AS COLLATERAL</h5>
            <div 
            onClick={handleUSDb}
            className={`ml-12 xxl:ml-32 py-1 px-4 mr-4 rounded-sm cursor-pointer ${loanType === "ETHb" ? "bg-gray-400":"border border-gray-400"}`}>
              ETHb
            </div>
            <div 
            onClick={handleETHb}
            className={`py-1 px-4 rounded-sm cursor-pointer ${loanType === "USDb" ? "bg-gray-400":"border border-gray-400"}`}>
              USDb
            </div>
          </div>
          <p className="flex">
            view contacts
            <img
              src="assets/icons/exit.svg"
              alt="img"
              className="h-4 ml-2"
              // style={{ height: "13px", width: "13px", marginLeft: "4px" }}
            />
          </p>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex justify-between text-xs xxl:text-sm w-full">
            <div>
              <h3 className="text-gray-600 py-2">INTEREST FEE</h3>
              {/* <h3 className="text-gray-600 py-2">MINTING FEE</h3> */}
              <h3 className="text-gray-600 py-2"># OF OPEN LOANS</h3>
              <h3 className="text-gray-600 py-2">ETHb LIMIT</h3>
              {/* <h3 className="text-gray-600 py-2">ETHb SUPPLY</h3> */}
            </div>
            <div>
              <h3 className=" py-2">20%</h3>
              {/* <h3 className="py-2">0.00%</h3> */}
              <h3 className="py-2">11</h3>
              <h3 className="py-2">5,000</h3>
              {/* <h3 className="py-2">93</h3> */}
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="border-r-2 w-full " style={{ height: "70%" }}></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="flex justify-between text-xs xxl:text-sm w-full">
            <div>
              <h3 className="text-gray-600 py-2">MIN. COLLAT. SIZE</h3>
              {/* <h3 className="text-gray-600 py-2">COLLAT. RATIO</h3> */}
              <h3 className="text-gray-600 py-2">LOCKED ETH</h3>
              <h3 className="text-gray-600 py-2">ETH PRICE (USD)</h3>
            </div>
            <div>
              <h3 className="py-2">1.0 ETH</h3>
              {/* <h3 className="py-2">125%</h3> */}
              <h3 className="py-2">116%</h3>
              <h3 className="py-2">416.34</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EthAsCollateral;
