import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useCreateLoan from "../../../hooks/Loan/useCreateLoan";
import Loader from "react-loader-spinner";
import GasFeeModal from "../stake/GasFeeModal";
import { loanDetails } from "../../../services/loan.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
import GeneralButton from "../../atomic/GeneralButton";
function CloseLoan() {
  const toConvert = 1000000000000000000;
  const [returnLoanObj, setReturnLoanObj] = useState({
    _totalValueAfterLoanFeeETHb: 0,
    _totalValueAfterLoanFeeUSDb: 0,
    _loanValueETHb: 0,
    _loanValueUSDb: 0,
  });
  const {
    returnLoanAction,
    isReturning,
    openFeeModal,
    isFeeOpen,
    closeFeeModal,
    fee,
    selectFee,
    ETH,
  } = useCreateLoan();
  const { loanType, OpenLoansNo } = useSelector(
    (state: RootState) => state.loan
  );
  useEffect(() => {
    loanDetails().then((res) => {
      setReturnLoanObj(res);
    });
  }, [loanType, isReturning, OpenLoansNo]);
  // parseFloat(((21000 * fee) / 1e9).toFixed(8));
  const isDisabled = () =>
    loanType === "ETHb"
      ? Number(returnLoanObj?._loanValueETHb) === 0
        ? true
        : false
      : Number(returnLoanObj?._loanValueUSDb) === 0
      ? true
      : false;
  return (
    <>
      <div className="border border-gray-400 rounded mr-8 w-full mt-3 px-2 text-xxs xxl:text-sm" style={{backgroundColor:"#EBEDF0"}}>
        <div className="border-b border-gray-400 rounded-t flex justify-between text-gray-600 text-xs xxl:text-base px-2 py-2 font-medium">
          <h5 className="py-1">CLOSE LOAN</h5>
        </div>
        <div className="p-3">
          <div className="font-normal">
            <h3 className="text-gray-600 py-1"> ETH BEING UNLOCKED</h3>

            <p className="text-gray-600 py-1">
              Balance :{" "}
              {loanType === "ETHb"
                ? returnLoanObj?._totalValueAfterLoanFeeETHb / toConvert || 0
                : returnLoanObj?._totalValueAfterLoanFeeUSDb / toConvert || 0}
            </p>
          </div>

          <div className="font-normal">
            <h3 className="text-gray-600 py-1">
              {loanType === "ETHb" ? "ETHb" : "USDb"} BEING UNBORROWED
            </h3>
            <p className="text-gray-600 py-1">
              Balance :{" "}
              {loanType === "ETHb"
                ? returnLoanObj?._loanValueETHb / toConvert || 0
                : returnLoanObj?._loanValueUSDb / toConvert || 0}
            </p>
          </div>

          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">sUSD VALUE</h3>
            <p className="text-gray-600 py-1">
              $
              {loanType === "ETHb"
                ? (returnLoanObj?._loanValueETHb / toConvert) * ETH?.rate || 0
                : returnLoanObj?._loanValueUSDb / toConvert || 0}
            </p>
          </div>

          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">FEE ?</h3>
            <p className="text-gray-600 py-1">
              ${parseFloat(((21000 * fee) / 1e9).toFixed(8))}
            </p>
          </div>
          <div className="flex justify-between font-normal">
            <h3 className="text-gray-600 py-1">GAS PRICE (GWEI)</h3>
            <p className="text-gray-600 py-1">
              {fee}{" "}
              <text
                onClick={openFeeModal}
                className="text-customBlack-500 ml-1 underline cursor-pointer	"
              >
                Edit
              </text>
            </p>
          </div>
          <div className="flex mt-3">
          <GeneralButton
              submitting={isReturning}
              submit={() => returnLoanAction()}
              textValue={"SUBMIT"}
              isDisabled={isDisabled()}
              otherClasses={`p-2 xxl:p-3 w-full text-white rounded ${
                isDisabled()
                  ? "cursor-not-allowed bg-customBlack-50"
                  : "bg-customBlack-500"
              }`}
            />
            {/* <button
              className={`p-2 xxl:p-3 w-full text-white rounded ${
                isDisabled()
                  ? "cursor-not-allowed bg-customBlue-100"
                  : "bg-customBlue-200"
              }`}
              onClick={() => returnLoanAction()}
              disabled={isDisabled()}
            >
              {isReturning === false ? (
                "CONFIRM"
              ) : (
                <div className="flex justify-center">
                  <Loader type="Bars" color="#ffffff" height={18} width={20} />
                </div>
              )}
            </button> */}
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
