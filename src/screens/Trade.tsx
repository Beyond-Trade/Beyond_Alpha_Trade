import React, { useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import Chart from "../components/molecules/trade/Chart";
import MakeOrders from "../components/molecules/trade/MakeOrders";
import MarketData from "../components/molecules/trade/MarketData";
import PairSelection from "../components/molecules/trade/PairSelection";
import TradeInfo from "../components/organisms/trade/TradeInfo";
import { getRates } from "../services/synthetix.service";
import { RootState } from "../store/reducers/Index";
import { useState } from "react";

function Trade() {
  const { selectedPair, updatedSelectedPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1023);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.matchMedia("(min-width: 1023px)").addListener((e) => {
      setIsTablet(!e.matches);
    });
  }, []);
  // useEffect(()=>{
  //   getRates();
  // },[])
  return (
    <div className="px-8 xl:px-20 lg:px-20 md:px-12">
      {isTablet && (
        <div className="mt-8">
          <Chart
            selectedPair={selectedPair}
            updatedSelectedPair={updatedSelectedPair}
          />
        </div>
      )}
      <div className="sm:flex mt-8 w-full">
        <PairSelection />
        <div className="lg:ml-4 order-1 lg:order-2 w-full" style={isTablet?{}:{ width: "80%" }}>
          <h3
            className=" text-customBlack-500 text-2xl ml-4"
            style={{ fontWeight: "bolder" }}
          >
            {selectedPair.counter + " / " + selectedPair.base}
          </h3>
          {/* <MarketData selectedPair={selectedPair} updatedSelectedPair={updatedSelectedPair} /> */}
          <div className="md:flex w-full">
            {!isTablet && (
              <div className="mt-4" style={{ width: "90%" }}>
                <Chart
                  selectedPair={selectedPair}
                  updatedSelectedPair={updatedSelectedPair}
                />
              </div>
            )}
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
