import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useCreateLoan from "../../../hooks/Loan/useCreateLoan";
import Loader from "react-loader-spinner";
import GasFeeModal from "../stake/GasFeeModal";
import { loanDetails } from "../../../services/loan.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
function CloseLoan() {
  const toConvert = 1000000000000000000;
  const [returnLoanObj, setReturnLoanObj] = useState({
    totalValueAfterLoanFeeETHb: 0,
    totalValueAfterLoanFeeUSDb: 0,
    loanValueETHb: 0,
    loanValueUSDb: 0,
  });
  const {
    returnLoanAction,
    isReturning,
    openFeeModal,
    isFeeOpen,
    closeFeeModal,
    fee,
    selectFee,
    ETH
  } = useCreateLoan();
  const { loanType } = useSelector((state: RootState) => state.loan);
  useEffect(() => {
    loanDetails().then((res) => {
      setReturnLoanObj(res);
      console.log(res);
    });
  }, [loanType]);
  console.log(returnLoanObj);
  // parseFloat(((21000 * fee) / 1e9).toFixed(8));
  return (
    <>
      <div className="bg-customGray-100 rounded mr-8 w-full mt-3 text-xxs xxl:text-sm">
        <div className="rounded-t flex justify-between bg-gray-300 text-gray-600 text-xs xxl:text-base px-2 py-2 font-medium">
          <h5 className="py-1">CLOSE LOAN</h5>
        </div>
        <div className="p-3">
          <div className="font-normal">
            <h3 className="text-gray-600 py-1"> ETH BEING UNLOCKED</h3>

            <p className="text-gray-600 py-1">
              Balance :{" "}
              {loanType === "ETHb"
                ? returnLoanObj.totalValueAfterLoanFeeETHb / toConvert
                : returnLoanObj.totalValueAfterLoanFeeUSDb / toConvert}
            </p>
          </div>

          <div className="font-normal">
            <h3 className="text-gray-600 py-1">{loanType === "ETHb"? "ETHb" : "USDb"} BEING UNBORROWED</h3>
            <p className="text-gray-600 py-1">
              Balance :{" "}
              {loanType === "ETHb"
                ? returnLoanObj.loanValueETHb / toConvert
                : returnLoanObj.loanValueUSDb / toConvert}
            </p>
          </div>

          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">sUSD VALUE</h3>
            <p className="text-gray-600 py-1">
              $
              {loanType === "ETHb"
                ? (returnLoanObj.loanValueETHb / toConvert) * ETH.rate

                : returnLoanObj.loanValueUSDb / toConvert}
            </p>
          </div>

          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">FEE ?</h3>
            <p className="text-gray-600 py-1">
              ${parseFloat(((21000 * fee) / 1e9).toFixed(8))}
            </p>
          </div>
          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">GASS PRICE (GWEI)</h3>
            <p className="text-gray-600 py-1">
              {fee}{" "}
              <text
                onClick={openFeeModal}
                className="text-customBlue-200 ml-1 underline cursor-pointer	"
              >
                Edit
              </text>
            </p>
          </div>
          <div className="flex mt-3">
            <button
              className="bg-customBlue-200 p-2 xxl:p-3 w-full text-white rounded"
              onClick={() => returnLoanAction()}
            >
              {isReturning === false ? (
                "CONFIRM"
              ) : (
                <div className="flex justify-center">
                  <Loader type="Bars" color="#ffffff" height={18} width={20} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <GasFeeModal
        isOpen={isFeeOpen}
        close={closeFeeModal}
        activeFee={fee}
        select={selectFee}
      />
    </>
  );
}
export default CloseLoan;
