import React from "react";
import useTradeChart from "../../../hooks/trade/useTradeChart";
import GeneralButton from "../GeneralButton";

function Periodlabels({PERIOD_LABELS_MAP,setSelectedPeriod,active}:any) {
  return (
    <div className="flex flex-row float-right mr-8">
      {PERIOD_LABELS_MAP.map((period:any) => (
        <GeneralButton
        submitting={false}
        submit={() => setSelectedPeriod(period.valueHours)}
        textValue={period.value}
        otherClasses={`ml-3 p-1  text-xs xxl:text-base ${active === period.valueHours?"bg-customBlack-500":"bg-customBlack-50"}`}
        />
        // <button
        //   key={period.value}
        //   // style={{backgroundColor:`${active === period.valueHours?"#0D2075":"#9CA9FF"}`}}
        //   className={`ml-3 focus:outline-none hover:bg-customBlue-400 text-white text-xs xxl:text-base rounded p-1 ${active === period.valueHours?"bg-customBlue-400":"bg-customBlue-50"}`}
        //  onClick={() => setSelectedPeriod(period.valueHours)}
        // >
        //   {period.value}
        // </button>
      ))}
    </div>
  );
}
export default Periodlabels;
