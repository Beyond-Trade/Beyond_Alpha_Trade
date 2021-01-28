import * as React from "react";

import GasFeeModal from "../stake/GasFeeModal";
import Loader from "react-loader-spinner";
import useMakeOrders from "../../../hooks/trade/useMakeOrders";
import GeneralButton from "../../atomic/GeneralButton";
import ConvertFromE from "../../_common/ConvertFromE";

function MakeOrders() {
  const {
    submitting,
    isFeeOpen,
    fee,
    inputs,
    openFeeModal,
    closeFeeModal,
    submit,
    selectFee,
    toggleBuySell,
    to,
    from,
    fromBalance,
    toBalance,
    handleFromChange,
    handleToChange,
    setPercentage,
    usdValue,
    toImage,
    fromImage,
  } = useMakeOrders();
  let firstInput: any = React.useRef(null);
  let firstDiv: any = React.useRef(null);
  let secondInput: any = React.useRef(null);
  let secondDiv: any = React.useRef(null);
  // React.useEffect(() => {
  //   window.onclick = function (event: any) {
  //     if (firstInput.current === document.activeElement) {
  //       firstDiv.current.classList.add("border-customBlack-550");
  //     } else {
  //       firstDiv?.current?.classList?.remove("border-customBlack-550");
  //     }
  //     if (secondInput.current === document.activeElement) {
  //       secondDiv?.current?.classList?.add("border-customBlack-550");
  //     } else {
  //       secondDiv?.current?.classList?.remove("border-customBlack-550");
  //     }
  //   };
  // }, []);
  return (
    <div className="border-2 border-gray-400 rounded xl:ml-4 lg:ml-4 mt-4 w-full lg:w-94 xxl:w-1/2 px-2">
      <div className="bg-gray-400 lg:mx-5 py-1 mt-2 xxl:py-2 flex px-2 justify-between items-center">
        <h5 className="text-xs xxl:text-base font-semibold text-blackGray">
          BUY/SELL
        </h5>
        <GeneralButton
          submitting={false}
          submit={toggleBuySell}
          textValue={"Reverse"}
          otherClasses="px-3 py-2 text-xxs xxl:text-sm bg-customPink"
        >
          <img src="/assets/Icons/reverse.svg" className="ml-1 h-2" />
        </GeneralButton>
        {/* <button
          onClick={toggleBuySell}
          className="focus:outline-none bg-customBlue-400 hover:bg-customBlue-550 px-3 rounded xxl:px-4 py-2 flex items-center text-xxs xxl:text-sm text-white"
        >
          Reverse
          <img src="/assets/Icons/reverse.svg" className="ml-1 h-2" />
        </button> */}
      </div>
      <div className="xxl:px-5 pb-3">
        <div className="flex justify-between font-normal text-xs xxl:text-sm mt-4">
          <text className="text-black font-bold">Sell</text>
          <text className="text-gray-600">
            Balance: {Number(fromBalance).toFixed(2)}
          </text>
        </div>
        <div
          // ref={firstDiv} hover:border-customBlack-550
          className="border mt-2 bg-gray-400 py-2 hover:shadow font-semibold text-xs xxl:text-base text-blackGray px-2 xxl:py-3 flex items-center"
        >
          <img
            src={fromImage}
            alt="img"
            className="ml-1 w-4 xxl:w-6 mr-1 xxl:mr-2"
          />
          {from}
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className="focus:outline-none ml-2 w-full bg-gray-400 appearance-none"
            type="number"
            name="from"
            value={ConvertFromE(inputs.from)}
            min="0"
            step="0"
            ref={firstInput}
            onChange={handleFromChange}
          />
        </div>
        <small className="italic text-red-500 text-xxs">{inputs.fromVal}</small>
        <div className="flex justify-between font-normal text-xs xxl:text-sm mt-4">
          <text className="text-black font-bold">Buy</text>
          <text className="text-gray-600">Balance: {Number(toBalance).toFixed(2)}</text>
        </div>
        <div
         // ref={secondDiv} hover:border-customBlack-550
          className="mt-2 bg-gray-400 py-2 hover:shadow font-medium text-xs xxl:text-base text-blackGray px-2 xxl:py-3 flex items-center"
        >
          <img
            src={toImage}
            alt="img"
            className="ml-1 w-4 xxl:w-6  xl:mr-1 xxl:mr-2"
          />
          {to}
          <div className="h-4 mx-2 border-r border-gray-600 py-2" />
          <input
            className=" focus:outline-none bg-gray-400 ml-2 w-full appearance-none"
            type="number"
            name="to"
            min="0"
            step="0"
            ref={secondInput}
            value={ConvertFromE(inputs.to)}
            onChange={handleToChange}
          />
        </div>
        <small className="italic text-red-500 text-xxs xxl:text-sm">
          {inputs.toVal}
        </small>
        <div className="flex mt-3 text-xxs xxl:text-sm">
        <GeneralButton
            submitting={false}
            submit={() => setPercentage(10)}
            textValue={"10%"}
            otherClasses={"py-1 xxl:py-2 px-2 mr-2 w-full bg-gray-400"}
          />
          <GeneralButton
            submitting={false}
            submit={() => setPercentage(25)}
            textValue={"25%"}
            otherClasses={"py-1 xxl:py-2 px-2 mr-2 w-full bg-gray-400"}
          />
          <GeneralButton
            submitting={false}
            submit={() => setPercentage(50)}
            textValue={"50%"}
            otherClasses={"py-1 xxl:py-2 px-2 mr-2 w-full bg-gray-400"}
          />
          <GeneralButton
            submitting={false}
            submit={() => setPercentage(75)}
            textValue={"75%"}
            otherClasses={"py-1 xxl:py-2 px-2 mr-2 w-full bg-gray-400"}
          />
          <GeneralButton
            submitting={false}
            submit={() => setPercentage(100)}
            textValue={"100%"}
            otherClasses={"py-1 xxl:py-2 px-2 w-full bg-gray-400"}
          />
        </div>
        <div className="flex justify-between font-normal text-sm xxl:text-base text-blackGray mt-4">
          <text>USDb Value</text>
          <text>${usdValue.toFixed(2)}</text>
        </div>
        <div className="flex justify-between text-sm xxl:text-base font-normal text-blackGray mt-4">
          <text>FEE <p className="tooltip">
                  ?
                  <span className="tooltiptext">
                  0.3% trade fee charged on amount of trade made.
                  </span>
                </p></text>
          <text>${(((usdValue /100)*0.3) + ((21000 * fee) / 1e9)).toFixed(8)}</text>
        </div>
        <div className="flex justify-between text-sm xxl:text-base font-normal text-blackGray mt-4">
          <text>GAS PRICE(GWE)</text>
          <div>
            <text>${fee}</text>
            <text
              onClick={openFeeModal}
              className="text-customBlack-200 ml-1 underline cursor-pointer	"
            >
              Edit
            </text>
          </div>
        </div>
        <GeneralButton
          submitting={submitting}
          submit={submit}
          textValue={"CONFIRM TRADE NOW"}
          otherClasses={
            "py-2 w-full bg-customPink mt-4 text-xs xxl:text-base"
          }
        />
        {/* <button
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
          onClick={submit}
          className={`${hovered ? 'buttonShadow':'' } focus:outline-none bg-customBlue-400 hover:bg-customBlue-550 flex justify-center text-white text-xs xxl:text-base w-full rounded py-2 mt-4`}
        >
          {!submitting && "CONFIRM TRADE NOW"}
          {submitting && (
            <Loader type="Bars" color="#ffffff" height={18} width={20} />
          )}
        </button> */}
      </div>
      <GasFeeModal
        isOpen={isFeeOpen}
        close={closeFeeModal}
        activeFee={fee}
        select={selectFee}
      />
    </div>
  );
}

export default MakeOrders;
