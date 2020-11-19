import React from "react";
import Chart from "../components/molecules/trade/Chart";
import MakeOrders from "../components/molecules/trade/MakeOrders";
import MarketData from "../components/molecules/trade/MarketData";
import PairSelection from "../components/molecules/trade/PairSelection";
import TradeInfo from "../components/organisms/trade/TradeInfo";

function Trade() {
  return (
    <div className="px-8 xl:px-20 lg:px-20 md:px-12">
      <div className="xl:flex lg:flex mt-8">
        <PairSelection />
        <div className="w-full xl:ml-4 lg:ml-4">
          <h3 className="font-bold text-2xl ml-4">BTC/USDb</h3>
          <MarketData />
          <div className="xl:flex lg:flex md:flex">
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
