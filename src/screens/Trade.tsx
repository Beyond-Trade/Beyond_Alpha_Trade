import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import Chart from "../components/molecules/trade/Chart";
import MakeOrders from "../components/molecules/trade/MakeOrders";
import MarketData from "../components/molecules/trade/MarketData";
import PairSelection from "../components/molecules/trade/PairSelection";
import TradeInfo from "../components/organisms/trade/TradeInfo";
import { getRates } from "../services/synthetix.service";
import { RootState } from "../store/reducers/Index";

function Trade() {
  const { selectedPair } = useSelector((state: RootState) => state.exchange);
  console.log(selectedPair, "==========SELECTED PAIR=========");
  // useEffect(()=>{
  //   getRates();
  // },[])
  return (
    <div className="px-8 xl:px-20 lg:px-20 md:px-12">
      <div className="xl:flex lg:flex mt-8">
        <PairSelection />
        <div className="w-full xl:ml-4 lg:ml-4">
          <h3 className="font-bold text-2xl ml-4">
            {selectedPair.counter + " / " + selectedPair.base}
          </h3>
          <MarketData selectedPair={selectedPair} />
          <div className="xl:flex lg:flex md:flex">
            <Chart selectedPair={selectedPair} />
            <MakeOrders />
          </div>
        </div>
      </div>
      <TradeInfo />
    </div>
  );
}

export default Trade;
