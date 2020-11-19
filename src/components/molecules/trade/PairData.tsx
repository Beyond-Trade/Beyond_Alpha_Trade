import * as React from "react";

function PairData() {
  return (
    <table width="100%">
      <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
        <td className="py-2 px-3">PAIR</td>
        <td className="py-2 px-3">
          <div className="flex items-center justify-end">
            CHANGE
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </div>
        </td>
      </tr>
      {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
        <tr className="bg-customGray-100 text-xs text-left text-gray-600 font-medium">
          <td className="py-3 px-3">
          <div className="flex items-center">
          <img src="assets/Icons/star.svg" className="h-3 mr-1" />
              BTC/USDT
              <div className="px-2 ml-2 bg-yellow-400 border rounded-sm border-yellow-600 text-yellow-600 text-xxs">10X</div>
            </div>
          </td>
          <td className="py-2 px-3 text-right text-green-500">
              +2.22 %
          </td>
        </tr>
      ))}
    </table>
  );
}

export default PairData;
