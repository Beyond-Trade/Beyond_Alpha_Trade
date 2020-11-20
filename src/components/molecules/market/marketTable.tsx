import * as React from "react";

import MarketSort from "../../atomic/market/MarketSort";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";

interface IProps {
  data: any;
  handleSort: Function;
}
function MarketTable({ data, handleSort }: IProps) {
  return (
    <table width="100%">
      <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
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
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td> */}
        <td className="py-2 px-3">
          <div className="flex items-center">TRADE NOW</div>
        </td>
      </tr>
      {data.map((item: any) => (
        <tr className="text-xs text-left text-gray-700 font-medium">
          <td className="py-3 px-3">
            <div className="flex items-center">
              <text className="text-black">{item.short}</text>
              <text className="text-gray-400 ml-2">Litecoin</text>
            </div>
          </td>
          <td className="py-3 px-3">${item.rate}</td>
          <td className="py-3 px-3">
            <button
              className={`rounded-sm px-1 ${
                item.change24h >= 0
                  ? "bg-green-200 text-green-400"
                  : "bg-red-200 text-red-400"
              } `}
            >
              {item.change24h} %
            </button>
          </td>
          <td className="py-3 px-3">${item.high24h}</td>
          <td className="py-3 px-3">${item.low24h}</td>
          {/* <td className="py-3 px-3">
            <img src="assets/Images/Up.png" className="h-8" />
          </td> */}
          <td className="py-3 px-3">
            <button className="focus:outline-none bg-customBlue-200 hover:bg-blue-500 px-2 py-1 text-white text-xs rounded-sm">
              TRADE
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default MarketTable;
