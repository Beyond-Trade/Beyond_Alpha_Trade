import React from "react";

function Rewards() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">REWARDS</h3>
      <div className="flex">
        <div className="w-full">
          <p className="text-xs font-medium text-blue-300 mt-6">
            If you have staked your BYN tokens and
            <br />
            minted USDb, you are eligible to collect BYN
            <br />
            staking rewards, Rewards will be distributed
            <br />
            on a daily basis.
          </p>
          <img src="assets/Icons/Rewards.svg" className="h-24 m-auto mt-10" />
        </div>
        <div className="w-full px-6">
          <div className="bg-customGray-100 rounded pb-1">
            <div className="bg-customBlue-200 flex justify-between text-white py-1 px-8 text-xs font-medium rounded-t">
              <h4>Distribution Date</h4>
              <h4>BYN Quantity</h4>
            </div>
            <div className="flex justify-between px-8 py-2 bg-gray-300">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between px-8 py-2 bg-gray-400">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between px-8 py-2 bg-gray-300">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between px-8 py-2 bg-gray-400">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between bg-gray-300 px-8 py-2">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between bg-gray-400 px-8 py-2">
              <h6 className="text-xxs font-medium">114.55</h6>
              <h6 className="text-xxs font-medium">$227.55</h6>
            </div>
            <div className="flex justify-between bg-gray-300 px-8 py-2">
              <h6 className="text-xxs font-medium">Total available</h6>
              <h6 className="text-xxs font-medium">125.63</h6>
            </div>
          </div>
          <div className="flex">
            <button className="focus:outline-none bg-customBlue-200 text-white mr-2 text-xs w-full rounded py-2 mt-8">
              SEND TO WALLET
            </button>
            <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-8">
              ENTER AN AMOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;