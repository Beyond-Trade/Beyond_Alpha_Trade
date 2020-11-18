import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
import NavTab from "../../atomic/NavTab";
import SelectWalletModal from "./SelectWalletModal";

interface IProps {
  location: string;
}
function WalletSection(props: IProps) {
  const { isConnected, selected } = useSelector(
    (state: RootState) => state.wallet
  );

  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="flex items-center">
        <NavTab path="/" text="WALLET" active={props.location === "/"} />
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-1 rounded-sm bg-customBlue-200 text-white text-xs ml-12 flex items-center"
        >
          <img src="assets/Icons/wallet-icon.svg" className="mr-2 h-3" />
          {!isConnected && "Connect Wallet"}
          {isConnected && (
            <div className="h-2 w-2 bg-green-200 rounded mr-1 mt-1" />
          )}
          {isConnected &&
            selected?.address.slice(0, 5) + "..." + selected?.address.slice(-5)}
        </button>
      </div>
      
        <SelectWalletModal isOpen={isOpen} close={() => setOpen(false)} />
      
    </Fragment>
  );
}

export default WalletSection;
