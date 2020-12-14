import * as React from "react";

import { Trade } from "../../../store/types/ExchangeState";

interface IProps {
  data: Trade[];
}

function AllTradesTable(props: IProps) {
  return (
    <React.Fragment>
      <table width="100%">
        <tr className="bg-gray-300 text-xxs xxl:text-sm text-left text-gray-600 font-medium">
          <td className="py-2 px-3">
            <div className="flex items-center whitespace-nowrap	w-20">
              DATE | TIME
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              ASSET
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              AMOUNT
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>

          <td className="py-2 px-3">
            <div className="flex items-center">VERIFY</div>
          </td>
        </tr>
        {props.data.map((item) => (
          <tr className="text-xs xxl:text-sm text-left text-gray-600 font-normal hover:bg-gray-300">
            <td className="py-3 px-3">
              <text>{item.time}</text>
            </td>
            <td className="py-3 px-3">{item.tokenSymbol}</td>
            <td className="py-3 px-3">{item.amount}</td>
            <td className="py-3 px-3">
              <a
                href={item.infoURL}
                target="_blank"
                className="focus:outline-none text-customBlue-200 underline px-2 py-1 font-bold text-xs rounded-sm"
              >
                VIEW
              </a>
            </td>
          </tr>
        ))}
      </table>
      {props.data.length === 0 && (
        <div className="h-48 text-blue-500 text-xs xxl:text-sm flex justify-center items-center">
          No data found
        </div>
      )}
    </React.Fragment>
  );
}

export default AllTradesTable;
