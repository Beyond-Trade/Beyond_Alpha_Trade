import React from "react";
import { useSelector } from "react-redux";
import GenericTab from "../components/atomic/GenericTab";
import MarketCard from "../components/atomic/market/MarketCard";
import SearchTop from "../components/atomic/market/SearchTop";
import MarketTable from "../components/molecules/market/marketTable";
import MarketTop from "../components/molecules/market/MarketTop";
import { ERC20Contracts } from "../contracts/constants/contracts";
import useMarketData from "../hooks/Market/useMarketData";
import { RootState } from "../store/reducers/Index";

function Market() {
  const { marketIndex, topIndex, setTopIndex, setIndex } = useMarketData();
  const { balances } = useSelector((state: RootState) => state.wallet);

  let GBPRate = balances.filter(function (obj) {return obj.short == ERC20Contracts.GBP;})[0];
  let OILRate = balances.filter(function (obj) {return obj.short == ERC20Contracts.OIL;})[0];
  let ETHbRate = balances.filter(function (obj) {return obj.short == ERC20Contracts.ETHb;})[0];
  let BTCRate = balances.filter(function (obj) {return obj.short == ERC20Contracts.BTC;})[0];

  return (
    <div className="px-24">
      <div className="mt-12 flex">
        <MarketCard
          coin="POUND"
          price={GBPRate?Number(GBPRate.rate).toFixed(4):"00.00"}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={GBPRate?Number(GBPRate.change24h).toFixed(4):"00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="GOLD OUNCE"
          price={OILRate?Number(OILRate.rate).toFixed(4):"00.00"}
          pair="GOLD/ USDb"
          image="assets/Icons/gold.svg"
          change={OILRate?Number(OILRate.change24h).toFixed(4):"00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="ETHEREUM"
          price={ETHbRate?Number(ETHbRate.rate).toFixed(4):"00.00"}
          pair="ETHEREUM/ USDb"
          image="assets/Icons/Ethereum.svg"
          change={ETHbRate?Number(ETHbRate.change24h).toFixed(4):"00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="BITCOIN"
          price={BTCRate?Number(BTCRate.rate).toFixed(4):"00.00"}
          pair="BTC/ USDb"
          image="assets/Icons/btc.svg"
          change={BTCRate?Number(BTCRate.change24h).toFixed(4):"00.00"}
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
