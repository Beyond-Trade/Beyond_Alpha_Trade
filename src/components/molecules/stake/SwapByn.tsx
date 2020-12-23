import Loader from "react-loader-spinner";
import React from "react";
import useSwap from "../../../hooks/stake/useSwap";

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
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlue-500">SWAP</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full">
          <p className="text-xs font-normal xxl:text-sm font-light text-blue-1000 mt-6">
            Onboard Beyond exchange by swapping your ETH
            <br />
            into BYN.
            <br />
            Stake, trade, make profit and earn reward.
            <br />
            Everything starts from here.
          </p>
          <img src="/assets/Icons/swap.svg" className="h-24 m-auto mt-10" />
        </div>
        <div className="w-full px-6">
          {/* <GeneralTab tabs={["SWAP", "POOL"]} onClick={() => {}} index={0} /> */}
          <div className="flex border border-blue-600 rounded-sm py-1 px-2 mt-6">
            <div className="w-full">
              <h6 className="text-xs xxl:text-sm font-medium">From (ETH)</h6>
              <input
                className="focus:outline-none mt-2 bg-customGray-100 font-medium"
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
                Balance: {balance.toFixed(5)}ETH
              </h6>
              <div className="flex items-center w-16 text-right justify-end mt-2">
                <button
                  onClick={setMax}
                  className="focus:outline-none bg-customBlue-100 px-1 text-xs xxl:text-sm text-white mr-4"
                >
                  MAX
                </button>
                <img src="/assets/Icons/eth-small.svg" className="h-4" />
                <h4 className="font-medium text-xs xxl:text-lg  ml-1">ETH</h4>
              </div>
            </div>
          </div>
          <small className="text-red-500 italic block">{fromVal}</small>
          <img src="/assets/Icons/arrow_down.svg" className="mt-6 m-auto h-4" />
          <div className="flex border border-blue-600 rounded-sm py-1 px-2 mt-6">
            <div className="w-full">
              <h6 className="text-xs xxl:text-sm font-medium">To (BYN)</h6>
              <input
                className="focus:outline-none mt-2 bg-customGray-100 font-medium"
                value={to}
              />
            </div>
            <div className="text-right">
              <h6 className="text-xxs font-medium">-</h6>
              {/* <div className="flex items-center w-24 mt-3 bg-blue-300 justify-center text-white">
                        <h4 className="text-xxs">Select a token</h4>
                        <img src="/assets/Icons/arrow-dropdown.svg" className="w-2 ml-1" />
                    </div> */}
            </div>
          </div>
          <button
            onClick={submit}
            className="focus:outline-none bg-customBlue-200 text-white text-xs xxl:text-sm flex justify-center w-full rounded py-2 mt-8"
          >
            {!swapping && "SWAP"}
            {swapping && (
              <Loader type="Bars" color="#ffffff" height={18} width={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwapByn;
