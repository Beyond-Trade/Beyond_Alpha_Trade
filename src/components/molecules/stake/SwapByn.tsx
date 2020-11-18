import React from "react";
import GeneralTab from "../../atomic/stake/GeneralTab";

interface IProps {}
function SwapByn(props: IProps) {
  return (
    <div className="bg-customGray-100 mt-6 py-10 px-10">
      <h3 className="text-lg font-bold">POOL</h3>
      <div className="flex">
        <div className="w-full">
          <p className="text-xs font-medium text-blue-300 mt-6">
            Onboard beyond Exchange by swapping your ETH <br />or other ERC20 tokens
            into BYN. <br />Stake trade make profit earn reward. <br />Everything starts
            from here.
          </p>
          <img src="assets/Icons/pool.svg" className="h-24 m-auto mt-10" />
        </div>
        <div className="w-full px-6">
            <GeneralTab tabs={['SWAP', 'POOL']} onClick={()=>{}} index={0} />
            <div className="flex border border-blue-600 rounded-sm py-1 px-2 mt-6">
                <div className="w-full">
                    <h6 className="text-xxs font-medium">From</h6>
                    <input className="focus:outline-none mt-2 bg-customGray-100 font-medium" value={0.00} />
                </div>
                <div className="text-right">
                    <h6 className="text-xxs font-medium break-normal">Balance: 0</h6>
                    <div className="flex items-center w-16 text-right justify-end mt-2">
                        <img src="assets/Icons/eth-small.svg" className="h-4" />
                        <h4 className="font-medium text-sm ml-1">ETH</h4>
                        <img src="assets/Icons/arrow-down.svg" className="w-2 ml-1" />
                    </div>
                </div>
            </div>
            <img src="assets/Icons/Icon material-add.svg" className="mt-6 m-auto h-4" />
            <div className="flex border border-blue-600 rounded-sm py-1 px-2 mt-6">
                <div className="w-full">
                    <h6 className="text-xxs font-medium">To</h6>
                    <input className="focus:outline-none mt-2 bg-customGray-100 font-medium" value={0.00} />
                </div>
                <div className="text-right">
                    <h6 className="text-xxs font-medium">-</h6>
                    <div className="flex items-center w-24 mt-3 bg-blue-300 justify-center text-white">
                        <h4 className="text-xxs">Select a token</h4>
                        <img src="assets/Icons/arrow-dropdown.svg" className="w-2 ml-1" />
                    </div>
                </div>
            </div>
            <button className="focus:outline-none bg-customBlue-200 text-white text-xs w-full rounded py-2 mt-8">ENTER AN AMOUNT</button>
        </div>
      </div>
    </div>
  );
}

export default SwapByn;