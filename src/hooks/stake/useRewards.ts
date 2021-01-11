import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import {
  claimUserReward,
  collectUserReward,
  currentTime,
  userRewardDetails,
} from "../../services/reward.service";
import { getExchangeProxDetails } from "../../services/reward.service";
import { updateBalances } from "../../services/wallet.service";
import { RootState } from "../../store/reducers/Index";

const useRewards = () => {
  const convertToUSDb = 1000000000000000000;
  const { balances } = useSelector((state: RootState) => state.wallet);
  const alert = useAlert();
  const [collecting, setCollecting] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<any>("0");
  const [rewardData, setRewardData] = useState<any>([]);
  const [rewards, setRewards] = useState<any>([]);
  const [APY, setAPY] = useState("0.00");
  const [rewardsDetail, setRewardsDetail] = useState<any>({
    reward: "",
    collectableReward: "",
    earlyRedemptionFee: "0",
    investTime: "",
  });
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
      setCurrent(res?._currentTime);
      // var myDate = new Date( your epoch date *1000);
      console.log(res);
      
      getRewardDetails(res);
    }).catch((res)=>{console.log(res, "?????????????ERROR?????????");})
  }, [balances]);
  const getRewardDetails = async (res: any) => {
    let resCopy = res?._currentTime;
    // let startTime = res?._startTime;
    console.log(res, "==========RES==========");
    const rewardsData: any = [];
    const Rewards: any = [];
    let detail;
//     tere pass jab aek dafa jab current time aur invest time a jae to
// if (currenttime<invest time)
// {reward should be zero}
// else{
// currenttime-300 sa jo reward ata wo show kara
// }
    for (var i = 0; i <= 1; i++) {
      if (resCopy > 0) {
        console.log(resCopy, "==========resCopy==========");
        let result = 0;
        await userRewardDetails(resCopy)
          .then((resData) => {
            console.log("invest time = ",resData.investTime ,"current = ", resCopy , ">>>>>>>>>>>>>>>>>>userRewardDetails<<<<<<<<<<<<<<<.",resData);
            if(resData.investTime > res?._currentTime  && i===1 ){
              console.log("IN IF PART");
              result = 0;
              detail = resData;
            }
            else{
              console.log("IN ELSE PART");
              result = resData.reward;
            detail = resData;
            }
          })
          .catch((err) => {
            console.log(err,"CATCH>>>>>>>>>>>>>>>>>>userRewardDetails<<<<<<<<<<<<<<<.");
            // setIsLoading(false);
          });
        resCopy = resCopy - 300;
        console.log(resCopy);
        Rewards.push(+result / convertToUSDb);
        
          rewardsData.push({ time: resCopy, data: result });
        // rewardsData.push({ time: resCopy, data: result });
      }
    }
    setRewardsDetail(detail);
    // setCollectableReward(collectableReward)
    setRewards([...Rewards]);
    setRewardData([...rewardsData]);
    setIsLoading(false);
  };
  console.log(rewardData);
  console.log(rewards, "/////////////////");
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
        setCollecting(false);
        updateBalances();
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
        updateBalances();
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
    ...rewardsDetail,
    collecting,
    handleCollect,
    APY,
  };
};

export default useRewards;
