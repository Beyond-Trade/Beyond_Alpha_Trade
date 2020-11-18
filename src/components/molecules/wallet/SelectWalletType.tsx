import React from 'react';
import WalletOption from '../../atomic/wallet/WalletOption';

function SelectWalletType() {
    return (
        <div className="px-16 pb-16">
            <div className="text-center font-medium w-full text-blue-400 mt-8">Connect your wallet</div>
            <WalletOption text="Metamask" image="assets/Icons/Metamask.svg" />
            <WalletOption text="WalletConnect" image="assets/Icons/WalletConnect.svg" />
            <WalletOption text="Portis" image="assets/Icons/Portis.svg" />
            <WalletOption text="Coinbase Wallet" image="assets/Icons/Coinbase Wallet.svg" />
            <WalletOption text="Formatic" image="assets/Icons/Formatic.svg" />
        </div>
    )
}

export default SelectWalletType