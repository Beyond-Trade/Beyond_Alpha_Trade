import * as React from "react";

import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";

interface IProps {
  data: any;
}
function MarketTop({ data }: IProps) {
  const { balances } = useSelector((state: RootState) => state.wallet);
  console.log(balances);
  return (
    <table width="100%">
      <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
        <td className="py-2 px-3">ASSETS</td>
        <td className="py-2 px-3">RATE</td>
        <td className="py-2 px-3">CHANGE</td>
      </tr>
      {data.map((item: any) => (
        <tr className="bg-gray-100 text-xs text-left text-gray-700 font-medium">
          <td className="py-3 px-3">
            <div className="flex items-center">
              <text className="text-black">{item.short}</text>
            </div>
          </td>
          <td className="py-3 px-3">${item.rate}</td>
          <td className="py-3 px-3">${item.change24h}</td>
        </tr>
      ))}
    </table>
  );
}

export default MarketTop;
