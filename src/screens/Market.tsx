import React, { useEffect, useState } from "react";

import { ERC20Contracts } from "../contracts/constants/contracts";
import GenericTab from "../components/atomic/GenericTab";
import MarketCard from "../components/atomic/market/MarketCard";
import MarketTable from "../components/molecules/market/marketTable";
import MarketTop from "../components/molecules/market/MarketTop";
import { RootState } from "../store/reducers/Index";
import SearchTop from "../components/atomic/market/SearchTop";
import useMarketData from "../hooks/Market/useMarketData";
import { useSelector } from "react-redux";

function Market() {
  const {
    marketIndex,
    topIndex,
    topTabs,
    marketTopData,
    balances,
    marketTabs,
    handleSearch,
    search,
    handleSort,
    activeData,
    setTopIndex,
    setIndex,
  } = useMarketData();

  let GBPRate = balances.filter(function (obj: any) {
    return obj.short == ERC20Contracts.GBPb;
  })[0];
  let OILRate = balances.filter(function (obj: any) {
    return obj.short == ERC20Contracts.OILb;
  })[0];
  let ETHbRate = balances.filter(function (obj: any) {
    return obj.short == ERC20Contracts.ETHb;
  })[0];
  let BTCRate = balances.filter(function (obj: any) {
    return obj.short == ERC20Contracts.BTCb;
  })[0];

  console.log("=========", topTabs[topIndex]);
  useEffect(() => {});
  return (
    <div className="px-8 xl:px-24 lg:px-24 md:px-24">
      <div className="mt-12 xl:flex lg:flex">
        <MarketCard
          coin="POUND"
          price={GBPRate ? Number(GBPRate.rate).toFixed(4) : "00.00"}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={GBPRate ? Number(GBPRate.change24h).toFixed(4) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="GOLD OUNCE"
          price={OILRate ? Number(OILRate.rate).toFixed(4) : "00.00"}
          pair="GOLD/ USDb"
          image="assets/Icons/gold.svg"
          change={OILRate ? Number(OILRate.change24h).toFixed(4) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="ETHEREUM"
          price={ETHbRate ? Number(ETHbRate.rate).toFixed(4) : "00.00"}
          pair="ETHEREUM/ USDb"
          image="assets/Icons/Ethereum.svg"
          change={ETHbRate ? Number(ETHbRate.change24h).toFixed(4) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="BITCOIN"
          price={BTCRate ? Number(BTCRate.rate).toFixed(4) : "00.00"}
          pair="BTC/ USDb"
          image="assets/Icons/btc.svg"
          change={BTCRate ? Number(BTCRate.change24h).toFixed(4) : "00.00"}
          marginRight=""
        />
      </div>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4 mr-4 bg-customGray-100 rounded overflow-auto">
          <GenericTab
            index={marketIndex}
            onSelect={setIndex}
            tabs={marketTabs}
          />
          <MarketTable
            data={activeData}
            handleSort={handleSort}
            search={search}
          />
        </div>
        <div className="xl:w-chartH lg:w-chartH">
          <SearchTop handleSearch={handleSearch} search={search} />
          <GenericTab index={topIndex} onSelect={setTopIndex} tabs={topTabs} />
          <MarketTop data={marketTopData} />
        </div>
      </div>
    </div>
  );
}

export default Market;
