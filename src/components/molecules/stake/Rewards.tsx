import React from "react";

function Rewards() {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="xl:text-lg xxl:text-2xl font-bold">REWARDS</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4">
          <p className="xl:text-xs xxl:text-xl font-light text-blue-1000 mt-6">
            If you have staked your BYN tokens and
            <br />
            minted USDb, you are eligible to collect BYN
            <br />
            staking rewards, Rewards will be distributed
            <br />
            on a daily basis.
          </p>
          <img
            src="assets/Icons/Rewards.svg"
            alt="img"
            className="h-24 m-auto mt-10"
          />
        </div>
        <div className="w-full px-6">
          <div className="bg-customGray-100 rounded pb-1">
            <div className="bg-customBlue-200 flex justify-between text-white py-1 px-8 xxl:text-lg xl:text-xs font-medium rounded-t">
              <h4>Distribution Date</h4>
              <h4>BYN Quantity</h4>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-300">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-400">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-300">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-400">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-300">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs px-8 py-2 bg-gray-400">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-between xxl:text-base xl:text-xxs bg-gray-300 px-8 py-2">
              <h6 className="font-medium">Total available</h6>
              <h6 className="font-medium">125.63</h6>
            </div>
          </div>
          <div className="flex">
            <button className="focus:outline-none bg-customBlue-200 text-white mr-2 xl:text-xs xxl:text-lg w-full rounded xl:py-2 xxl:py-4 mt-8">
              SEND TO WALLET
            </button>
            <button className="focus:outline-none bg-customBlue-200 text-white xl:text-xs xxl:text-lg w-full rounded xl:py-2 xxl:py-4 mt-8">
              STAKE & MINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
