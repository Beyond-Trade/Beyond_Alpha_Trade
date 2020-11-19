import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";

function WalletData() {
  const { balances } = useSelector((state: RootState) => state.wallet);
  return (
    <div className="flex mt-8 px-24 mb-16">
      <div className="w-full bg-customGray-100 rounded">
        <div className="bg-gray-300 rounded-t pl-2 pt-2">
          <h3 className="font-medium text-xs text-gray-600">YOUR SYNTHS</h3>
        </div>
        <table width="100%">
          <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
            <td className="w-1/5 pl-2 flex items-center my-2">
              ASSETS{" "}
              <img src="assets/Icons/up-down-arrow.svg" className="ml-1 h-2" />
            </td>
            <td className="w-1/5">
              <div className="flex items-center">
                DESCRIPTION{" "}
                <img
                  src="assets/Icons/up-down-arrow.svg"
                  className="ml-1 h-2"
                />
              </div>
            </td>
            <td className="w-1/5">
              <div className="flex items-center">
                Total{" "}
                <img
                  src="assets/Icons/up-down-arrow.svg"
                  className="ml-1 h-2"
                />
              </div>
            </td>
            <td className="w-1/5">
              <div className="flex items-center">
                USD Value{" "}
                <img
                  src="assets/Icons/up-down-arrow.svg"
                  className="ml-1 h-2"
                />
              </div>
            </td>
          </tr>
          <tbody>
            {balances.map((item) => (
              <tr className="py-20 text-xxs text-left text-gray-600 font-medium">
                <td className="w-1/5 pl-2 flex items-center my-2">
                  {item.short}
                </td>
                <td className="w-1/5">{item.name}</td>
                <td className="w-1/5">
                  <div className="flex items-center">
                    {item.cryptoBalance} {item.short}
                  </div>
                </td>
                <td className="w-1/5">
                  <div className="flex items-center">
                    ${item.cryptoBalance * item.rate}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {balances.length <= 0 && (
        <div className="py-20 flex justify-center items-center">
          <h6 className="text-gray-600 font-medium text-xxs">
            No assets associated with this wallet
          </h6>
        </div>
        )}
      </div>
      {/* <div className="w-84 bg-customGray-100 rounded">
        <div className="bg-gray-300 rounded-t pl-2 pt-2">
          <h3 className="font-medium text-xs text-gray-600">ASSETS</h3>
        </div>
        <table width="100%">
          <tr className="bg-gray-300 text-xxs text-left text-gray-600 font-medium">
            <td className="w-1/5 pl-2">ASSETS</td>
            <td className="w-1/5">BALANCE</td>
            <td className="w-1/5">$USD</td>
          </tr>
          <tbody></tbody>
        </table>
      </div> */}
    </div>
  );
}

export default WalletData;
