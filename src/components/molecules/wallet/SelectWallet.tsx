import { useDispatch, useSelector } from "react-redux";

import { EtherscanBrowsUrl } from "../../../constants";
import Loader from "react-loader-spinner";
import React from "react";
import { RootState } from "../../../store/reducers/Index";
import { SetSelectedWalletAction } from "../../../store/actions/WalletActions";
interface IProps {
  onBack: Function;
}
function SelectWallet(props: IProps) {
  const dispatch = useDispatch();
  const { wallets, loadingBalance } = useSelector(
    (state: RootState) => state.wallet
  );
  const changeSelectedWallet = async (wallet: any): Promise<any> => {
    dispatch(SetSelectedWalletAction(wallet));
  };
  console.log(wallets);
  return (
    <div className="px-6 pb-2">
      <div className="text-center font-medium w-full text-green-400 mt-8">
        Select your wallet
      </div>
      <div>
        <div className="text-xs font-medium flex justify-between px-2">
          <h6>Wallet Address</h6>
          <h6>BYN</h6>
          <h6>USDb</h6>
          <h6>ETH</h6>
          <div />
        </div>
        {loadingBalance && (
          <div className="flex justify-center items-center mt-6">
            <Loader type="Bars" color="#5183BF" height={30} width={30} />
          </div>
        )}
        {!loadingBalance &&
          wallets.map((item) => (
            <button
              className="focus:outline-none w-full text-xs font-medium border border-gray-600 rounded flex justify-between px-2 py-4 mt-3"
              onClick={() => {
                changeSelectedWallet(item);
              }}
            >
              <text>
                {item.address.slice(0, 5) + "..." + item.address.slice(-5)}
              </text>
              <text>{item.BYNBalance}</text>
              <text>{item.USDbBalance}</text>
              <text>{item.EthBalance.toFixed(4)}</text>
              <a target="_blank" href={EtherscanBrowsUrl + item.address}>
                {" "}
                <img
                  src="/assets/Icons/etherscan-logo-circle.svg"
                  className="h-4"
                />
              </a>
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
