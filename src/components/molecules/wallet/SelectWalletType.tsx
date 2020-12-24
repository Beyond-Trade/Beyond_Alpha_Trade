import React from "react";
import WalletOption from "../../atomic/wallet/WalletOption";

import { web3Sources } from "../../../constants";
interface IProps {
  onSelect: Function;
}
function SelectWalletType(props: IProps) {
  return (
    <div className="px-12 pb-8 flex-col items-center">
      <div className="text-center font-medium w-full text-customBlue-500 font-bold mt-8">
        Connect your wallet
      </div>
      <WalletOption
        onConnected={props.onSelect}
        text="Metamask"
        image="/assets/Icons/Metamask.svg"
        type={web3Sources.Metamask}
      />
      <WalletOption
        onConnected={props.onSelect}
        text="WalletConnect"
        image="/assets/Icons/WalletConnect.svg"
        type={web3Sources.WalletConnect}
      />
      <WalletOption
        onConnected={props.onSelect}
        text="Portis"
        image="/assets/Icons/Portis.svg"
        type={web3Sources.Portis}
      />
      <WalletOption
        onConnected={props.onSelect}
        text="Coinbase Wallet"
        image="/assets/Icons/Coinbase Wallet.svg"
        type={web3Sources.Coinbase}
      />
      <WalletOption
        onConnected={props.onSelect}
        text="Formatic"
        image="/assets/Icons/Formatic.svg"
        type={web3Sources.Fortmatic}
      />
    </div>
  );
}

export default SelectWalletType;
