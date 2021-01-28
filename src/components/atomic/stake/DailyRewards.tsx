import * as React from "react";
import { useHistory } from "react-router-dom";
import useRewards from "../../../hooks/stake/useRewards";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

function DailyRewards() {
  const history = useHistory();
  const { APY, rewards, collectableReward } = useRewards();

  return (
    <div
      className="w-full flex p-4 xxl:p-6 bg-blackGray text-customGray-300 mt-6 lg:mt-0 lg:ml-6"
    >
        <img src="/assets/Icons/award.svg" className="mr-8" />
        <div className="w-full">
      <div className="flex justify-between">
        <h6 className="xxl:text-base text-sm font-medium">DAILY REWARD(BYN)</h6>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => history.push("/stake/rewards")}
        >
          <label className="xxl:text-sm text-xxs font-medium cursor-pointer">
            Go to Rewards
          </label>
          <img
            src="/assets/Icons/see details arrow.svg"
            className="ml-1 w-3"
            alt="img"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <h6 className="xxl:text-base text-xs font-medium">
          Daily Collectable Reward from Staked BYN
        </h6>
        <div className="flex items-center">
          <img
            src="/assets/Icons/trophy.png"
            className="mr-1 w-3 xxl:w-5"
            alt="img"
          />
          <label className="xxl:text-lg text-xs">
            {rewards.length > 0 ? toFixedNoRounding(rewards[0], 5) : 0.0} BYN {}
            {/* {rewards.length > 0 ? (Number(rewards[0])/ convertToUSDb).toFixed(2) : "0.00"}BYN  */}
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <h6 className="xxl:text-base text-xs font-medium">
          APY:
        </h6>
        <div className="flex items-center">
          <label className="xxl:text-lg text-xs">
            {Number(APY).toFixed(2)}%
          </label>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DailyRewards;
