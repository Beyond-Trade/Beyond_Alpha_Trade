import React, { Fragment, useState } from "react";

import NavTab from "../../atomic/NavTab";
import { RootState } from "../../../store/reducers/Index";
import SelectWalletModal from "./SelectWalletModal";
import { useSelector } from "react-redux";

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
        <div className="hidden xl:block lg:block">
          <NavTab path="/" text="WALLET" active={props.location === "/"} />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-1 rounded-sm bg-customBlue-200 text-white xl:text-xs xxl:text-lg ml-12 flex items-center"
        >
          <img
            src="assets/Icons/wallet-icon.svg"
            alt="img"
            className="mr-2 h-3"
          />
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
