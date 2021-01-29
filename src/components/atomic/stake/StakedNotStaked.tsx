import * as React from "react";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import useRewards from "../../../hooks/stake/useRewards";
import { RootState } from "../../../store/reducers/Index";
import { Balance } from "../../../store/types/WalletState";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";

function StakedNotStaked() {
  const [state, setState] = React.useState({
    stackedBYNPercent: 0,
    stackedBYN: 0,
    unstackedBYN: 0,
    totalBYN: 0,
  });
  const { stackedBYN, unstacked, totalByn } = useSelector(
    (state: RootState) => state.wallet
  );
  React.useEffect(() => {
    let stackedPerc = (stackedBYN * 100) / totalByn;
    setState((prev) => ({
      ...prev,
      stackedBYN: stackedBYN,
      unstackedBYN: unstacked,
      totalBYN: totalByn,
      stackedBYNPercent: stackedPerc,
    }));
  }, [stackedBYN, unstacked, totalByn]);

  return (
    <div
      className=" p-4 xxl:p-6 bg-blackGray w-full flex flex-col sm:flex-row items-center lg:mr-6"
    >
      <img src="/assets/Icons/byn-coin.svg" className="mr-8" />
      <div className="w-full mt-3 sm:mt-0">
      <div className="flex justify-between pb-3">
        <h6 className="xxl:text-base text-sm font-medium text-white">TOTAL <text className="text-customGray-300 text-sm">(BYN)</text></h6>
        <h6 className="xxl:text-sm text-xs font-medium text-customGray-300">
          {toFixedNoRounding(state.totalBYN, 5)} BYN
        </h6>
      </div>
      <div className="flex justify-between mb-5 mt-2 text-customGray-300">
        <h6 className="xxl:text-sm text-xs font-medium">
          Staked: {toFixedNoRounding(state.stackedBYN, 5)}
        </h6>
        <h6 className="xxl:text-sm text-xs font-medium">
          Not Staked: {toFixedNoRounding(state.unstackedBYN, 5)}
        </h6>
      </div>
      <div
        className="w-full flex mt-1 pb-2 bg-white"
        style={{ padding: "0px" }}
      >
        <div
          className="h-4 bg-customPink"
          style={{ width: `${state.stackedBYNPercent}%` }}
        ></div>
        {/* <div className="h-4 bg-gray-300"></div> */}
      </div>
      </div>
    </div>
  );
}

export default StakedNotStaked;
