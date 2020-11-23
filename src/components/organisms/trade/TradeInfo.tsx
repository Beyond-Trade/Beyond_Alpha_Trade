import * as React from "react";
import GenericTab from "../../atomic/GenericTab";
import MarketTable from "../../molecules/market/marketTable";

function TradeInfo() {
  const [tabIndex, setIndex] = React.useState(0);
  return (
    <div className="w-full mt-4 mr-4 bg-customGray-100 rounded overflow-auto">
      <div className="w-94">
        <GenericTab
          index={tabIndex}
          onSelect={setIndex}
          tabs={["YOUR ORDERS", "YOUR TRADES", "ALL TRADES"]}
        />
      </div>
      <table width="100%">
        <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
          <td className="py-2 px-3">
            <div className="flex items-center whitespace-nowrap	w-20">
              DATE | TIME
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PAIR
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              BUYING
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              SELLING
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              PRICE
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              TOTAL
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">
              STATUS
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="py-2 px-3">
            <div className="flex items-center">VERIFY</div>
          </td>
        </tr>
        {[1, 1, 1, 1, 1].map((item) => (
          <tr className="text-xs text-left text-gray-600 font-medium hover:bg-gray-300">
            <td className="py-3 px-3 whitespace-nowrap">
              <text>Oct 24, 20 | 23:08</text>
            </td>
            <td className="py-3 px-3 whitespace-nowrap">sXAU / sUSD</td>
            <td className="py-3 px-3 whitespace-nowrap">124564 sUSD</td>
            <td className="py-3 px-3 whitespace-nowrap">0.0055 sXAU</td>
            <td className="py-3 px-3">$1894.04</td>
            <td className="py-3 px-3">$1896.04</td>
            <td className="py-3 px-3">Complete</td>
            <td className="py-3 px-3">
              <button className="focus:outline-none text-customBlue-200 underline px-2 py-1 font-bold text-xs rounded-sm">
                VIEW
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TradeInfo;
