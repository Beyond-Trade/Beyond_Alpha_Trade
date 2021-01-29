import Dropdown from "../../atomic/stake/Dropdown";
import GasFeeModal from "./GasFeeModal";
import Loader from "react-loader-spinner";
import React from "react";
import useTransfer from "../../../hooks/stake/useTransfer";
import GeneralButton from "../../atomic/GeneralButton";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
import AssetRateCard from "../../atomic/stake/AssetRateCard";

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
    <div className="mt-6 py-10">
      <div className="xl:flex lg:flex">
        <div className="w-full lg:mr-6">
        <div className="flex items-center">
        <img src="/assets/Icons/transfer-latest.svg" />
      <h3 className="xl:text-2xl xxl:text-4xl ml-4 font-bold text-customBlack-500">
        TRANSFER
      </h3>
      </div>
          <p className="text-base font-normal xxl:text-lg font-light text-black mt-8">
            Transfer your ETH, BYN or other synthetic asset
          </p>
          <AssetRateCard />
        </div>
        <div className="w-full lg:ml-6">
          <div className="flex justify-between py-3">
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
          <div className="mt-1 text-xs xxl:text-sm">
            <div ref={firstDiv} className="border-2 border-blackGray bg-white mt-2 px-4 py-2 flex items-center hover:shadow-custom hover:border-customBlack-550">
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
              otherClasses={"bg-customPink rounded-lg px-3 py-1 "}
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
            <div ref={secondDiv} className="border-2 border-blackGray hover:shadow-custom hover:border-customBlack-550 bg-white mt-2 px-4 py-2 flex items-center">
            <p className="font-normal whitespace-no-wrap">Enter destination address:</p>
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
          <div className="mt-4 text-blackGray text-sm xxl:text-base font-medium">
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
              otherClasses={"bg-customPink text-xs xxl:text-base w-full py-2 xxl:py-3 mt-2"}
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
