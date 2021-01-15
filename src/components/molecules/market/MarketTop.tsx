import * as React from "react";

import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";

interface IProps {
  data: any;
}
function MarketTop({ data }: IProps) {
  const { balances } = useSelector((state: RootState) => state.wallet);

  return (
    <table width="100%">
      <tr className="border-b border-t border-gray-400 xl:text-xxs xxl:text-sm text-left text-gray-600 font-medium">
        <td className="py-2 px-3">ASSETS</td>
        <td className="py-2 px-3">RATE</td>
        <td className="py-2 px-3">CHANGE</td>
      </tr>
      {data.map((item: any) => (
        <tr className="border-b border-gray-400 xl:text-xs xxl:text-sm text-left text-gray-700 font-medium">
          <td className="py-3 px-3">
            <div className="flex items-center">
              <text className="text-black">{item.short}</text>
            </div>
          </td>
          <td className="py-3 px-3">${item.rate.toFixed(2)}</td>
          <td className="py-3 px-3 ">
            <div
              className={`${
                item.change24h >= 0
                  ? "bg-green-200 text-green-400"
                  : "bg-red-200 text-red-400"
              } `}
            >
              <div className="text-center">{item.change24h.toFixed(2)}%</div>
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default MarketTop;
