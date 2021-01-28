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
  let rowType = 1
  const getSecondRow = () => {
    rowType=rowType*-1
    return <tr className="py-20 text-sm xxl:text-base text-left font-normal" style={{backgroundColor: rowType>0?'#E2E8F0':'#F0F3F7'}}>
    <td className="flex items-center my-2 justify-center font-semibold text-customPink">
        BYN (Staked)
        </td>
        <td className="w-1/4 text-center">${BYNobj?.rate === Infinity  ?  "0.00000": toFixedNoRounding(BYNobj?.rate || "0.00000",5 )}</td>
        <td className="w-1/4">
          <div className="flex items-center justify-center">
            {toFixedNoRounding(stackedBYN || "0.00000",5)} {"BYN"}
          </div>
        </td>
        <td className="w-1/4">
          <div className="flex items-center justify-center">
            ${stackedBYN * BYNobj?.rate > 0 ? toFixedNoRounding((stackedBYN * BYNobj?.rate) || "0.00000",5) : "0.00000"}
          </div>
        </td>
    </tr>
  }
  return (
    <div className="flex mt-8 px-8 xl:px-24 lg:px-24 mb-16">
      <div className="w-full rounded overflow-auto	">
        {/* <div className="bg-gray-300 rounded-t pl-2 pt-2"> */}
          {/* <h3 className="font-medium text-xs xxl:text-lg text-gray-600">
            YOUR SYNTHS
          </h3> */}
        {/* </div> */}
        <table width="100%">
          <tr className="text-xxs xxl:text-base bg-black border-b text-left text-white font-medium " id="stackTableHader">
            <td className="w-1/4 pl-2 flex items-center justify-center w-full my-2">
              ASSETS
              <img
                src="/assets/Icons/up-down-arrow.svg"
                alt="img"
                className="ml-1 h-2"
              />
            </td>
            <td className="w-1/4 ">
              <div className="flex items-center justify-center">
                RATES
                {/* <img
                  src="/assets/Icons/up-down-arrow.svg"
                  alt="img"
                  className="ml-1 h-2"
                /> */}
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex items-center justify-center">
                TOTAL
                <img
                  src="/assets/Icons/up-down-arrow.svg"
                  alt="img"
                  className="ml-1 h-2"
                />
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex items-center justify-center">
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
            {balances.map((item) => {
              rowType=rowType*-1
              let color = {backgroundColor: rowType>0?'#E2E8F0':'#F0F3F7'}
              return <>
              <tr className={`py-20 text-sm xxl:text-base text-left font-normal`} style={color}>
                <td className="flex items-center my-2 justify-center font-semibold text-customPink">
                  {item.short  === "Beyond" ? "BYN (Not Staked)":item.short}
                </td>
                <td className="w-1/4 text-center">${item.rate === Infinity ? "0.00" : toFixedNoRounding(item.rate,5)}</td>
                <td className="w-1/4">
                  <div className="flex items-center justify-center">
                    {toFixedNoRounding(item.cryptoBalance,5)} {item.short  === "Beyond" ? "BYN":item.short}
                  </div>
                </td>
                <td className="w-1/4">
                  <div className="flex items-center justify-center">
                    ${item.cryptoBalance * item.rate > 0 ? toFixedNoRounding(item.cryptoBalance * item.rate,5) : "0.00000"}
                  </div>
                </td>
              </tr>
              {item.short === "Beyond"?getSecondRow():null}
              </>
            })}
            
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
