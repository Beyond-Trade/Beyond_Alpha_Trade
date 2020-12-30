import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {
  claimUserReward,
  currentTime,
  userRewardDetails,
} from "../../services/reward.service";

const useRewards = () => {
  const convertToUSDb = 1000000000000000000;
  const alert = useAlert();
  const [rewardData, setRewardData] = useState<any>([]);
  const [rewards, setRewards] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [claiming,setClaiming]=useState(false)
  useEffect(() => {
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
        resCopy = resCopy - 7200;
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
  const submit = () => {
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
        if(err.code === 4001){
        alert.show(err.message, { type: "error" });
        }else{
          alert.show("Unable to Claim Reward", { type: "error" });
        }
        
      });
  };

  return { rewardData, rewards, isLoading,submit,claiming };
};

export default useRewards;
