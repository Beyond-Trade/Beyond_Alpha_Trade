import { Link } from "react-router-dom";
import React from "react";
import { getLoan } from "../../../services/loan.service";
import useCreateLoan from "../../../hooks/Loan/useCreateLoan";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
import GasFeeModal from "../stake/GasFeeModal";
import GeneralButton from "../../atomic/GeneralButton";
function CreateLoan() {
  const { loanType, locked, borrowed, USDValue } = useSelector(
    (state: RootState) => state.loan
  );
  const {
    handleLockedChange,
    submit,
    openFeeModal,
    lockedErr,
    isSubmitting,
    ETH,
    ETHb,
    USDb,
    handleBorrowedChange,
    isFeeOpen,
    closeFeeModal,
    fee,
    selectFee,
  } = useCreateLoan();
  let firstInput: any = React.useRef(null);
  let firstDiv: any = React.useRef(null);
  let secondInput: any = React.useRef(null);
  let secondDiv: any = React.useRef(null);
  useEffect(() => {
    window.onclick = function (event: any) {
      if (firstInput.current === document.activeElement) {
        firstDiv.current.classList.add("border-customBlack-550");
      } else {
        firstDiv?.current?.classList?.remove("border-customBlack-550");
      }
      if (secondInput.current === document.activeElement) {
        secondDiv?.current?.classList?.add("border-customBlack-550");
      } else {
        secondDiv?.current?.classList?.remove("border-customBlack-550");
      }
    };
  }, []);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <>
      <div
        className="border border-gray-400 rounded mr-8 px-2 w-full"
        style={{ backgroundColor: "#EBEDF0" }}
      >
        <div className="border-b border-gray-400 rounded-t flex justify-between text-gray-600 text-xs xxl:text-base py-2 font-medium">
          <h5 className="py-1">CREATE LOAN</h5>
        </div>
        <div className="py-3 text-xxs xxl:text-sm">
          <div className="flex justify-between">
            <h3 className="text-black font-bold py-1">ETH BEING LOCKED</h3>

            <p className="text-gray-600 py-1">
              Balance : {ETH?.cryptoBalance.toFixed(2)}
            </p>
          </div>
          <div
            ref={firstDiv}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
            className={`rounded flex border border-gray-400 hover:shadow-custom hover:border-customBlack-550 text-gray-600 px-2 py-2 font-medium`}
          >
            <h3 className="py-1 mr-10 flex items-center">
              <img
                // src="/assets/icons/Ethereum.svg"
                src={ETH?.icon}
                className="h-3 xxl:h-5 mr-1 xxl:mr-2"
                alt="img"
              />
              ETH
            </h3>
            <input
              ref={firstInput}
              className="focus:outline-none ml-2 w-full appearance-none"
              style={{ backgroundColor: "#EBEDF0" }}
              type="number"
              name="locked"
              value={locked}
              min="0"
              step="0"
              onChange={(e) => handleLockedChange(e)}
            />
            {/* <h3 className="py-1">0.00</h3> */}
          </div>
          <small className="italic text-red-500 text-xxs">{lockedErr}</small>
          <div className="flex justify-between">
            <h3 className="text-black font-bold py-1">
              {loanType} BEING BORROWED
            </h3>
            <p className="text-gray-600 py-1">
              Balance :{" "}
              {loanType === "ETHb"
                ? Number(ETHb?.cryptoBalance).toFixed(2)
                : Number(USDb?.cryptoBalance).toFixed(2)}{" "}
            </p>
          </div>
          <div
            ref={secondDiv}
            className="border border-gray-400 hover:shadow-custom hover:border-customBlack-550  rounded flex text-gray-600 px-2 py-2 font-medium"
          >
            <h3 className="py-1 mr-10 flex items-center">
              <img
                src={`${loanType === "ETHb" ? ETHb?.icon : USDb?.icon}`}
                className="h-3 xxl:h-5 xl:mr-1 xxl:mr-2"
                alt="img"
              />
              {loanType}
            </h3>
            <input
              ref={secondInput}
              className="focus:outline-none ml-2 w-full appearance-none"
              type="number"
              style={{ backgroundColor: "#EBEDF0" }}
              name="borrowed"
              min="0"
              step="0"
              value={borrowed}
              onChange={(e) => handleBorrowedChange(e)}
            />
            {/* <h3 className="py-1">0.00</h3> */}
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-600 py-1">USD VALUE</h3>
            <p className="text-gray-600 py-1">${Number(USDValue).toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <h3 className="text-gray-600 py-1">FEE ?</h3>
            <p className="text-gray-600 py-1">
              ${parseFloat(((21000 * fee) / 1e9).toFixed(8))}
            </p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-600 py-1">GAS PRICE (GWEI)</h3>
            <p className="text-gray-600 py-1">
              {fee}{" "}
              <text
                onClick={openFeeModal}
                className="text-customBlack-500 ml-1 underline cursor-pointer	"
              >
                Edit
              </text>
              {/* <Link
              to="#"
              className="text-blue-700"
              style={{ textDecoration: "underline" }}
            >
              EDIT
            </Link> */}
            </p>
          </div>
          <div className="flex mt-3">
            <GeneralButton
              submitting={isSubmitting}
              submit={() => submit(loanType)}
              textValue={"SUBMIT"}
              otherClasses={"bg-customBlack-500 p-2 xxl:p-3 w-full"}
            />
            {/* <button
              className="bg-customBlue-200 p-2 xxl:p-3 w-full text-white rounded"
              onClick={() => submit(loanType)}
            >
              {isSubmitting === false ? (
                "SUBMIT"
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
export default CreateLoan;
