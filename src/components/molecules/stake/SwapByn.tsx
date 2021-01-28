import Loader from "react-loader-spinner";
import React from "react";
import useSwap from "../../../hooks/stake/useSwap";
import GeneralButton from "../../atomic/GeneralButton";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
import AssetRateCard from "../../atomic/stake/AssetRateCard";
import StakedNotStaked from "../../atomic/stake/StakedNotStaked";
import DailyRewards from "../../atomic/stake/DailyRewards";

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
    <div className="mt-6 py-10">
      <div className="lg:flex">
        <div className="w-full lg:mr-6">
        <div className="flex items-center">
        <img src="/assets/Icons/getByn.svg" />
      <h3 className="xl:text-2xl xxl:text-4xl ml-4 font-bold text-customBlack-500">
        Get BYN
      </h3>
      </div>
          <p className="text-base font-normal xxl:text-lg font-light text-black mt-8">
            Onboard Beyond exchange by swapping your ETH into BYN. Stake, trade,
            make profit and earn reward. Everything starts from here.
          </p>
          <AssetRateCard />
          
        </div>
        <div className="w-full lg:ml-6">
          {/* <GeneralTab tabs={["SWAP", "POOL"]} onClick={() => {}} index={0} /> */}

          <h6 className="text-sm xxl:text-base text-center font-medium">
            <text className="font-normal mr-1">Balance:</text>{toFixedNoRounding(balance, 5)}ETH
          </h6>
          
          <div className="flex items-center bg-white border-2 rounded-sm py-2 px-2 mt-6 hover:shadow-custom border-blackGray">
            <h6 className="text-xs xxl:text-sm text-darkGray font-normal">
              From(ETH)
            </h6>
            <input
              className="focus:outline-none border border-white text-base w-full p-1 text-customBlack-500 border-rounded w-2/3 font-medium"
              type="number"
              name="from"
              min="0"
              step="0"
              value={from}
              onChange={handleInputChange}
            />
            <button
              onClick={setMax}
              className="focus:outline-none bg-customPink rounded-lg px-2 py-2 text-xs xxl:text-sm text-black mr-4"
            >
              MAX
            </button>
            {/* <div className="text-right">
              
              <div className="flex items-center w-16 text-right justify-end mt-2">
                
                <img src="/assets/Icons/eth-small.svg" className="h-4"  alt="img"/>
                <h4 className="font-medium text-xs xxl:text-lg  ml-1">ETH</h4>
              </div>
            </div> */}
          </div>
          <small className="text-red-500 italic block">{fromVal}</small>
          <img
            src="/assets/Icons/Arrow_down.svg"
            className="mt-4 m-auto h-4"
            alt="img"
          />
          <div className="flex items-center bg-white border-2 border-blackGray py-4 px-2 mt-4">
              <h6 className="text-xs xxl:text-sm font-normal text-darkGray">
                To (BYN)
              </h6>
              <h6 className="text-base xxl:text-lg ml-2 text-customBlack-500 font-medium">
                {to}
              </h6>
            
          </div>
          <GeneralButton
            submitting={swapping}
            submit={submit}
            textValue={"Get BYN"}
            otherClasses={
              "bg-customPink text-sm xxl:text-base py-2 mt-8 w-full"
            }
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
