import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
interface IProps {
  onBack: Function;
}
function SelectWallet(props: IProps) {
  const { wallets } = useSelector((state: RootState) => state.wallet);
  const changeSelectedWallet = async (value: any): Promise<any> => {
   
  };
  return (
    <div className="px-6 pb-2">
      <div className="text-center font-medium w-full text-green-400 mt-8">
        Select your wallet
      </div>
      <div>
        <div className="text-xs font-medium flex justify-between px-2">
          <h6>Wallet Address</h6>
          <h6>BYN</h6>
          <h6>sUSD</h6>
          <h6>ETH</h6>
          <div />
        </div>
        {wallets.map((item) => (
          <button className="focus:outline-none w-full text-xs font-medium border border-gray-600 rounded flex justify-between px-2 py-4 mt-3"
          onClick={() => {
            connectToWallet(item);
          }}
          >
            <text>
              {item.address.slice(0, 5) + "..." + item.address.slice(-5)}
            </text>
            <text>{parseFloat(item.BYNBalance.toString()).toFixed(2)}</text>
            <text>{item.USDbBalance > 0?item.USDbBalance.toFixed(4):'00.00'}</text>
            <text>{item.EthBalance.toFixed(4)}</text>
            <img src="assets/Icons/etherscan-logo-circle.svg" className="h-4" />
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-16">
        <h6 className="text-gray-300 text-xs font-medium">PAGE 1</h6>
        <button
          onClick={() => props.onBack()}
          className="focus:outline-none text-sm font-semibold"
        >
          BACK TO WALLET SELECTION
        </button>
      </div>
    </div>
  );
}

export default SelectWallet;
