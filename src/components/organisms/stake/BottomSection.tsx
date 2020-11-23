import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import {getStackedByn } from "../../../services/mint.service";
import { RootState } from "../../../store/reducers/Index";
import { Balance } from "../../../store/types/WalletState";

const BottomSection = () => {
  const [state, setState] = useState({
    stackedBYN: 0,
    unstackedBYN: 0,
    totalBYN: 0,
    ETHBal: 0,
    ethRate: 0,
    bynRate: 0,
  });
  const { balances } = useSelector((state: RootState) => state.wallet);

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
      bynRate: BYNObj?.rate || 0
    }));

    getStackedByn().then((data: any) => {
      setState((prev) => ({ ...prev, stackedBYN: data.stackedBYN,unstackedBYN:data.unstackedBYN,totalBYN:data.totalBYN }));
    });
  }, []);

  return (
    <div className="xl:flex lg:flex mt-8 px-20 lg:px-48 xl:px-48 mb-20">
      <div className="w-full xl:mr-2 lg:mr-2 mb-4">
        <div className="flex justify-between items-center py-2 px-4 bg-customGray-100 rounded">
          <div className="flex items-center">
            <img src="assets/Icons/BYN-small.svg" className="h-6" />
            <h6 className="ml-2 text-xs font-medium">
              1 BYN = ${state.bynRate?.toFixed(2)} USD
            </h6>
          </div>
          <div className="flex items-center">
            <img src="assets/Icons/BYN-small.svg" className="h-6" />
            <h6 className="ml-2 text-xs font-medium">
              1 ETH = ${state.ethRate?.toFixed(2)} USD
            </h6>
          </div>
        </div>
        <div className="mt-2 bg-customGray-100 rounded p-4">
          <div className="flex justify-between border-b border-gray-400 pb-2">
            <h6 className="text-xs">TOTAL BYN:</h6>
            <h6 className="text-xs font-medium text-blue-300">
              {state.totalBYN} BYN
            </h6>
          </div>
          <div className="flex justify-between mt-4">
            <h6 className="text-xs font-medium">
              Staked: {state.stackedBYN}
            </h6>
            <h6 className="text-xs font-medium">
              Not Staked: {state.unstackedBYN}
            </h6>
          </div>
          <div className="flex mt-1">
            <div className="w-full h-4 bg-gray-300"></div>
            <div className="w-24 h-4 bg-gray-400"></div>
          </div>
        </div>
        <div className="flex justify-between bg-customGray-100 rounded mt-2 px-4 py-2">
          <div>
            <h2 className="font-semibold text-sm">DAILY REWARD</h2>
            <div className="text-xxs">Reward from staked BYN</div>
          </div>
          <div>
            <div className="flex items-center">
              <label className="text-xxs text-blue-300">See Details</label>
              <img
                src="assets/Icons/see details arrow.svg"
                className="ml-1 w-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:ml-2 lg:ml-2">
        <div className="bg-customGray-100 rounded pb-1">
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
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
