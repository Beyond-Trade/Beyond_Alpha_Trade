import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavTab from "../atomic/NavTab";
import WalletSection from "../molecules/wallet/WalletSection";

function Navbar() {
  const location = useLocation()

  return (
    <div className="bg-customBlue-300 h-16 flex justify-between items-center px-24">
      <div className="flex items-center">
        <img src="assets/Images/Logo.png" className="h-8" />
        <NavTab path="/stake" text="STAKE" active={location.pathname==='/stake'} />
        <NavTab path="/market" text="MARKET" active={location.pathname==='/market'} />
        <NavTab path="/trade" text="TRADE" active={location.pathname==='/trade'} />
        <NavTab path="/loan" text="LOAN" active={location.pathname==='/loan'} />
      </div>

      <WalletSection location={location.pathname} />
    </div>
  );
}

export default Navbar;