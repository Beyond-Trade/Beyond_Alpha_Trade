import * as React from "react";

import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";

interface IProps {
  data: any;
}
function MarketTop({ data }: IProps) {
  const { balances } = useSelector((state: RootState) => state.wallet);
let rowType=1
  return (
    <div className="bg-mediumLightGray p-4">
    <table width="100%">
      <tr className="bg-white text-sm xxl:text-base text-left text-darkGray font-medium">
        <td className="py-3 px-3">Asset</td>
        <td className="py-2 px-3">Price</td>
        <td className="py-2 px-3">Change</td>
      </tr>
      {data.map((item: any) => {
        rowType=rowType*-1
        return <tr className={`${rowType>0?'bg-lightGray':''} text-xs xxl:text-sm text-left text-gray-300 font-medium`}>
          <td className="py-4 px-3">
            <div className="flex items-center">
              <text className="text-customPink">{item.short}</text>
            </div>
          </td>
          <td className="py-3 px-3">${item.rate.toFixed(2)}</td>
          <td className="py-3 px-3 ">
            <div
              className={`${
                item.change24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              } `}
            >
              <div className="text-center">{item.change24h.toFixed(2)}%</div>
            </div>
          </td>
        </tr>
      })}
    </table>
    </div>
  );
}

export default MarketTop;
