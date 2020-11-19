import React from "react";
import Chart from "../components/molecules/trade/Chart";
import MakeOrders from "../components/molecules/trade/MakeOrders";
import MarketData from "../components/molecules/trade/MarketData";
import PairSelection from "../components/molecules/trade/PairSelection";
import TradeInfo from "../components/organisms/trade/TradeInfo";

function Trade() {
  return (
    <div className="px-20">
      <div className="flex mt-8">
        <PairSelection />
        <div className="w-full ml-4">
          <h3 className="font-bold text-2xl ml-4">BTC/USDb</h3>
          <MarketData />
          <div className="flex">
            <Chart />
            <MakeOrders />
          </div>
        </div>
      </div>
      <TradeInfo />
    </div>
  );
}

export default Trade;
