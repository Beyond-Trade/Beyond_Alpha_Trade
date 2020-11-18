import React from 'react';
import WalletOption from '../../atomic/wallet/WalletOption';

import { Wallet } from '../../../constants';


function SelectWalletType() {
   
    return (
        <div className="px-16 pb-16">
            <div className="text-center font-medium w-full text-blue-400 mt-8">Connect your wallet</div>
            <WalletOption text="Metamask" image="assets/Icons/Metamask.svg" type={Wallet.Metamask}/>
            <WalletOption text="WalletConnect" image="assets/Icons/WalletConnect.svg" type={Wallet.WalletConnect}/>
            <WalletOption text="Portis" image="assets/Icons/Portis.svg" type={Wallet.Portis}/>
            <WalletOption text="Coinbase Wallet" image="assets/Icons/Coinbase Wallet.svg" type={Wallet.Coinbase}/>
            <WalletOption text="Formatic" image="assets/Icons/Formatic.svg" type={Wallet.Fortmatic}/>
        </div>
    )
}



export default SelectWalletType