import * as React from "react";

import { Order } from "../../../store/types/ExchangeState";

interface IProps {
  data: Order[];
}

function MyOrdersTable(props: IProps) {
  const myOrderData:any = props.data.filter((item) => item.status === "cancelled" || item.status === "Failed" || item.status === "pending")
  console.log(myOrderData)
  console.log(props.data,"<<<<<<<>>>>>>")
  return (
    <React.Fragment>
      <div className="nobar"  style={{height:"200px"}}>
      <table width="100%">
        <tr className="border-b border-t text-xxs xxl:text-sm text-left text-gray-600 font-medium">
          <td className="py-2 px-3">
            <div className="flex items-center whitespace-nowrap	xl:w-20 xxl:w-32">
              DATE | TIME
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PAIR
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              BUYING
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              SELLING
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PRICE
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          {/* <td className="py-2 px-3">
            <div className="flex items-center">
              TOTAL
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td> */}
          <td className="py-2 px-3">
            <div className="flex items-center">
              STATUS
              <img src="/assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">VERIFY</div>
          </td>
        </tr>
        {myOrderData?.map((item:any) => (
          <tr className="border-b text-xs text-left text-black font-medium hover:bg-gray-300">
            <td className="py-3 px-3">
              <text>{item.date}</text>
            </td>
            <td className="py-3 px-3">{item.pair}</td>
            <td className="py-3 px-3">{item.buying}</td>
            <td className="py-3 px-3">{item.selling}</td>
            <td className="py-3 px-3">{item.price}</td>
            {/* <td className="py-3 px-3">$1896.04</td> */}
            <td className="py-3 px-3">{item.status}</td>
            <td className="py-3 px-3">
              <a
                href={item.infoURL ? item.infoURL : "#"}
                style={item.infoURL === "" ? {pointerEvents:"none",cursor:"default",color:"gray"}:{}}
                target="_blank"
                className="focus:outline-none cursor-pointer text-customBlack-500 underline px-2 py-1 font-bold text-xs rounded-sm"
              >
                VIEW
              </a>
            </td>
          </tr>
        ))}
      </table>
      {myOrderData.length === 0 && (
        <div className="h-full text-blue-500 xl:text-xs xxl:text-sm flex justify-center items-center">
          No data found
        </div>
      )}
      </div>
      
    </React.Fragment>
  );
}

export default MyOrdersTable;
