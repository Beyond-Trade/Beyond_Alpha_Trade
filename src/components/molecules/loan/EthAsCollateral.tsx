import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoanContractDetails,
  getEthLocked,
} from "../../../services/loan.service";
import { setLoanTypeAction } from "../../../store/actions/LoanTypeAction";
import { RootState } from "../../../store/reducers/Index";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
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

  const LoanTypeAction = (type: any) => {
    dispatch(setLoanTypeAction(type));
  };
  const toConvert = 1000000000000000000;
  return (
    <>
      <div className="border border-lightGray mr-8 px-8 py-6 w-full">
      <h5 className="block sm:hidden">ETH AS COLLATERAL</h5>
        <div className="rounded-t flex justify-between items-center text-lightGray text-xs xxl:text-sm py-4 font-medium">
          <div className="flex items-center text-blackGray">
            <h5 className="hidden sm:block">ETH AS COLLATERAL</h5>
            <div
              onClick={() => LoanTypeAction("ETHb")}
              // onClick={handleETHb}
              className={`ml-4 lg:ml-12 xxl:ml-32 py-1 px-4 mr-4 rounded-sm cursor-pointer ${
                loanType === "ETHb"
                  ? "bg-customPink text-black"
                  : "bg-lightGray text-white"
              }`}
            >
              ETHb
            </div>
            <div
              onClick={() => LoanTypeAction("USDb")}
              // onClick={handleUSDb}
              className={`py-1 px-4 rounded-sm cursor-pointer ${
                loanType === "USDb"
                  ? "bg-customPink text-black"
                  : "bg-lightGray text-white"
              }`}
            >
              USDb
            </div>
          </div>
          <a
            className="flex"
            href="https://rinkeby.etherscan.io/address/0xb441A09C3a11c1e9B4B657AA4f1Fdb804B1d5A57"
          >
            View contract
            <img
              src="/assets/Icons/exit.svg"
              alt="img"
              className="h-4 ml-2"
              // style={{ height: "13px", width: "13px", marginLeft: "4px" }}
            />
          </a>
        </div>
            <div className="sm:flex justify-between border border-lightGray px-5">
              <div className="flex w-full">
              <div className="w-full">
              <h3 className="text-lightGray py-2">INTEREST FEE</h3>
              </div>
              <div className="w-full text-right sm:text-left">
              <h3 className=" py-2">{interestFee || 0}%</h3>
              </div>
              </div>
              <div className="flex w-full">
              <div className="w-full">
              <h3 className="text-lightGray py-2">MIN. COLLAT. SIZE</h3>
              </div>
              <div className="w-full text-right">
              <h3 className="py-2">0 ETH</h3>
              </div>
              </div>
            </div>
            <div className="sm:flex justify-between px-5">
            <div className="flex w-full">
            <div className="w-full">
              <h3 className="text-lightGray py-2">MINTING FEE</h3>
              </div>
              <div className="w-full text-right sm:text-left">
              <h3 className="py-2">0.50%</h3>
              </div>
              </div>
              <div className="flex w-full">
              <div className="w-full">
              <h3 className="text-lightGray py-2">COLLAT. RATIO</h3>
              </div>
              <div className="w-full text-right">
              <h3 className="py-2">
                {collatRatio > 0 ? Number(collatRatio) + 100 : 150}%
              </h3>
              </div>
              </div>
            </div>
            <div className="sm:flex justify-between border border-lightGray px-5">
            <div className="flex w-full">
            <div className="w-full">
              <h3 className="text-lightGray py-2"># OF OPEN LOANS</h3>
              </div>
              <div className="w-full text-right sm:text-left">
              <h3 className="py-2">{OpenLoansNo || "0"}</h3>
              </div>
              </div>
              <div className="flex w-full">
              <div className="w-full">
              <h3 className="text-lightGray py-2">TOTAL LOCKED ETH</h3>
              </div>
              <div className="w-full text-right">
              <h3 className="py-2">{Number(ethLocked) / toConvert}</h3>
              </div>
              </div>
            </div>
            <div className="sm:flex justify-between px-5">
            <div className="flex w-full">
            <div className="w-full">
              <h3 className="text-lightGray py-2">
                {loanType === "ETHb" ? "ETHb" : "USDb"} LIMIT
              </h3>
              </div>
              <div className="w-full text-right sm:text-left">
              <h3 className="py-2">
                {loanType === "ETHb" ? "5,000" : "10,000,000"}
              </h3>
              </div>
              </div>
              <div className="flex w-full">
              <div className="w-full">
              <h3 className="text-lightGray py-2">ETH PRICE (USD)</h3>
              </div>
              <div className="w-full text-right">
              <h3 className="py-2">{Number(ETH?.rate).toFixed(2) || 0}</h3>
              </div>
              </div>
            </div>
            <div className="flex justify-between border border-lightGray px-5">
              <div className="w-full hidden sm:block" />
              <div className="w-full hidden sm:block" />
              <div className="w-full">
              <h3 className="text-lightGray py-2">
                {loanType === "ETHb" ? "ETHb" : "USDb"} SUPPLY
              </h3>
              </div>
              <div className="w-full text-right">
              <h3 className="py-2">
                {loanType === "ETHb"
                  ? toFixedNoRounding(Number(ETHbSupply) / toConvert, 5)
                  : toFixedNoRounding(Number(USDbSupply) / toConvert, 5)}
              </h3>
              </div>
            </div>
      </div>
    </>
  );
}
export default EthAsCollateral;
