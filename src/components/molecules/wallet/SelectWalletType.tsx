import React from 'react';
import WalletOption from '../../atomic/wallet/WalletOption';
interface IProps {
    onSelect: Function;
}
function SelectWalletType(props: IProps) {
    return (
        <div className="px-16 pb-16">
            <div className="text-center font-medium w-full text-blue-400 mt-8">Connect your wallet</div>
            <WalletOption onClick={()=>props.onSelect()} text="Metamask" image="assets/Icons/Metamask.svg" />
            <WalletOption onClick={()=>props.onSelect()} text="WalletConnect" image="assets/Icons/WalletConnect.svg" />
            <WalletOption onClick={()=>props.onSelect()} text="Portis" image="assets/Icons/Portis.svg" />
            <WalletOption onClick={()=>props.onSelect()} text="Coinbase Wallet" image="assets/Icons/Coinbase Wallet.svg" />
            <WalletOption onClick={()=>props.onSelect()} text="Formatic" image="assets/Icons/Formatic.svg" />
        </div>
    )
}

export default SelectWalletType