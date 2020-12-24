import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loanDetails } from "../../../services/loan.service";
import { RootState } from "../../../store/reducers/Index";

function YourLoans() {
  const toConvert = 1000000000000000000;
  const [returnLoanObj, setReturnLoanObj] = useState({
    _collatteralETHb: 0,
    _collatteralUSDb: 0,
    _totalValueAfterLoanFeeETHb: 0,
    _totalValueAfterLoanFeeUSDb: 0,
    _loanValueETHb: 0,
    _loanValueUSDb: 0,
  });
  const { loanType, OpenLoansNo, interestFee, collatRatio } = useSelector(
    (state: RootState) => state.loan
  );
  useEffect(() => {
    loanDetails().then((res) => {
      setReturnLoanObj(res);
      console.log(res);
    });
  }, [loanType, , OpenLoansNo]);
  return (
    <div className="border border-gray-400 w-full whitespace-nowrap px-2 mb-4 overflow-auto rounded mr-8 mt-3" style={{backgroundColor:"#EBEDF0"}}>
      <div className=" w-auto rounded-t pl-2 pt-2">
        <h3 className="font-medium text-xs xxl:text-base  text-gray-600">
          YOUR LOANS
        </h3>
      </div>
      <table width="100%">
        <tr className="border-b border-gray-400 px-2 text-xxs xxl:text-xs text-left text-gray-600 font-medium">
          <td className="w-1/7 ">
            <div className="flex items-center " style={{ width: "130px" }}>
              AMOUNT BORROWED{" "}
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/7 ">
            <div className="flex items-center" style={{ width: "90px" }}>
              COLLATERAL{" "}
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              C-RATIO{" "}
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "100px" }}>
              TIME OPENED{" "}
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "130px" }}>
              CURRENT.INST.FEE{" "}
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              STATUS{" "}
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              VERIFY{" "}
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
        </tr>
        
          {loanType === "ETHb" ? (
            returnLoanObj?._loanValueETHb > 0 ? (
              <tr className="text-xs xxl:text-sm text-left text-gray-700 font-medium h-64 align-top" >
                <td className="py-3 px-3">
                  {loanType === "ETHb"
                    ? (returnLoanObj?._loanValueETHb / toConvert).toFixed(2) || 0
                    : (returnLoanObj?._loanValueUSDb / toConvert).toFixed(2) || 0}{" "}
                  ETHb
                </td>
                <td className="py-3 px-3">
                  {loanType === "ETHb"
                    ? (returnLoanObj?._collatteralETHb / toConvert).toFixed(2) || 0
                    : (returnLoanObj?._collatteralUSDb / toConvert).toFixed(2) || 0}{" "}
                  ETHb
                </td>
                <td className="py-3 px-3">{Number(collatRatio) + 100}%</td>
                <td className="py-3 px-3"></td>
                <td className="py-3 px-3">{interestFee}%</td>
                <td className="py-3 px-3">opened</td>
                <td className="py-3 px-3"></td>
              </tr>
            ) : (
              null
            )
          ) : returnLoanObj?._loanValueUSDb > 0 ? (
            <tr className="text-xs xxl:text-sm text-left text-gray-700 font-medium h-64 align-top">
              <td className="py-3 px-3">
                {loanType === "ETHb"
                  ? returnLoanObj?._loanValueETHb / toConvert || 0
                  : returnLoanObj?._loanValueUSDb / toConvert || 0}{" "}
                USDb
              </td>
              <td className="py-3 px-3">
                {loanType === "ETHb"
                  ? returnLoanObj?._collatteralETHb / toConvert || 0
                  : returnLoanObj?._collatteralUSDb / toConvert || 0}{" "}
                USDb
              </td>
              <td className="py-3 px-3">{Number(collatRatio) + 100}%</td>
              <td className="py-3 px-3"></td>
              <td className="py-3 px-3">{interestFee}%</td>
              <td className="py-3 px-3">opened</td>
              <td className="py-3 px-3"></td>
            </tr>
          ) : (
            null
          )}
      </table>
      {loanType === "ETHb" ? (
        returnLoanObj?._loanValueETHb > 0 ? null : (
          <div className="h-64 p-5">
            <h6 className="text-blue-700 font-medium text-xxs xxl:text-sm">
              No assets associated with this wallet
            </h6>
          </div>
        )
      ) : returnLoanObj?._loanValueUSDb > 0 ? null : (
        <div className="h-64 p-5">
          <h6 className="text-blue-700 font-medium text-xxs xxl:text-sm">
            No assets associated with this wallet
          </h6>
        </div>
      )}
    </div>
  );
}

export default YourLoans;
