import React from "react";
import useTradeChart from "../../../hooks/trade/useTradeChart";

function Periodlabels({PERIOD_LABELS_MAP,setSelectedPeriod,active}:any) {
    console.log(active,"WWWWWWWWWWWWWWW")
  return (
    <div className="flex flex-row float-right mr-8">
      {PERIOD_LABELS_MAP.map((period:any) => (
        <button
          key={period.value}
          // style={{backgroundColor:`${active === period.valueHours?"#0D2075":"#9CA9FF"}`}}
          className={`ml-3 focus:outline-none hover:bg-customBlue-500 text-white text-xs xxl:text-base rounded p-1 ${active === period.valueHours?"bg-customBlue-500":"bg-customBlue-50"}`}
         onClick={() => setSelectedPeriod(period.valueHours)}
        >
          {period.value}
        </button>
      ))}
    </div>
  );
}
export default Periodlabels;
