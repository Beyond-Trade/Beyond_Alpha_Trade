import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { updateBalances } from "../../services/wallet.service";
import NavTab from "../atomic/NavTab";
import WalletSection from "../molecules/wallet/WalletSection";

function Navbar() {

  updateBalances();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed((prev)=>!prev)

  return (
    <nav className="bg-customBlue-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>

              {!collapsed&&<svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>}

              {collapsed&&<svg
                className=" h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img src="assets/Images/Logo.png" className="h-8" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavTab
                  path="/stake"
                  text="STAKE"
                  active={location.pathname === "/stake"}
                />
                <NavTab
                  path="/market"
                  text="MARKET"
                  active={location.pathname === "/market"}
                />
                <NavTab
                  path="/trade"
                  text="TRADE"
                  active={location.pathname === "/trade"}
                />
                <NavTab
                  path="/loan"
                  text="LOAN"
                  active={location.pathname === "/loan"}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <WalletSection location={location.pathname} />
          </div>
        </div>
      </div>

      {collapsed && <div className="">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div onClick={toggle}>
          <NavTab
            path="/stake"
            text="STAKE"
            active={location.pathname === "/stake"}
          />
          </div>
          <div onClick={toggle}>
          <NavTab
            path="/market"
            text="MARKET"
            active={location.pathname === "/market"}
          />
          </div>
          <div onClick={toggle}>
          <NavTab
            path="/trade"
            text="TRADE"
            active={location.pathname === "/trade"}
          />
          </div>
          <div onClick={toggle}>
          <NavTab
            path="/loan"
            text="LOAN"
            active={location.pathname === "/loan"}
          />
          </div>
          <div onClick={toggle}><NavTab path="/" text="WALLET" active={location.pathname === "/"} /></div>
        </div>
      </div>}
    </nav>
  );
}

export default Navbar;
