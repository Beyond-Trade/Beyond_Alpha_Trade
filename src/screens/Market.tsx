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
import { toFixedNoRounding } from "../components/_common/FixedNoRounding";
import MarketTab from "../components/atomic/MarketTab";
import MarketTopTab from "../components/atomic/MarketTopTab";
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
  console.log(myOrderData);
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
    <div className="px-8 xl:px-24 lg:px-10">
      <div className="mt-12 lg:flex">
        <div className="md:flex w-full">
        <MarketCard
          coin="BITCOIN"
          click={() => navigate("BTCb")}
          price={BTCRate ? toFixedNoRounding(BTCRate.rate,5) : "00.00"}
          pair="BTCb"
          image="/assets/Icons/btc-market.png"
          graph={`/assets/Icons/graph-${BTCRate?Number(BTCRate.change24h)>0?'green':'red':'red'}.png`}
          change={BTCRate ? Number(BTCRate.change24h).toFixed(2)  : "00.00"}
          marginRight="mr-4"
          volume={BTCRate?Number(BTCRate.volume24h).toFixed(2):"0.0"}
        />
        <MarketCard
          coin="ETHEREUM"
          click={() => navigate("ETHb")}
          price={ETHbRate ? toFixedNoRounding(ETHbRate.rate,5): "00.00"}
          pair="ETHEREUM"
          image="/assets/Icons/eth-market.png"
          graph={`/assets/Icons/graph-${ETHbRate?Number(ETHbRate.change24h)>0?'green':'red':'red'}.png`}
          change={ETHbRate ? Number(ETHbRate.change24h).toFixed(2) : "00.00"}
          marginRight="lg:mr-4"
          volume={ETHbRate?Number(ETHbRate.volume24h).toFixed(2):"0.0"}
        />
        </div>
        <div className="md:flex w-full">
        <MarketCard
          coin="POUND"
          click={() => navigate("GBPb")}
          price={GBPRate ? toFixedNoRounding(GBPRate.rate,5) : "00.00"}
          pair="GBPb"
          image="/assets/Icons/gbp-market.png"
          graph={`/assets/Icons/graph-${GBPRate?Number(GBPRate.change24h)>0?'green':'red':'red'}.png`}
          change={GBPRate ? Number(GBPRate.change24h).toFixed(2) : "00.00"}
          marginRight="mr-4"
          volume={GBPRate?Number(GBPRate.volume24h).toFixed(2):"0.0"}
        />
        <MarketCard
          coin="OIL"
          click={() => navigate("OILb")}
          price={OILRate ? toFixedNoRounding(OILRate.rate,5) : "00.00"}
          pair="OILb"
          image="/assets/coins/oil.svg"
          graph={`/assets/Icons/graph-${OILRate?Number(OILRate.change24h)>0?'green':'red':'red'}.png`}
          change={OILRate ? Number(OILRate.change24h).toFixed(2) : "00.00"}
          marginRight=""
          volume={OILRate?Number(OILRate.volume24h).toFixed(2):"0.0"}
        />
        </div>
      </div>
      <div className="flex-col flex lg:flex-row">
        <div className="w-full mb-4 lg:mr-4 order-2 lg:order-1">
          <MarketTab
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
        <div className="lg:w-2/5 order-1 lg:order-2">
          {/* <SearchTop handleSearch={handleSearch} search={search} /> */}
          <div className="">
          <MarketTopTab index={topIndex} onSelect={setTopIndex} tabs={topTabs} />
          <MarketTop data={marketTopData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
