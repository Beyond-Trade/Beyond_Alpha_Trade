import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";

const BottomSection = () => {
  const { balances } = useSelector((state: RootState) => state.wallet);
  return (
    <div className="xl:flex lg:flex mt-8 px-20 lg:px-48 xl:px-48 mb-20">
      <div className="w-full xl:mr-2 lg:mr-2 mb-4">
        <div className="flex justify-between items-center py-2 px-4 bg-customGray-100 rounded">
          <div className="flex items-center">
            <img src="assets/Icons/BYN-small.svg" className="h-6" />
            <h6 className="ml-2 text-xs font-medium">1 BYN = $3.74 USD</h6>
          </div>
          <div className="flex items-center">
            <img src="assets/Icons/BYN-small.svg" className="h-6" />
            <h6 className="ml-2 text-xs font-medium">1 BYN = $3.74 USD</h6>
          </div>
        </div>
        <div className="mt-2 bg-customGray-100 rounded p-4">
          <div className="flex justify-between border-b border-gray-400 pb-2">
            <h6 className="text-xs">TOTAL BYN:</h6>
            <h6 className="text-xs font-medium text-blue-300">114.5 BYN</h6>
          </div>
          <div className="flex justify-between mt-4">
            <h6 className="text-xs font-medium">Staked: 83.16</h6>
            <h6 className="text-xs font-medium">Not Staked: 31.39</h6>
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
              <img src="assets/Icons/BYN-small.svg" className="h-4" />
              <h6 className="ml-2 text-xxs font-medium">{item.short}</h6>
            </div>
            <h6 className="text-xxs font-medium text-left">{item.cryptoBalance}</h6>
            <h6 className="text-xxs font-medium">${(item.cryptoBalance * item.rate)}</h6>
          </div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
