import * as React from "react";

import { Balance } from "../../../store/types/WalletState";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useRewards from "../../../hooks/stake/useRewards";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
import ConvertFromE from "../../_common/ConvertFromE";
import StakedNotStaked from "../../atomic/stake/StakedNotStaked";
import DailyRewards from "../../atomic/stake/DailyRewards";
const convertToUSDb = 1000000000000000000;
const BottomSection = () => {
  const { balances } = useSelector(
    (state: RootState) => state.wallet
  );

  const renderTable = () => {
    let type = 1;
    return balances.map((item) => {
      type=type*-1
      return <tr className={`flex ${type>0?'bg-darkGray':'bg-blackGray'} justify-between font-normal py-1 py-2 px-8 text-xs font-light rounded-t`}>
        <td style={{ width: "120px" }}>
          <div className="flex items-center">
            <img src={item.icon} className="h-4 xxl:h-8" alt="img" />
            <h6 className="ml-2 lg:ml-2 xxl:ml-4 xxl:text-xl text-xs">
              {item.short === "Beyond"? "BYN":item.short }
            </h6>
          </div>
        </td>
        <td className="text-center" style={{ width: "90px" }}>
          <h6 className="ml-2 xxl:text-xl text-xs">
            {toFixedNoRounding(item.cryptoBalance,5)}
          </h6>
        </td>
        <td className="text-right" style={{ width: "90px" }}>
          <h6 className="ml-2 xxl:text-xl text-xs">
            {/* ${ConvertFromE(toFixedNoRounding((Number(item.cryptoBalance) * item.rate,5)))} */}
            ${toFixedNoRounding((Number(item.cryptoBalance) * item.rate) || 0,6)}
          </h6>
        </td>
      </tr>
    })
  }

  return (
    <div className="mt-8 px-6 sm:px-16 xl:px-24 xxl:px-36 mb-20">
      <div className="lg:flex w-full mb-12">
      <StakedNotStaked />
      <DailyRewards />
      </div>
      <div className="w-full bg-blackGray whitespace-no-wrap overflow-auto">
        <div className="pb-4 px-2 text-white">
          <table width="100%">
            <tr className="flex justify-between bg-lightGray py-2 xxl:py-2 mt-3 px-8 text-xs font-bold">
              <td className="items-center w-44 mr-8 xxl:mr-0">
                <h4 className="xxl:text-lg text-xs">Asset Summary</h4>
              </td>
              <td className="text-center " style={{ width: "90px" }}>
                <h4 className="xxl:text-lg text-xs">Balance</h4>
              </td>
              <td className="text-right" style={{ width: "90px" }}>
                <h4 className="xxl:text-lg text-xs">USD</h4>
              </td>
            </tr>
            {renderTable()}
          </table>
        </div>

        {/* <div className="bg-customGray-100 rounded pb-1">
          <div className="bg-gray-400 flex justify-between py-1 px-8 text-xs font-bold rounded-t">
            <h4>Asset Summary</h4>
            <h4>Balance</h4>
            <h4>USD</h4>
          </div>
          {balances.map((item) => (
            <div className="flex justify-between px-8 py-2">
              <div className="flex items-center">
                <img src={item.icon} className="h-4" />
                <h6 className="ml-2 text-xxs font-medium">{item.short}</h6>
              </div>
              <h6 className="text-xxs font-medium">
                {item.cryptoBalance.toFixed(4)}
              </h6>
              <h6 className="text-xxs font-medium">
                ${(item.cryptoBalance * item.rate).toFixed(2)}
              </h6>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BottomSection;
