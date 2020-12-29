import React, { useEffect } from "react";
import moment from "moment"
import { useSelector } from "react-redux";
import Chart from "../components/molecules/trade/Chart";
import MakeOrders from "../components/molecules/trade/MakeOrders";
import MarketData from "../components/molecules/trade/MarketData";
import PairSelection from "../components/molecules/trade/PairSelection";
import TradeInfo from "../components/organisms/trade/TradeInfo";
import { getRates } from "../services/synthetix.service";
import { RootState } from "../store/reducers/Index";

function Trade() {
  const { selectedPair,updatedSelectedPair } = useSelector((state: RootState) => state.exchange);
  console.log(moment().format("LT"), "==========TIME=========");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  // useEffect(()=>{
  //   getRates();
  // },[])
  return (
    <div className="px-8 xl:px-20 lg:px-20 md:px-12">
      <div className="xl:flex lg:flex mt-8 w-full">
        <PairSelection />
        <div className="xl:ml-4 lg:ml-4" style={{width:"80%"}}>
          <h3 className="font-normal text-customBlack-500 text-2xl ml-4" style={{fontFamily:""}}>
            {selectedPair.counter + " / " + selectedPair.base}
          </h3>
          {/* <MarketData selectedPair={selectedPair} updatedSelectedPair={updatedSelectedPair} /> */}
          <div className="xl:flex lg:flex md:flex">
            <div className="mt-4" style={{width:"90%"}}>
            <Chart selectedPair={selectedPair} updatedSelectedPair={updatedSelectedPair}/>
            </div>
            {/* <Chart/> */}
            <MakeOrders />
          </div>
        </div>
      </div>
      <TradeInfo />
    </div>
  );
}

export default Trade;