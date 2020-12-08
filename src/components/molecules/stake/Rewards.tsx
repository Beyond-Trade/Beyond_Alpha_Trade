import React, { useEffect, useState } from "react";
import {
  currentTime,
  userRewardDetails,
  claimUserReward,
} from "../../../services/reward.service";
import moment from "moment";
import Loader from "react-loader-spinner";
const convertToUSDb = 1000000000000000000;
function Rewards() {
  const [rewardData, setRewardData] = useState<any>([]);
  const [rewards, setRewards] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    currentTime().then((res) => {
      // var myDate = new Date( your epoch date *1000);
      console.log(res);
      getRewardDetails(res);
    });
  }, []);
  const getRewardDetails = async (res: any) => {
    setIsLoading(true);
    let resCopy = res;
    console.log(res, "==========RES==========");
    const rewardsData: any = [];
    const Rewards: any = [];
    for (var i = 0; i <= 6; i++) {
      if (resCopy > 0) {
        resCopy = resCopy - 300;
        console.log(resCopy, "==========resCopy==========");

        let result = 0;
        await userRewardDetails(resCopy).then((resData) => {
          console.log(resData);
          result = resData;
        });
        console.log(resCopy);
        Rewards.push(+result / convertToUSDb);
        rewardsData.push({ time: resCopy, data: result });
      }
    }
    setRewards([...Rewards]);
    setRewardData([...rewardsData]);
    setIsLoading(false);
  };
  console.log(rewardData);
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="xl:text-lg xxl:text-2xl font-bold">REWARDS</h3>
      <div className="xl:flex lg:flex">
        <div className="w-full mb-4">
          <p className="text-xs xxl:text-base font-light text-blue-1000 mt-6 font-normal">
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
            <div className="bg-customBlue-200 flex justify-between text-white py-1 px-8 xxl:text-base text-xs font-medium rounded-t">
              <h4>Distribution Date</h4>
              <h4>BYN Quantity</h4>
            </div>
            {!isLoading ? (
              rewardData?.length > 0 ? (
                rewardData.map((reward: any, index: any) =>
                  index % 2 === 0 ? (
                    <div className="flex justify-between xxl:text-sm text-xxs px-8 py-2 bg-gray-300">
                      <h6 className="font-normal">
                        {moment(reward.time * 1000).format("LL")}
                      </h6>
                      <h6 className="font-normal">
                        ${reward.data / convertToUSDb}
                      </h6>
                    </div>
                  ) : (
                    <div className="flex justify-between xxl:text-sm text-xxs px-8 py-2 bg-gray-400">
                      <h6 className="font-normal">
                        {moment(reward.time * 1000).format("LL")}
                      </h6>
                      <h6 className="font-normal">
                        ${reward.data / convertToUSDb}
                      </h6>
                    </div>
                  )
                )
              ) : (
                <div className="flex justify-center xxl:text-sm text-xxs px-8 py-2 bg-gray-300">
                  <h6 className="font-normal">No Reward Found.</h6>
                </div>
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
              <div className="flex justify-between xxl:text-sm text-xxs bg-gray-300 px-8 py-2">
                <h6 className="font-medium">Total available</h6>
                <h6 className="font-medium">
                  ${rewards.reduce((a: any, b: any) => a + b, 0)}
                </h6>
              </div>
            )}
          </div>
          <div className="flex">
            <button
              onClick={claimUserReward}
              className="focus:outline-none bg-customBlue-200 text-white mr-2 text-xs xxl:text-base w-full rounded py-2 xxl:py-3 mt-8"
            >
              CLAIM
            </button>
            <button className="focus:outline-none bg-customBlue-200 text-white text-xs xxl:text-base w-full rounded py-2 xxl:py-3 mt-8">
              STAKE & MINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
