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
  console.log(wallets,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
  return (
    <div className="px-6 pb-2">
      <div className="text-center font-medium w-full text-green-400 mt-8">
        Select your wallet
      </div>
      <div>
      <table width="100%">
        <tr className="text-xxs xxl:text-xs text-left font-medium text-xs  px-2">
          <td className="w-1/5">
          Wallet Address
          </td>
          <td className="w-1/5 px-2">
          BYN
          </td>
          <td className="w-1/5 px-2">
          USDb
          </td>
          <td className="w-1/5 px-2">
          ETH
          </td>
          <td className="w-1/5 px-2">
          
          </td>
          </tr>
          {!loadingBalance &&
          wallets.map((item) => (
            <tr
              className="text-left px-2 py-4 mt-3"
              onClick={() => {
                changeSelectedWallet(item);
              }}
            >
              <td className="px-2">
                {item.address.slice(0, 5) + "..." + item.address.slice(-5)}
              </td>
              <td className="px-2">{item.BYNBalance.toFixed(2)}</td>
              <td className="px-2">{item.USDbBalance.toFixed(2)}</td>
              <td className="px-2">{item.EthBalance.toFixed(2)}</td>
              <td className="px-2"><a target="_blank" href={EtherscanBrowsUrl + item.address}>
                {" "}
                <img
                  src="/assets/Icons/etherscan-logo-circle.svg"
                  className="h-4"
                />
              </a></td>
            </tr>
          ))}
          </table>
        {/* <div className="text-xs font-medium flex justify-between px-2">
          <h6>Wallet Address</h6>
          <h6>BYN</h6>
          <h6>USDb</h6>
          <h6>ETH</h6>
          <div />
        </div> */}
        {loadingBalance && (
          <div className="flex justify-center items-center mt-6">
            <Loader type="Bars" color="#5183BF" height={30} width={30} />
          </div>
        )}
        {/* {!loadingBalance &&
          wallets.map((item) => (
            <tr
              className="focus:outline-none w-full text-xs font-medium border border-gray-600 rounded flex justify-between px-2 py-4 mt-3"
              onClick={() => {
                changeSelectedWallet(item);
              }}
            >
              <td className="py-3 px-3">
                {item.address.slice(0, 5) + "..." + item.address.slice(-5)}
              </td>
              <td className="py-3 px-3">{item.BYNBalance}</td>
              <td className="py-3 px-3">{item.USDbBalance}</td>
              <td className="py-3 px-3">{item.EthBalance.toFixed(4)}</td>
              <a target="_blank" href={EtherscanBrowsUrl + item.address}>
                {" "}
                <img
                  src="/assets/Icons/etherscan-logo-circle.svg"
                  className="h-4"
                />
              </a>
            </tr>
          ))} */}
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
