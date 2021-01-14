import Loader from "react-loader-spinner";
import React from "react";
import useBurn from "../../../hooks/stake/useBurn";
import GasFeeModal from "./GasFeeModal";
import GeneralButton from "../../atomic/GeneralButton";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

function Burn() {
  const {
    maxBurn,
    amount,
    amountVal,
    burning,
    isOpen,
    close,
    fee,
    byn,
    burnType,
    openFeeModal,
    selectFee,
    submit,
    setMax,
    balance,
    checkCollateral,
    handleAmountChange,
    handleBYNChange,
    showBYN,
    showBYNField,
  } = useBurn();
  let firstInput: any = React.useRef(null);
  let firstDiv: any = React.useRef(null);
  let secondInput: any = React.useRef(null);
  let secondDiv: any = React.useRef(null);
  React.useEffect(() => {
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
  return (
    <div className="border border-gray-400 mt-6 py-10 px-10"
    style={{ backgroundColor: "#EBEDF0" }}>
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlack-500">REDEEM</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-normal xxl:text-base font-light text-black mt-6">
          Redeem USDb to unlock your staked BYN,
            <br /> allowing you to freely transfer
            your non-stacked BYN.
          </p>
          <img
            src="/assets/Images/redeem.png"
            style={{ height: "150px" }}
            alt="img"
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="mt-6">
            <p className="text-xs font-medium xxl:text-sm">
              Confirm or enter amount to Redeem:
            </p>
            <div className="flex mt-2">
            <GeneralButton
              submitting={false}
              submit={setMax}
              textValue={"Redeem Max"}
              otherClasses={`focus:outline-none whitespace-no-wrap ${
                burnType === 0
                  ? "bg-customBlack-500 text-white"
                  : "bg-customBlack-50 text-white"
              } py-1 px-3 text-xxs xxl:text-xs xl:h-8 xxl:h-10 `}
            />
              <GeneralButton
              submitting={false}
              submit={checkCollateral}
              textValue={"Fix your collateralization Ratio"}
              otherClasses={`focus:outline-none ${
                burnType === 1
                  ? "bg-customBlack-500 text-white"
                  : "bg-customBlack-50 text-white"
              } py-1 px-3 text-xxs xxl:text-xs font-medium ml-2 xl:h-8 xxl:h-10 w-full`}
            />
            </div>
          </div>
          {burnType === 0 && (
            <div className="mt-6 text-xs xxl:text-sm">
              <div className="flex justify-between">
                <p className=" font-medium text-gray-500">Invested USD: ${toFixedNoRounding(maxBurn || 0,5) || "0.00"}</p>
                <p className=" font-medium text-gray-500">Available USD: ${toFixedNoRounding(balance || 0,5) || "0.00"}</p>
              </div>

              <div ref={firstDiv} className="border border-gray-400 bg-white mt-2 rounded px-4 py-2 flex items-center hover:shadow-custom hover:border-customBlack-550">
                <text className="focus:outline-none text-gray-400 font-medium flex items-center border-r pr-4 border-gray-500">
                  USDb
                </text>
                <input
                ref={firstInput}
                  className="focus:outline-none text-sm ml-2 py-1 w-full text-customBlack-500"
                  type="number"
                  value={amount}
                  min="0"
                  step="0"
                  onChange={handleAmountChange}
                />
              </div>
              <small className="italic text-red-400 text-xs">{amountVal}</small>
            </div>
          )}
          {burnType === 0 && (
            <div
              onClick={showBYNField}
              className="text-center mt-2 text-xs xxl:text-sm text-customGray-400 cursor-pointer font-medium"
            >
              {!showBYN && "View transferable BYN"}
              {showBYN && "Transferable BYN being unlocked:"}
            </div>
          )}

          {showBYN && burnType === 0 && (
            <div ref={secondDiv}  className="border border-gray-400 bg-white text-xs xxl:text-sm mt-4 rounded px-4 py-2 flex items-center hover:shadow-custom hover:border-customBlack-550">
              <text className="focus:outline-none text-gray-400 font-medium flex items-center border-r pr-4 border-gray-500">
                BYN
              </text>
              <input
              ref={secondInput}
                className="focus:outline-none text-sm ml-2 py-1 w-full text-customBlack-500"
                type="number"
                value={byn}
                min="0"
                step="0"
                // onChange={handleBYNChange}
              />
            </div>
          )}

          <div
            className={`mt-${
              showBYN ? "10" : "24"
            } text-center text-customGray-400 text-xs xxl:text-sm font-medium`}
          >
            <text>Ethereum network fee: $0/{fee} GWEI</text>
            <text
              onClick={openFeeModal}
              className="text-customBlack-500 underline ml-1 cursor-pointer"
            >
              EDIT
            </text>
          </div>
          <GeneralButton
              submitting={burning}
              submit={submit}
              textValue={burnType === 0 ?"REDEEM NOW":"FIX NOW"}
              otherClasses={`bg-customBlack-500 text-xs xxl:text-sm w-full py-2 mt-2`}
            />
          {/* <button
            onClick={submit}
            className="focus:outline-none bg-customBlue-200 text-white flex justify-center text-xs xxl:text-sm w-full rounded py-2 mt-2"
          >
            {!burning && "REDEEM NOW"}
            {burning && (
              <Loader type="Bars" color="#ffffff" height={18} width={20} />
            )}
          </button> */}
        </div>
      </div>
      <GasFeeModal
        isOpen={isOpen}
        close={close}
        activeFee={fee}
        select={selectFee}
      />
    </div>
  );
}

export default Burn;
