import React from "react";
import GenericTab from "../components/atomic/GenericTab";
import MarketCard from "../components/atomic/market/MarketCard";
import useMarketData from "../hooks/Market/useMarketData";

function Market() {
  const { marketIndex, setIndex } = useMarketData();

  return (
    <div className="px-24">
      <div className="mt-12 flex">
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
        />
        <MarketCard
          coin="GOLD OUNCE"
          price={5600.0}
          pair="GOLD/ USDb"
          image="assets/Icons/gold.svg"
          change={2.22}
        />
        <MarketCard
          coin="ETHEREUM"
          price={5600.0}
          pair="ETHEREUM/ USDb"
          image="assets/Icons/Ethereum.svg"
          change={2.22}
        />
        <MarketCard
          coin="BITCOIN"
          price={5600.0}
          pair="BTC/ USDb"
          image="assets/Icons/btc.svg"
          change={2.22}
        />
      </div>
      <div className="flex">
        <div className="">
          <GenericTab
            index={marketIndex}
            onSelect={setIndex}
            tabs={["ALL", "EQUITIES", "COMMODITIES", "FOREX", "CRYPTO"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Market;
