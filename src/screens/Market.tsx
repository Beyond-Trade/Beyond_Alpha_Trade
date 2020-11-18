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
    <div className="px-24">
      <div className="mt-12 flex">
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
      <div className="flex">
        <div className="w-full mt-4 mr-4 bg-customGray-100 rounded">
          <GenericTab
            index={marketIndex}
            onSelect={setIndex}
            tabs={["ALL", "EQUITIES", "COMMODITIES", "FOREX", "CRYPTO"]}
          />
          <MarketTable />
        </div>
        <div className="mt-4" style={{ width: "340px" }}>
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
