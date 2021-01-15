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
    selectedPair
  } = useOrdersHistory(); 
  const myTradesData:any = myOrders.filter((item) => item.status === "Success" )
  
  const myTradesFilteredData:any=myTradesData.filter((item:any)=>item.pair.toLowerCase().includes(selectedPair.counter.toLowerCase()));
  const myOrderFilteredData:any =myTradesData.filter((item:any)=>item.pair.toLowerCase().includes(selectedPair.counter.toLowerCase()));
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
      {tabIndex === 1 && <AllTradesTable data={myTradesFilteredData} />}
      {tabIndex === 2 && <AllTradesTable data={myOrderFilteredData} />}
    </div>
  );
}

export default TradeInfo;
