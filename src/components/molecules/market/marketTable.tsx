import * as React from "react";
import { useHistory } from "react-router-dom";
import GeneralButton from "../../atomic/GeneralButton";

import MarketSort from "../../atomic/market/MarketSort";

interface IProps {
  data: any;
  handleSort: Function;
  search: any;
}
function MarketTable({ data, handleSort, search }: IProps) {
  const history = useHistory();
  return (
    <table width="100%">
      <tr className="border-b border-t border-gray-400 text-xxs xxl:text-sm text-left text-gray-600 font-bold">
        <td className="py-2 px-3">
          <div className="flex items-center">
            ASSET
            {/* <MarketSort handleSort={handleSort} sortOn={"short"} /> */}
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            LAST PRICE
            <MarketSort handleSort={handleSort} sortOn={"rate"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR CHANGE
            <MarketSort handleSort={handleSort} sortOn={"change24h"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR HIGH
            <MarketSort handleSort={handleSort} sortOn={"high24h"} />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR LOW
            <MarketSort handleSort={handleSort} sortOn={"low24h"} />
          </div>
        </td>
        {/* <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR TREND
            <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td> */}
        <td className="py-2 px-3">
          <div className="flex items-center content-center">TRADE NOW</div>
        </td>
      </tr>
      {data
        .filter((data: any) =>
          data.short.toLowerCase().includes(search.toLowerCase())
        )
        .map((item: any) => (
          <tr className="text-xs xxl:text-sm text-left text-gray-700 border-b border-gray-400 font-medium">
            <td className="py-3 px-3">
              <div className="flex items-center">
                <text className="text-black">{item.short}</text>
                <text className="text-gray-500 ml-2">{item.name}</text>
              </div>
            </td>
            <td className="py-3 px-3">${item.rate.toFixed(2)}</td>
            <td className="py-3 px-3">
              <button
                className={`rounded-sm px-1 ${
                  item.change24h >= 0
                    ? "bg-green-200 text-green-400"
                    : "bg-red-200 text-red-400"
                } `}
              >
                {item.change24h.toFixed(2)}%
              </button>
            </td>
            <td className="py-3 px-3">${item.high24h.toFixed(2)}</td>
            <td className="py-3 px-3">${item.low24h.toFixed(2)}</td>
            {/* <td className="py-3 px-3">
            <img src="/assets/Images/Up.png" className="h-8" />
          </td> */}
            <td className="py-3 px-3">
            <GeneralButton
              submitting={false}
              submit={() => history.push("/trade")}
              textValue={"TRADE"}
              otherClasses={"bg-customBlack-50 px-2 py-1 text-white xl:text-xs xxl:text-sm"}
            />
              {/* <button
                onClick={() => history.push("/trade")}
                className="focus:outline-none flex content-center bg-customBlue-200 hover:bg-blue-500 px-2 py-1 text-white xl:text-xs xxl:text-sm rounded-sm"
              >
                TRADE
              </button> */}
            </td>
          </tr>
        ))}
    </table>
  );
}

export default MarketTable;
