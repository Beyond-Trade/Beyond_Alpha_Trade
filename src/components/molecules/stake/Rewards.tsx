import React, { useEffect, useState } from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
import useRewards from "../../../hooks/stake/useRewards";
import GeneralButton from "../../atomic/GeneralButton";
const convertToUSDb = 1000000000000000000;
function Rewards() {
  const { rewardData, rewards, isLoading,submit,claiming } = useRewards();
  return (
    <div
      className="border border-gray-400 mt-6 py-10 px-10"
      style={{ backgroundColor: "#EBEDF0" }}
    >
      <h3 className="xl:text-lg xxl:text-2xl font-bold text-customBlack-500">
        REWARDS
      </h3>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4">
          <p className="text-xs xxl:text-base font-light text-black mt-6 font-normal">
          If you have staked your BYN tokens,
            <br />
            you are eligible to collect BYN staking rewards
          </p>
          <img
            src="/assets/Images/rewards.png"
            alt="img"
            className="h-24 m-auto mt-10"
          />
        </div>
        <div className="w-full px-10">
          <div className="rounded pb-1">
            <div className="flex justify-between text-customGray-400 py-1 xxl:text-base text-xs font-medium rounded-t">
              <h4>Distribution Date</h4>
              <h4>Rewards Quantity</h4>
            </div>
            {!isLoading ? (
              rewardData?.length > 0 ? (
                rewardData.map((reward: any, index: any) =>
                  index % 2 === 0 ? (
                    <div className="flex justify-between text-white xxl:text-sm text-xxs px-4 py-2 bg-customBlack-500">
                      <h6 className="font-normal">
                        {moment(reward.time * 1000).format("LL")}
                      </h6>
                      <h6 className="font-normal">
                        ${Number(reward.data / convertToUSDb).toFixed(2)}
                      </h6>
                    </div>
                  ) : (
                    <div className="flex justify-between xxl:text-sm text-xxs px-4 py-2 bg-customBlack-50 text-white">
                      <h6 className="font-normal">
                        {moment(reward.time * 1000).format("LL")}
                      </h6>
                      <h6 className="font-normal">
                        ${Number(reward.data / convertToUSDb).toFixed(2)}
                      </h6>
                    </div>
                  )
                )
              ) : (
                <>
                  <div className="flex justify-center xxl:text-sm text-xxs px-8 py-2 bg-white">
                    <h6 className="font-normal">No Reward Found.</h6>
                  </div>
                </>
              )
            ) : (
              <div className="flex justify-center py-6">
                <Loader type="Bars" color="#5183bf" height={18} width={20} />
              </div>
            )}
            {/* <div className="flex justify-between xxl:text-sm text-xxs px-8 py-2 bg-gray-300">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div>
            <div className="flex justify-center py-6"><Loader type="Bars" color="#5183bf" height={18} width={20} /></div>
            
            <div className="flex justify-between xxl:text-sm text-xxs px-8 py-2 bg-gray-400">
              <h6 className="font-normal">01 November 2020</h6>
              <h6 className="font-normal">$227.55</h6>
            </div> */}

            {rewardData?.length > 0 && (
              <div className="flex justify-between xxl:text-sm text-xxs bg-white px-4 py-2">
                <h6 className="font-medium">Total available</h6>
                <h6 className="font-medium">
                ${Number(rewards[0]).toFixed(2)}
                  {/* {Number(rewards.reduce((a: any, b: any) => a + b, 0)).toFixed(2)} BYN */}
                </h6>
              </div>
            )}
          </div>
          <div className="flex">
          <GeneralButton
              submitting={claiming}
              submit={submit}
              textValue={"CLAIM"}
              otherClasses={"bg-customBlack-500 text-xs xxl:text-base w-full py-2 xxl:py-3 mt-8"}
            />
            {/* <button
              onClick={claimUserReward}
              className="focus:outline-none bg-customBlue-200 text-white text-xs xxl:text-base w-full rounded py-2 xxl:py-3 mt-8"
            >
              CLAIM
            </button> */}
            {/* <button className="focus:outline-none bg-customBlue-200 text-white text-xs xxl:text-base w-full rounded py-2 xxl:py-3 mt-8">
              STAKE & MINT
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
