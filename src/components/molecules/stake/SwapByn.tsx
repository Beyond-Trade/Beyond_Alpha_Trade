import Loader from "react-loader-spinner";
import React from "react";
import useSwap from "../../../hooks/stake/useSwap";
import GeneralButton from "../../atomic/GeneralButton";

interface IProps {}
function SwapByn(props: IProps) {
  const {
    swapping,
    from,
    fromVal,
    to,
    balance,
    setMax,
    handleInputChange,
    submit,
  } = useSwap();

  return (
    <div className="border border-gray-400 mt-6 py-10 px-10"  style={{backgroundColor:"#EBEDF0"}}> 
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlack-500">GET BYN</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-normal xxl:text-sm font-light text-black mt-6">
            Onboard Beyond exchange by swapping your ETH into BYN.
            <br />
            Stake, trade, make profit and earn reward.
            <br />
            Everything starts from here.
          </p>
          <img src="/assets/Images/swap.png" className="h-24 m-auto mt-10" alt="img" />
        </div>
        <div className="w-full px-6">
          {/* <GeneralTab tabs={["SWAP", "POOL"]} onClick={() => {}} index={0} /> */}
          <div className="flex bg-white rounded-sm py-1 px-2 mt-6">
            <div className="w-full">
              <h6 className="text-xs xxl:text-sm text-customGray-300 font-medium">From (ETH)</h6>
              <input
                className="focus:outline-none border mt-4 border-white text-sm p-1 text-customBlack-500 border-rounded w-2/3 focus:border-customBlack-550 hover:shadow-custom hover:border-customBlack-550 mt-2 font-medium"
                type="number"
                name="from"
                min="0"
                step="0"
                value={from}
                onChange={handleInputChange}
              />
            </div>
            <div className="text-right">
              <h6 className="text-xs xxl:text-sm font-medium break-normal">
                Balance: {balance.toFixed(2)}ETH
              </h6>
              <div className="flex items-center w-16 text-right justify-end mt-2">
                <button
                  onClick={setMax}
                  className="focus:outline-none bg-customBlack-50 px-1 text-xs xxl:text-sm text-white mr-4"
                >
                  MAX
                </button>
                <img src="/assets/Icons/eth-small.svg" className="h-4"  alt="img"/>
                <h4 className="font-medium text-xs xxl:text-lg  ml-1">ETH</h4>
              </div>
            </div>
          </div>
          <small className="text-red-500 italic block">{fromVal}</small>
          <img src="/assets/Icons/Arrow_down.svg" className="mt-6 m-auto h-4" alt="img"/>
          <div className="flex bg-white rounded-sm py-1 px-2 mt-6">
            <div className="w-full">
              <h6 className="text-xs xxl:text-sm font-medium text-customGray-300">To (BYN)</h6>
              <h6 className="text-lg xxl:text-xl text-customBlack-500 font-medium">{to}</h6>
              {/* <input
                className="focus:outline-none mt-2 bg-customGray-100 font-medium"
                value={to}
              /> */}
            </div>
            <div className="text-right">
              <h6 className="text-xxs font-medium">-</h6>
              {/* <div className="flex items-center w-24 mt-3 bg-blue-300 justify-center text-white">
                        <h4 className="text-xxs">Select a token</h4>
                        <img src="/assets/Icons/arrow-dropdown.svg" className="w-2 ml-1" />
                    </div> */}
            </div>
          </div>
          <GeneralButton
              submitting={swapping}
              submit={submit}
              textValue={"SWAP"}
              otherClasses={"bg-customBlack-500 text-xs xxl:text-sm py-2 mt-8  w-full"}
            />
          {/* <button
            onClick={submit}
            className="focus:outline-none bg-customBlue-200 text-white text-xs xxl:text-sm flex justify-center w-full rounded py-2 mt-8"
          >
            {!swapping && "SWAP"}
            {swapping && (
              <Loader type="Bars" color="#ffffff" height={18} width={20} />
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SwapByn;
