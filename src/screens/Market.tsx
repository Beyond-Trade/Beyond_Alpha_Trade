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
import { getPairPrice } from "../services/generic.services";
import { selectAssetPairAction } from "../store/actions/ExchangeActions";
import { useHistory } from "react-router-dom";
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
  const myOrderData: any = activeData.filter(
    (item: any) => item.short != "Beyond"
  );
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const history = useHistory();
  const navigate=(counter:any)=>{
      const marketBalance = balances.find((b)=>b.short === "USDb")
      const counterBalance = balances.find((b)=>b.short === counter)
      let rate = Number(getPairPrice(marketBalance?.rate||0, counterBalance?.rate||0))
      selectAssetPairAction("USDb", counter, rate);
      history.push("/trade")
  }
  return (
    <div className="px-8 xl:px-24 lg:px-24 md:px-24">
      <div className="mt-12 xl:flex lg:flex">
        <MarketCard
          coin="BITCOIN"
          click={() => navigate("BTCb")}
          price={BTCRate ? Number(BTCRate.rate).toFixed(2) : "00.00"}
          pair="BTCb / USDb"
          image="/assets/Icons/btc.svg"
          change={BTCRate ? Number(BTCRate.change24h).toFixed(2) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="ETHEREUM"
          click={() => navigate("ETHb")}
          price={ETHbRate ? Number(ETHbRate.rate).toFixed(2) : "00.00"}
          pair="ETHEREUM/ USDb"
          image="/assets/Icons/Ethereum.svg"
          change={ETHbRate ? Number(ETHbRate.change24h).toFixed(2) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="POUND"
          click={() => navigate("GBPb")}
          price={GBPRate ? Number(GBPRate.rate).toFixed(2) : "00.00"}
          pair="GBPb / USDb"
          image="/assets/Icons/pound.svg"
          change={GBPRate ? Number(GBPRate.change24h).toFixed(2) : "00.00"}
          marginRight="mr-4"
        />
        <MarketCard
          coin="OIL"
          click={() => navigate("OILb")}
          price={OILRate ? Number(OILRate.rate).toFixed(2) : "00.00"}
          pair="OILb / USDb"
          image="/assets/coins/oil.svg"
          change={OILRate ? Number(OILRate.change24h).toFixed(2) : "00.00"}
          marginRight=""
        />
      </div>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4 mr-4 rounded overflow-auto border border-gray-400 px-2">
          <GenericTab
            index={marketIndex}
            onSelect={setIndex}
            tabs={marketTabs}
          />
          <MarketTable
            data={myOrderData}
            handleSort={handleSort}
            search={search}
          />
        </div>
        <div className="xl:w-chartH lg:w-chartH ">
          <SearchTop handleSearch={handleSearch} search={search} />
          <div className="border rounded border-gray-400 px-2">
          <GenericTab index={topIndex} onSelect={setTopIndex} tabs={topTabs} />
          <MarketTop data={marketTopData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
