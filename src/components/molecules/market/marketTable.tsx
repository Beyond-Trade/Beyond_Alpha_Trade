import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPairPrice } from "../../../services/generic.services";
import { selectAssetPairAction } from "../../../store/actions/ExchangeActions";
import { RootState } from "../../../store/reducers/Index";
import GeneralButton from "../../atomic/GeneralButton";

import MarketSort from "../../atomic/market/MarketSort";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

interface IProps {
  data: any;
  handleSort: Function;
  search: any;
}
function MarketTable({ data, handleSort, search }: IProps) {
  const history = useHistory();
  const {wallet:{balances} } = useSelector((state: RootState)=>state)
  let rowType = 1
  const navigate=(counter:any)=>{
    if(counter != "ETH" && counter != "USDb"){
      const marketBalance = balances.find((b)=>b.short === "USDb")
      const counterBalance = balances.find((b)=>b.short === counter)
      let rate = Number(getPairPrice(marketBalance?.rate||0, counterBalance?.rate||0))
      selectAssetPairAction("USDb", counter, rate);
      history.push("/trade")
    }
    else{
      history.push("/trade")
    }
  }
  return (
    <div className="bg-mediumGray p-4 overflow-auto">
    <table width="100%">
      <tr className="bg-white text-sm xxl:text-base text-left text-mediumGray font-semibold">
        <td className="py-3 px-3">
          <div className="flex items-center">
            Asset
            {/* <MarketSort handleSort={handleSort} sortOn={"short"} /> */}
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            Last Price
            <MarketSort handleSort={handleSort} sortOn={"rate"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24h Change
            <MarketSort handleSort={handleSort} sortOn={"change24h"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            High
            <MarketSort handleSort={handleSort} sortOn={"high24h"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            Low
            <MarketSort handleSort={handleSort} sortOn={"low24h"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
          24h Volume
            {/* <MarketSort handleSort={handleSort} sortOn={"short"} /> */}
          </div>
        </td>
        {/* <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR TREND
            <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td> */}
        <td className="py-2 px-3">
          <div className="flex items-center content-center">Trade Now</div>
        </td>
      </tr>
      {data
        .filter((data: any) =>
          data.short.toLowerCase().includes(search.toLowerCase())
        )
        .map((item: any) => {
          rowType=rowType*-1
          return <tr className={`text-xs xxl:text-sm text-left ${rowType>0?'bg-mediumLightGray':''} text-gray-300 font-semibold`}>
            <td className="py-4 px-3">
              <div className="flex items-center">
                <text className="text-customPink">{item.short}</text>
                <text className="ml-2 font-normal">{item.name}</text>
              </div>
            </td>
            <td className="py-3 px-3">${toFixedNoRounding(item.rate,5)}</td>
            <td className="py-3 px-3">
              <button
                className={`rounded-sm px-1 ${
                  item.change24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                } `}
              >
                {item.change24h.toFixed(2)}%
              </button>
            </td>
            <td className="py-3 px-3">${toFixedNoRounding(item.high24h,5)}</td>
            <td className="py-3 px-3">${toFixedNoRounding(item.low24h,5)}</td>
            <td className="py-3 px-3">${toFixedNoRounding(item.volume24h,5)}</td>
            {/* <td className="py-3 px-3">
            <img src="/assets/Images/Up.png" className="h-8" />
          </td> */}
            <td className="py-3 px-3">
              {item.short === "ETH" || item.short === "USDb" ? null: <GeneralButton
              submitting={false}
              submit={() => navigate(item.short)}
              textValue={"TRADE"}
              otherClasses={"bg-customPink px-2 py-1 text-white xl:text-xs xxl:text-sm"}
            />}
            
              {/* <button
                onClick={() => history.push("/trade")}
                className="focus:outline-none flex content-center bg-customBlue-200 hover:bg-blue-500 px-2 py-1 text-white xl:text-xs xxl:text-sm rounded-sm"
              >
                TRADE
              </button> */}
            </td>
          </tr>
        })}
    </table>
    </div>
  );
}

export default MarketTable;
