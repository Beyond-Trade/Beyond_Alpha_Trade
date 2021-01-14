import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../../contracts/constants/contracts";
import { RootState } from "../../../store/reducers/Index";
import { Balance } from "../../../store/types/WalletState";
function YourWalet() {
  const { balances } = useSelector((state: RootState) => state.wallet)
  console.log(balances,"------------------------------")
  const [state, setState] = useState({
    ETHBal: 0,
    ETHbBal: 0,
  });
  useEffect(() => {
    const ETHObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETH
    );
    const ETHbObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETHb
    );

    setState((prev) => ({
      ...prev,
      ETHBal: ETHObj?.cryptoBalance || 0,
      ETHbBal: ETHbObj?.cryptoBalance || 0,
    }));
  }, [balances]);
  return (
    <>
      <div className="border-gray-400 border px-2 rounded mr-8 w-full mt-3 text-xs xxl:text-sm" style={{backgroundColor:"#EBEDF0"}}>
        <div className="border-gray-400 border-b rounded-t flex justify-between items-center text-gray-600 px-2 py-3 font-medium">
          <h5>YOUR WALET</h5>
        </div>
        <div className="flex justify-between py-4">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="py-2">ETHb BALANCE</h3>
            </div>
            <div>
  <h3 className="py-2">{Number(state.ETHbBal).toFixed(2)}</h3>
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="border-r-2 w-full " style={{ height: "70%" }}></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <h3 className="py-2">ETH BALANCE</h3>
            </div>
            <div>
              <h3 className="py-2">{Number(state.ETHBal).toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default YourWalet;
