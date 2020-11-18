import * as React from "react";

function MarketTable() {
  return (
    <table width="100%">
      <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
        <td className="py-2 px-3">
          <div className="flex items-center">
            ASSET
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            LAST PRICE
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            25 HOUR CHANGE
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR HIGH
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR LOW
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">
            24 HOUR TREND
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center">TRADE NOW</div>
        </td>
      </tr>
      {[1, 1, 1, 1, 1].map((item) => (
        <tr className="text-xs text-left text-gray-700 font-medium">
          <td className="py-3 px-3">
            <div className="flex items-center">
              <text className="text-black">sLTC</text>
              <text className="text-gray-400 ml-2">Litecoin</text>
            </div>
          </td>
          <td className="py-3 px-3">
              $58.91
          </td>
          <td className="py-3 px-3">
            <button className="bg-green-200 text-green-400 rounded-sm px-1">
              9.09 %
            </button>
          </td>
          <td className="py-3 px-3">
            $16.21
          </td>
          <td className="py-3 px-3">
            $56.51
          </td>
          <td className="py-3 px-3">
            <img src="assets/Images/Up.png" className="h-8" />
          </td>
          <td className="py-3 px-3">
            <button className="focus:outline-none bg-customBlue-200 hover:bg-blue-500 px-2 py-1 text-white text-xs rounded-sm">TRADE</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default MarketTable;
