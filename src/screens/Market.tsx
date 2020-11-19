import React from "react";
import GenericTab from "../components/atomic/GenericTab";
import MarketCard from "../components/atomic/market/MarketCard";
import SearchTop from "../components/atomic/market/SearchTop";
import MarketTable from "../components/molecules/market/marketTable";
import MarketTop from "../components/molecules/market/MarketTop";
import useMarketData from "../hooks/Market/useMarketData";

function Market() {
  const { marketIndex, topIndex, setTopIndex, setIndex } = useMarketData();

  return (
    <div className="px-8 xl:px-24 lg:px-24 md:px-24">
      <div className="mt-12 xl:flex lg:flex">
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
          marginRight="mr-4"
        />
        <MarketCard
          coin="GOLD OUNCE"
          price={5600.0}
          pair="GOLD/ USDb"
          image="assets/Icons/gold.svg"
          change={2.22}
          marginRight="mr-4"
        />
        <MarketCard
          coin="ETHEREUM"
          price={5600.0}
          pair="ETHEREUM/ USDb"
          image="assets/Icons/Ethereum.svg"
          change={2.22}
          marginRight="mr-4"
        />
        <MarketCard
          coin="BITCOIN"
          price={5600.0}
          pair="BTC/ USDb"
          image="assets/Icons/btc.svg"
          change={2.22}
          marginRight=""
        />
      </div>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4 mr-4 bg-customGray-100 rounded overflow-auto">
          <GenericTab
            index={marketIndex}
            onSelect={setIndex}
            tabs={["ALL", "EQUITIES", "COMMODITIES", "FOREX", "CRYPTO"]}
          />
          <MarketTable />
        </div>
        <div className="xl:w-chartH lg:w-chartH">
          <SearchTop />
          <GenericTab
            index={topIndex}
            onSelect={setTopIndex}
            tabs={["TOP GAINERS", "NEWEST"]}
          />
          <MarketTop />
        </div>
      </div>
    </div>
  );
}

export default Market;
