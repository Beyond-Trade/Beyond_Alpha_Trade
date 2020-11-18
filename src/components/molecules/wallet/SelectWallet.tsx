import React from "react";
interface IProps {
    onBack: Function
}
function SelectWallet(props: IProps) {
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
        {[1, 1, 1, 1].map((item) => (
          <button className="focus:outline-none w-full text-xs font-medium border border-gray-600 rounded flex justify-between px-2 py-4 mt-3">
            <text>0XB8B...8F6DA</text>
            <text>0</text>
            <text>0</text>
            <text>0</text>
            <img src="assets/Icons/etherscan-logo-circle.svg" className="h-4" />
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-16">
          <h6 className="text-gray-300 text-xs font-medium">PAGE 1</h6>
          <button onClick={()=>props.onBack()} className="focus:outline-none text-sm font-semibold">BACK TO WALLET SELECTION</button>
      </div>
    </div>
  );
}

export default SelectWallet;
