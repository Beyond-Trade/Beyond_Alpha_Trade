import * as React from "react";

import { Balance } from "../../../store/types/WalletState";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useRewards from "../../../hooks/stake/useRewards";

const BottomSection = () => {
  const history = useHistory();
  const [state, setState] = useState({
    stackedBYNPercent: 0,
    stackedBYN: 0,
    unstackedBYN: 0,
    totalBYN: 0,
    ETHBal: 0,
    ethRate: 0,
    bynRate: 0,
  });
  const { balances, stackedBYN, unstacked, totalByn } = useSelector(
    (state: RootState) => state.wallet
  );
  const { rewards } = useRewards();
  React.useEffect(() => {
    const ETHObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETH
    );
    const BYNObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.BEYOND
    );
    setState((prev) => ({
      ...prev,
      ethRate: ETHObj?.rate || 0,
      ETHBal: ETHObj?.cryptoBalance || 0,
      bynRate: BYNObj?.rate === Infinity ? 0 : BYNObj?.rate || 0,
    }));
    console.log(BYNObj?.rate,"FFFFFFFFFFFFFFFFFFFFFFFF")
  }, [balances]);
  React.useEffect(() => {
    let stackedPerc = (stackedBYN * 100) / totalByn;
    setState((prev) => ({
      ...prev,
      stackedBYN: stackedBYN,
      unstackedBYN: unstacked,
      totalBYN: totalByn,
      stackedBYNPercent: stackedPerc,
    }));
  }, [stackedBYN, unstacked, totalByn]);
console.log("bottom section ",balances)
  return (
    <div className="xl:flex lg:flex mt-8 px-20 lg:px-48 xl:px-48 mb-20">
      <div className="w-full xl:mr-2 lg:mr-2 mb-4">
        <div className="border border-gray-400 flex justify-between items-center py-2 xxl:py-3 px-4 xxl:px-6 rounded" style={{backgroundColor:"#EBEDF0"}}>
          <div className="flex items-center" >
            <img
              src="/assets/Icons/BYN-small.svg"
              alt="img"
              className="h-6 xxl:h-8"
            />
            <h6 className="ml-2 xxl:text-sm text-xs font-medium">
              1 BYN = ${state.bynRate?.toFixed(2) || 0} USD
            </h6>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/Icons/Ethereum.svg"
              alt="img"
              className="h-6 xxl:h-8"
            />
            <h6 className="ml-2 xxl:text-sm text-xs font-medium">
              1 ETH = ${state.ethRate?.toFixed(2)} USD
            </h6>
          </div>
        </div>
        <div className="mt-2 xxl:mt-5 border border-gray-400 rounded p-4 xxl:p-6" style={{backgroundColor:"#EBEDF0"}}>
          <div className="flex justify-between border-b border-gray-400 pb-3">
            <h6 className="xxl:text-sm text-xs font-normal">TOTAL BYN:</h6>
            <h6 className="xxl:text-sm text-xs font-medium text-blue-1000">
              {state.totalBYN} BYN
            </h6>
          </div>
          <div className="flex justify-between my-5">
            <h6 className="xxl:text-sm text-xs font-medium">
              Staked: {state.stackedBYN.toFixed(2)}
            </h6>
            <h6 className="xxl:text-sm text-xs font-medium">
              Not Staked: {state.unstackedBYN.toFixed(2)}
            </h6>
          </div>
          <div
            className="w-full flex mt-1 pb-2 bg-customBlack-50"
            style={{ padding: "0px" }}
          >
            <div
              className="h-4 bg-customBlack-500"
              style={{ width: `${state.stackedBYNPercent}%` }}
            ></div>
            {/* <div className="h-4 bg-gray-300"></div> */}
          </div>
        </div>
        {/*  */}
        <div className="mt-2 xxl:mt-5 border border-gray-400 rounded p-4 xxl:p-6" style={{backgroundColor:"#EBEDF0"}}>
          <div className="flex justify-between border-b border-gray-400">
            <h6 className="xxl:text-sm text-xs font-medium">DAILY REWARD</h6>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => history.push("/stake/rewards")}
            >
              <label className="xxl:text-sm text-xxs font-normal text-blue-1000 cursor-pointer">
                Go to "Rewards" section
              </label>
              <img
                src="/assets/Icons/see details arrow.svg"
                className="ml-1 w-3"
                alt="img"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h6 className="xxl:text-base text-xs font-normal">
              Reward from staked BYN
            </h6>
            <div className="flex items-center">
              <img
                src="/assets/Icons/trophy.png"
                className="mr-1 w-3 xxl:w-5"
                alt="img"
              />
              <label className="xxl:text-lg text-xs text-blue-1000">
                {rewards.reduce((a: any, b: any) => a + b, 0)} BYN
              </label>
            </div>
          </div>
        </div>
        {/*  */}
        {/* <div className="flex justify-between bg-customGray-100 rounded xl:mt-2 xxl:mt-5 px-8 xxl:py-5 xl:py-2">
          <div>
            <h2 className="font-semibold xxl:text-lg xl:text-sm mb-3">
              DAILY REWARD
            </h2>
            <div className="flex justify-between my-5">
              <h6 className="xxl:text-xl xl:text-xs font-medium">
                Reward from staked BYN
              </h6>
              <h6 className="xxl:text-xl xl:text-xs font-medium">4.55 BYN</h6>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <label className="xxl:text-xl xl:text-xs text-blue-1000">
                See Details
              </label>
              <img
                src="/assets/Icons/see details arrow.svg"
                className="ml-1 w-3"
                alt="img"
              />
            </div>
            
          </div>
        </div> */}
      </div>
      <div className="w-full xl:ml-2 lg:ml-2  whitespace-nowrap  mb-4 overflow-auto">
        <div className="border border-gray-400 rounded pb-1 px-2" style={{backgroundColor:"#EBEDF0"}}>
          <table width="100%">
            <tr className="flex border-b border-gray-400 justify-between py-2 xxl:py-5 px-8 text-xs font-bold rounded-t">
              <td className="items-center w-44 mr-8 xxl:mr-0">
                <h4 className="xxl:text-lg text-xs">Asset Summary</h4>
              </td>
              <td className="text-center " style={{ width: "90px" }}>
                <h4 className="xxl:text-lg text-xs">Balance</h4>
              </td>
              <td className="text-center" style={{ width: "90px" }}>
                <h4 className="xxl:text-lg text-xs">USD</h4>
              </td>
            </tr>
            {balances.map((item) => (
              <tr className="flex border-b border-gray-400 justify-between font-normal py-1 py-2 px-8 text-xs font-light rounded-t">
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
                    {item.cryptoBalance.toFixed(2)}
                  </h6>
                </td>
                <td className="text-center" style={{ width: "90px" }}>
                  <h6 className="ml-2 xxl:text-xl text-xs">
                    ${(item.cryptoBalance * item.rate || 0).toFixed(2)}
                  </h6>
                </td>
              </tr>
            ))}
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
