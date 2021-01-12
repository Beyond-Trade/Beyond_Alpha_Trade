import Dropdown from "../../atomic/stake/Dropdown";
import GasFeeModal from "./GasFeeModal";
import Loader from "react-loader-spinner";
import React from "react";
import useTransfer from "../../../hooks/stake/useTransfer";
import GeneralButton from "../../atomic/GeneralButton";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

function Transfer() {
  const {
    amount,
    amountVal,
    address,
    addressVal,
    balance,
    setMax,
    submit,
    fee,
    submitting,
    handleInputChange,
    openFeeModal,
    close,
    selectFee,
    isOpen,
    dropValues,
    onCoinSelect,
    dropIndex,
  } = useTransfer();
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
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlack-500">TRANSFER</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-normal xxl:text-base font-light text-black mt-6">
            Transfer your ETH, BYN or other synthetic asset
          </p>
          <img
            src="/assets/Images/transfer.png"
            style={{ height: "150px" }}
            alt="img"
            className="m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="flex justify-between py-3 px-4 rounded-sm border border-gray-400 ">
            <h6 className="text-xs xxl:text-sm font-medium text-black">
              Transferable amount:
            </h6>
            <h6 className="text-xs xxl:text-sm font-bold text-customBlack-500">
              {toFixedNoRounding(balance,5)}{" "}
              {dropValues[dropIndex] === "Beyond"
                ? "BYN"
                : dropValues[dropIndex]}
            </h6>
          </div>
          <div className="mt-6 text-xs xxl:text-sm">
            <p className="font-medium">Enter amount:</p>
            <div ref={firstDiv} className="border border-gray-400 bg-white mt-2 rounded px-4 py-2 flex items-center hover:shadow-custom hover:border-customBlack-550">
              <Dropdown
                fields={dropValues}
                index={dropIndex}
                onSelect={onCoinSelect}
              />
              <input
              ref={firstInput}
                className="focus:outline-none ml-2 py-1 w-full text-customBlack-500 font-medium"
                type="number"
                name="amount"
                min="0"
                step="0"
                value={amount}
                onChange={handleInputChange}
              />
              <GeneralButton
              submitting={false}
              submit={setMax}
              textValue={"Max"}
              otherClasses={"bg-customBlack-500 px-2 py-1 "}
            />
              {/* <button
                onClick={setMax}
                className="focus:outline-none bg-customBlue-200 rounded px-2 py-1 text-white"
              >
                Max
              </button> */}
            </div>
            <small className="block text-red-500 italic">{amountVal}</small>
          </div>
          <div className="mt-6 text-xs xxl:text-sm">
            <p className="font-medium">Enter destination address:</p>
            <div ref={secondDiv} className="border border-gray-400  hover:shadow-custom hover:border-customBlack-550 bg-white  mt-2 rounded px-4 py-2 flex items-center">
              <input
              ref={secondInput}
                className="focus:outline-none ml-2 py-1 w-full text-gray-600 font-medium"
                type="text"
                placeholder="eg 0XB8B...8F6BA"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>
            <small className="block text-red-500 italic">{addressVal}</small>
          </div>
          <div className="mt-24 text-center text-gray-600 text-xs xxl:text-sm font-medium">
            <text>Ethereum network fee: $0/{fee} GWEI</text>
            <text
              onClick={openFeeModal}
              className="text-customBlack-500 underline ml-1 cursor-pointer"
            >
              EDIT
            </text>
          </div>
          <GeneralButton
              submitting={submitting}
              submit={submit}
              textValue={"SEND NOW"}
              otherClasses={"bg-customBlack-500 text-xs xxl:text-base w-full py-2 xxl:py-3 mt-2"}
            />
          {/* <button
            onClick={submit}
            className="focus:outline-none flex justify-center bg-customBlue-200 text-white text-xs xxl:text-base w-full rounded py-2 xxl:py-3 mt-2"
          >
            {!submitting && "SEND NOW"}
            {submitting && (
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

export default Transfer;
