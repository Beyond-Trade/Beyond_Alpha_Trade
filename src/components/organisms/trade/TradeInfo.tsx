import * as React from "react";
import useOrdersHistory from "../../../hooks/trade/useOrdersHistory";
import GenericTab from "../../atomic/GenericTab";
import MarketTable from "../../molecules/market/marketTable";
import AllTradesTable from "../../molecules/trade/AllTradesTable";
import MyOrdersTable from "../../molecules/trade/MyOrdersTable";

function TradeInfo() {
  const {
    tabIndex,
    setTab,
    myOrders,
    trades,
    myTrades,
    loadingTrades,
    getTradeData,
  } = useOrdersHistory();
  
  return (
    <div className="w-full mt-4 mr-4 bg-customGray-100 rounded overflow-auto">
      <div className="w-94">
        <GenericTab
          index={tabIndex}
          onSelect={setTab}
          tabs={["YOUR ORDERS", "YOUR TRADES", "ALL TRADES"]}
        />
      </div>
      {tabIndex === 0 && <MyOrdersTable data={myOrders} />}
      {tabIndex === 1 && <AllTradesTable data={myTrades} />}
      {tabIndex === 2 && <AllTradesTable data={trades} />}
    </div>
  );
}

export default TradeInfo;
