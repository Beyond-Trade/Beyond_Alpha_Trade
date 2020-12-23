import MidSectionTab from "../stake/MidSectionTab";
import React from "react";
interface IProps {
  tab: Number;
  setTab: Function;
}
function WalletBanner(props: IProps) {
  return (
    <div className="bg-customGray-100 relative">
      <div className="w-full"></div>
      <img
        src="/assets/Images/header3.png"
        alt="img"
        style={{height: '25vw',width:"100%"}}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            WALLET / {props.tab === 0 ? "OVERVIEW" : "HISTORY"}
          </h1>
          <p className="text-sm mt-2 text-white">
            {props.tab === 0
              ? "Your current wallet overview & stats"
              : "Your Current Wallet Exchange History."}
          </p>
          <div className="flex justify-center mt-4">
            <MidSectionTab
            notActiveString="text-gray-500"
            activeString="text-white"
            activeBorder="border-wihte"
              text="Overview"
              onClick={() => props.setTab(0)}
              active={props.tab === 0}
            />
            <MidSectionTab
            notActiveString="text-gray-500"
            activeString="text-white"
            activeBorder="border-wihte"
              text="History"
              onClick={() => props.setTab(1)}
              active={props.tab === 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletBanner;
