import React from "react";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
import { Balance } from "../../../store/types/WalletState";
import { ERC20Contracts } from "../../../contracts/constants/contracts";

function WalletData() {
  const { balances, stackedBYN, unstacked, totalByn } = useSelector(
    (state: RootState) => state.wallet
  );
  const BYNobj:any = balances.find(
    (bal: Balance) => bal.short == ERC20Contracts.BEYOND
  );
  console.log(BYNobj)
  return (
    <div className="flex mt-8 px-8 xl:px-24 lg:px-24 mb-16">
      <div className="w-full rounded">
        {/* <div className="bg-gray-300 rounded-t pl-2 pt-2"> */}
          {/* <h3 className="font-medium text-xs xxl:text-lg text-gray-600">
            YOUR SYNTHS
          </h3> */}
        {/* </div> */}
        <table width="100%">
          <tr className="text-xxs xxl:text-base border-b text-left text-gray-600 font-medium">
            <td className="w-1/4 pl-2 flex items-center my-2">
              ASSETS
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </td>
            <td className="w-1/4">
              <div className="flex items-center">
                RATES
                {/* <img
                  src="/assets/Icons/up-down-arrow.svg"
                  alt="img"
                  className="ml-1 h-2"
                /> */}
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex items-center">
                TOTAL
                <img
                  src="/assets/Icons/up-down-arrow.svg"
                  alt="img"
                  className="ml-1 h-2"
                />
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex items-center">
                USD VALUE
                <img
                  src="/assets/Icons/up-down-arrow.svg"
                  alt="img"
                  className="ml-1 h-2"
                />
              </div>
            </td>
          </tr>
          <tbody>
            {balances.map((item) => (
              <tr className="py-20 text-xs xxl:text-base border-b text-left font-normal">
                <td className="-2 flex items-center my-2">
                  {item.short  === "Beyond" ? "BYN (Not Staked)":item.short}
                </td>
                <td className="w-1/4">${item.rate === Infinity ? "0.00" : toFixedNoRounding(item.rate,5)}</td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    {toFixedNoRounding(item.cryptoBalance,5)} {item.short  === "Beyond" ? "BYN":item.short}
                  </div>
                </td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    ${item.cryptoBalance * item.rate > 0 ? toFixedNoRounding(item.cryptoBalance * item.rate,5) : "0.00000"}
                  </div>
                </td>
              </tr>
            ))}
            <tr className="py-20 text-xs xxl:text-base border-b text-left font-normal">
            <td className=" pl-2 flex items-center my-2">
                BYN (Staked)
                </td>
                <td className="w-1/4">${BYNobj?.rate === Infinity  ?  "0.00000": toFixedNoRounding(BYNobj?.rate || "0.00000",5 )}</td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    {toFixedNoRounding(stackedBYN || "0.00000",5)} {"BYN"}
                  </div>
                </td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    ${stackedBYN * BYNobj?.rate > 0 ? toFixedNoRounding((stackedBYN * BYNobj?.rate) || "0.00000",5) : "0.00000"}
                  </div>
                </td>
            </tr>
            {/* <tr className="py-20 text-xs xxl:text-base border-b text-left font-normal">
            <td className=" pl-2 flex items-center my-2">
                  Not Staked BYN
                </td>
                <td className="w-1/4">${BYNobj?.rate === Infinity  ?  "0.00000": toFixedNoRounding(BYNobj?.rate || "0.00000",5 )}</td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    {toFixedNoRounding(unstacked || "0.00000",5)} {"BYN"}
                  </div>
                </td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    ${unstacked * BYNobj?.rate > 0 ? toFixedNoRounding((unstacked * BYNobj?.rate) || "0.00000",5) : "0.00000"}
                  </div>
                </td>
            </tr> */}
          </tbody>
        </table>
        {balances.length <= 0 && (
          <div className="py-20 flex justify-center items-center">
            <h6 className="text-blue-700 font-medium text-xs">
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
