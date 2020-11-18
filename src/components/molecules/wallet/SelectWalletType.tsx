import React from 'react';
import WalletOption from '../../atomic/wallet/WalletOption';

import { web3Sources } from '../../../constants';
interface IProps {
    onSelect: Function;
}
function SelectWalletType(props: IProps) {
   
    return (
        <div className="px-16 pb-16">
            <div className="text-center font-medium w-full text-blue-400 mt-8">Connect your wallet</div>
            <WalletOption text="Metamask" image="assets/Icons/Metamask.svg" type={web3Sources.Metamask}/>
            <WalletOption text="WalletConnect" image="assets/Icons/WalletConnect.svg" type={web3Sources.WalletConnect}/>
            <WalletOption text="Portis" image="assets/Icons/Portis.svg" type={web3Sources.Portis}/>
            <WalletOption text="Coinbase Wallet" image="assets/Icons/Coinbase Wallet.svg" type={web3Sources.Coinbase}/>
            <WalletOption text="Formatic" image="assets/Icons/Formatic.svg" type={web3Sources.Fortmatic}/>
        </div>
    )
}



export default SelectWalletType