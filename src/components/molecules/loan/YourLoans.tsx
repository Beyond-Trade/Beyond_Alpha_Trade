import React from "react";

function YourLoans() {
  return (
    <div className="w-full bg-customGray-100 rounded mr-8 mt-3">
      <div className="bg-gray-300 rounded-t pl-2 pt-2">
        <h3 className="font-medium text-xs text-gray-600">YOUR LOANS</h3>
      </div>
      <table width="100%">
        <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
          <td className="w-1/7 pl-2 flex items-center">
            AMOUNT BORROWED{" "}
            <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              COLLATERAL{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              C-RATIO{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              TIME OPENED{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              CURRENT.INST.FEE{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              STATUS{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center">
              VERIFY{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
        </tr>
        <tbody></tbody>
      </table>
      <div className="h-64 p-5">
        <h6 className="text-blue-700 font-medium text-xxs">
          No assets associated with this wallet
        </h6>
      </div>
    </div>
  );
}

export default YourLoans;
