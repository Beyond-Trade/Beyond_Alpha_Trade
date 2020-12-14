import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoanContractDetails,
  getEthLocked,
} from "../../../services/loan.service";
import { setLoanTypeAction } from "../../../store/actions/LoanTypeAction";
import { RootState } from "../../../store/reducers/Index";
function EthAsCollateral({ ETH }: any) {
  const dispatch = useDispatch();
  // const [state, setState] = useState({
  //   OpenLoansNo: "",
  //   interestFee: "",
  //   ETHbSupply: "",
  //   USDbSupply: "",
  //   collatRatio: "",
  //   ethLocked: "",
  // });
  const {
    loanType,
    OpenLoansNo,
    interestFee,
    ETHbSupply,
    USDbSupply,
    collatRatio,
    ethLocked,
  } = useSelector((state: RootState) => state.loan);
  console.log(OpenLoansNo);

  const LoanTypeAction = (type: any) => {
    console.log(type, "======TYPE=======");
    dispatch(setLoanTypeAction(type));
  };
  const toConvert = 1000000000000000000;
  return (
    <>
      <div className="bg-customGray-100 rounded mr-8 w-full">
        <div className="rounded-t flex justify-between items-center bg-gray-300 text-gray-600 text-xs xxl:text-sm px-2 py-2 font-medium">
          <div className="flex items-center ">
            <h5>ETH AS COLLATERAL</h5>
            <div
              onClick={() => LoanTypeAction("ETHb")}
              // onClick={handleETHb}
              className={`ml-12 xxl:ml-32 py-1 px-4 mr-4 rounded-sm cursor-pointer ${
                loanType === "ETHb" ? "bg-gray-400" : "border border-gray-400"
              }`}
            >
              ETHb
            </div>
            <div
              onClick={() => LoanTypeAction("USDb")}
              // onClick={handleUSDb}
              className={`py-1 px-4 rounded-sm cursor-pointer ${
                loanType === "USDb" ? "bg-gray-400" : "border border-gray-400"
              }`}
            >
              USDb
            </div>
          </div>
          <p className="flex">
            view contacts
            <img
              src="/assets/Icons/exit.svg"
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
              <h3 className="text-gray-600 py-2">MINTING FEE</h3>
              <h3 className="text-gray-600 py-2"># OF OPEN LOANS</h3>
              <h3 className="text-gray-600 py-2">
                {loanType === "ETHb" ? "ETHb" : "USDb"} LIMIT
              </h3>
              <h3 className="text-gray-600 py-2">
                {loanType === "ETHb" ? "ETHb" : "USDb"} SUPPLY
              </h3>
            </div>
            <div>
              <h3 className=" py-2">{interestFee || 0}%</h3>
              <h3 className="py-2">0.50%</h3>
              <h3 className="py-2">{OpenLoansNo || "0"}</h3>
              <h3 className="py-2">
                {loanType === "ETHb" ? "5,000" : "10,000,000"}
              </h3>
              <h3 className="py-2">
                {loanType === "ETHb"
                  ? Number(ETHbSupply) / toConvert
                  : Number(USDbSupply) / toConvert}
              </h3>
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="border-r-2 w-full " style={{ height: "70%" }}></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="flex justify-between text-xs xxl:text-sm w-full">
            <div>
              <h3 className="text-gray-600 py-2">MIN. COLLAT. SIZE</h3>
              <h3 className="text-gray-600 py-2">COLLAT. RATIO</h3>
              <h3 className="text-gray-600 py-2">LOCKED ETH</h3>
              <h3 className="text-gray-600 py-2">ETH PRICE (USD)</h3>
            </div>
            <div>
              <h3 className="py-2">1.0 ETH</h3>
              <h3 className="py-2">{Number(collatRatio) + 100}%</h3>
              <h3 className="py-2">{Number(ethLocked) / toConvert}</h3>
              <h3 className="py-2">{ETH?.rate || 0}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EthAsCollateral;
