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
  const myTradesData:any = myOrders.filter((item) => item.status === "Success" )
  return (
    <div className="w-full mt-4 mr-4 rounded overflow-auto border px-2">
      <div className="w-94">
        <GenericTab
          index={tabIndex}
          onSelect={setTab}
          tabs={["YOUR ORDERS", "YOUR TRADES", "ALL TRADES"]}
        />
      </div>
      {tabIndex === 0 && <MyOrdersTable data={myOrders} />}
      {tabIndex === 1 && <AllTradesTable data={myTradesData} />}
      {tabIndex === 2 && <AllTradesTable data={myOrders} />}
    </div>
  );
}

export default TradeInfo;
