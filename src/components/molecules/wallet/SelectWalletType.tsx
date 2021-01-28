import React from "react";
import WalletOption from "../../atomic/wallet/WalletOption";

import { web3Sources } from "../../../constants";
interface IProps {
  onSelect: Function;
}
function SelectWalletType(props: IProps) {
  return (
    <div className="px-12 pb-8 flex-col items-center">
      
      <div className="md:flex">
        <div className="font-medium w-full text-white text-lg font-bold mt-4 mr-6">
        Connect wallet
      </div>
      <WalletOption
        onConnected={props.onSelect}
        text="Metamask"
        image="/assets/Icons/Metamask.svg"
        type={web3Sources.Metamask}
        style="mr-6"
      />
      <WalletOption
        onConnected={props.onSelect}
        text="WalletConnect"
        image="/assets/Icons/WalletConnect.svg"
        type={web3Sources.WalletConnect}
        style=""
      />
      </div>
      <div className="md:flex">
      <WalletOption
        onConnected={props.onSelect}
        text="Portis"
        image="/assets/Icons/Portis.svg"
        type={web3Sources.Portis}
        style="mr-6"
      />
      <WalletOption
        onConnected={props.onSelect}
        text="Coinbase Wallet"
        image="/assets/Icons/Coinbase Wallet.svg"
        type={web3Sources.Coinbase}
        style="mr-6"
      />
      <WalletOption
        onConnected={props.onSelect}
        text="Formatic"
        image="/assets/Icons/Formatic.svg"
        type={web3Sources.Fortmatic}
        style=""
      />
      </div>
    </div>
  );
}

export default SelectWalletType;
