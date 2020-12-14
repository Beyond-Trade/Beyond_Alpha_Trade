import { useEffect, useState } from "react";
import { currentTime, userRewardDetails } from "../../services/reward.service";

const useRewards = () => {
    const convertToUSDb = 1000000000000000000;
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
      let resCopy = res?._currentTime;
      console.log(res, "==========RES==========");
      const rewardsData: any = [];
      const Rewards: any = [];
      for (var i = 0; i <= 6; i++) {
        if (resCopy - 300 > 0) {
          resCopy = resCopy - 300;
          console.log(resCopy, "==========resCopy==========");
  
          let result = 0;
          await userRewardDetails(resCopy).then((resData) => {
            console.log(resData,">>>>>>>>>>>>>>>>>>.");
            result = resData;
          });
          console.log(resCopy);
          Rewards.push(+result / convertToUSDb);
          if(result > 0){
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

  return { rewardData,rewards,isLoading };
};

export default useRewards;
