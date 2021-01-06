import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {
  claimUserReward,
  collectUserReward,
  currentTime,
  userRewardDetails,
} from "../../services/reward.service";
import { getExchangeProxDetails } from "../../services/reward.service";

const useRewards = () => {
  const convertToUSDb = 1000000000000000000;
  const alert = useAlert();
  const [collecting, setCollecting] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rewardData, setRewardData] = useState<any>([]);
  const [rewards, setRewards] = useState<any>([]);
  const [APY, setAPY] = useState("0.00");
  const [isLoading, setIsLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  useEffect(() => {
    getExchangeProxDetails()
      .then((res) => {
        console.log(res, "??????????????????????");
        setAPY(res._APY);
      })
      .catch((err) => {});
    currentTime().then((res) => {
      // var myDate = new Date( your epoch date *1000);
      console.log(res);
      getRewardDetails(res);
    });
  }, []);
  const getRewardDetails = async (res: any) => {
    setIsLoading(true);
    let resCopy = res?._currentTime;
    console.log(res, "==========RES==========");
    const rewardsData: any = [];
    const Rewards: any = [];
    for (var i = 0; i <= 6; i++) {
      if (resCopy > 0) {
        console.log(resCopy, "==========resCopy==========");
        let result = 0;
        await userRewardDetails(resCopy).then((resData) => {
          console.log(resData, ">>>>>>>>>>>>>>>>>>.");
          result = resData;
        });
        resCopy = resCopy - 3600;
        console.log(resCopy);
        Rewards.push(+result / convertToUSDb);
        if (result > 0) {
          rewardsData.push({ time: resCopy, data: result });
        }
        // rewardsData.push({ time: resCopy, data: result });
      }
    }
    setRewards([...Rewards]);
    setRewardData([...rewardsData]);
    setIsLoading(false);
  };
  console.log(rewardData);
  const handleClaim = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleCollect = () => {
    setCollecting(true);
    collectUserReward()
      .then((data) => {
        setClaiming(false);
        data?.status
          ? alert.show("Reward Collected successfully", { type: "success" })
          : alert.show("Unable to Collect Reward", { type: "error" });
      })
      .catch((err) => {
        console.log(err);
        setCollecting(false);
        if (err.code === 4001) {
          alert.show(err.message, { type: "error" });
        } else {
          alert.show("Unable to Collect Reward", { type: "error" });
        }
      });
  };
  const submit = () => {
    setIsOpen(false);
    setClaiming(true);
    claimUserReward()
      .then((data) => {
        setClaiming(false);
        data?.status
          ? alert.show("Reward Claimed successfully", { type: "success" })
          : alert.show("Unable to Claim Reward", { type: "error" });
      })
      .catch((err) => {
        console.log(err);
        setClaiming(false);
        if (err.code === 4001) {
          alert.show(err.message, { type: "error" });
        } else {
          alert.show("Unable to Claim Reward", { type: "error" });
        }
      });
  };

  return {
    rewardData,
    rewards,
    isLoading,
    submit,
    claiming,
    handleClaim,
    handleClose,
    isOpen,
    collecting,
    handleCollect,
    APY
  };
};

export default useRewards;
