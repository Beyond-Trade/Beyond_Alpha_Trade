import * as React from "react";

import { MarketPair, MarketPairs } from "../../../store/types/ExchangeState";
import { assetChartNames, nowrap } from "../../../utils/constants";

interface IProps {
  data: MarketPairs;
  onSelect: Function;
  search: string;
}
let rowType = -1
function PairData(props: IProps) {
  return (
    <table width="100%">
      <tr className="text-xxs bg-gray-400 xxl:text-sm text-left text-black font-medium">
        <td className="py-2 px-3">PAIR</td>
        <td className="py-2 px-3">
          <div className="flex items-center justify-end" style={nowrap}>
            LAST PRICE
            {/* <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" /> */}
          </div>
        </td>
      </tr>
      {props.data.pairs
        .filter(
          (item) =>
            item.coin.toUpperCase().includes(props.search) ||
            props.search === ""
        )
        .map((item) => {
          rowType= rowType*-1
          return <tr
            onClick={() =>
              props.onSelect(props.data.marketCoin, item.coin, item.rate)
            }
            className={`hover:bg-gray-400 cursor-pointer ${rowType>0?'':'bg-gray-300'} text-xs xxl:text-sm text-left text-gray-600 font-medium`}
          >
            <td className="py-3 px-3">
              <div className="flex items-center" style={nowrap}>
                {/* <img src="/assets/Icons/star.svg" className="h-3 mr-1" /> */}
                {item.coin + " / " + props.data.marketCoin}
                {/* <div className="px-2 ml-2 bg-yellow-400 border rounded-sm border-yellow-600 text-yellow-600 text-xxs">10X</div> */}
              </div>
            </td>
            <td className={`py-2 px-3 text-right`} style={nowrap}>
              {item.rate.toFixed(2)} {assetChartNames[props.data.marketCoin]+"b"}
            </td>
          </tr>
        })}
    </table>
  );
}

export default PairData;
