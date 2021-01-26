import * as React from "react";

import { Balance } from "../../../store/types/WalletState";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import { RootState } from "../../../store/reducers/Index";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toFixedNoRounding } from "../../_common/FixedNoRounding";
const AssetRateCard = () => {
  const [state, setState] = useState({
    ethRate: 0,
    bynRate: 0,
  });
  const { balances } = useSelector(
    (state: RootState) => state.wallet
  );
  React.useEffect(() => {
    const ETHObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETH
    );
    const BYNObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.BEYOND
    );
    
    setState((prev) => ({
      ...prev,
      ethRate: ETHObj?.rate || 0,
      bynRate: BYNObj?.rate === Infinity ? 0 : BYNObj?.rate || 0,
    }));
   
  }, [balances]);
 
  return (
      <div className="w-full xl:mr-2 lg:mr-2 mb-4">
        <div className="border border-gray-400 flex justify-between items-center py-2 xxl:py-3 px-4 xxl:px-6 rounded" style={{backgroundColor:"#EBEDF0"}}>
          <div className="flex items-center" >
            <img
              src="/assets/Icons/BYN-small.svg"
              alt="img"
              className="h-6 xxl:h-8"
            />
            <h6 className="ml-2 xxl:text-sm text-xs font-medium">
              1 BYN = ${toFixedNoRounding(state.bynRate,5) || 0} USD
            </h6>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/Icons/Ethereum.svg"
              alt="img"
              className="h-6 xxl:h-8"
            />
            <h6 className="ml-2 xxl:text-sm text-xs font-medium">
              1 ETH = ${toFixedNoRounding(state.ethRate,5)} USD
            </h6>
          </div>
        </div>
       {/*  */}
      </div>
  );
};

export default AssetRateCard;
