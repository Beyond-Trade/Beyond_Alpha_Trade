import React from "react";

function YourLoans() {
  return (
    <div className="w-full bg-customGray-100 whitespace-nowrap  mb-4 overflow-auto rounded mr-8 mt-3">
      <div className="bg-gray-300 w-auto rounded-t pl-2 pt-2">
        <h3 className="font-medium text-xs xxl:text-base text-gray-600">
          YOUR LOANS
        </h3>
      </div>
      <table width="100%">
        <tr className="bg-gray-300 text-xxs xxl:text-xs text-left text-gray-600 font-medium">
          <td className="w-1/7 ">
            <div className="flex items-center " style={{ width: "130px" }}>
              AMOUNT BORROWED{" "}
              <img
                src="assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/7 ">
            <div className="flex items-center" style={{ width: "90px" }}>
              COLLATERAL{" "}
              <img
                src="assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              C-RATIO{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "100px" }}>
              TIME OPENED{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "130px" }}>
              CURRENT.INST.FEE{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              STATUS{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
          <td className="w-1/7">
            <div className="flex items-center" style={{ width: "70px" }}>
              VERIFY{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </div>
          </td>
        </tr>
        <tbody></tbody>
      </table>
      <div className="h-64 p-5">
        <h6 className="text-blue-700 font-medium text-xxs xxl:text-sm">
          No assets associated with this wallet
        </h6>
      </div>
    </div>
  );
}

export default YourLoans;
