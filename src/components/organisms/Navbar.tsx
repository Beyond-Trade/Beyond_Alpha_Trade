import { useHistory, useLocation } from "react-router-dom";
import React, { Fragment, useState } from "react";
import NavTab from "../atomic/NavTab";
import WalletSection from "../molecules/wallet/WalletSection";
import { updateBalances } from "../../services/wallet.service";
import { slide as Menu } from "react-burger-menu";

function Navbar() {
  const history = useHistory();
  updateBalances();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const [menuOpenState, setMenuOpenState] = useState(false);
  const stateChangeHandler = (newState: any) =>
    setMenuOpenState(newState.isOpen);
  const handleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  const isAbsolute = () => {
    let absolute = true;
    if (history.location.pathname === "/trade") {
      absolute = false;
    }
    if (history.location.pathname === "/market") {
      absolute = false;
    }
    if (history.location.pathname === "/loan") {
      absolute = false;
    }
    return absolute;
  };

  return (
    <Fragment>
      <Menu
        disableAutoFocus
        customBurgerIcon={false}
        isOpen={menuOpenState}
        onStateChange={(state) => stateChangeHandler(state)}
      >
        <div onClick={handleMenu} className="bm-item">
          <NavTab
            path="/stake/get_byn"
            text="STAKE"
            active={location.pathname === "/stake"}
          />
        </div>
        <div onClick={handleMenu} className="bm-item">
          <NavTab
            path="/market"
            text="MARKET"
            active={location.pathname === "/market"}
          />
        </div>
        <div onClick={handleMenu} className="bm-item">
          <NavTab
            path="/trade"
            text="TRADE"
            active={location.pathname === "/trade"}
          />
        </div>
        <div onClick={handleMenu} className="bm-item">
          <NavTab
            path="/loan"
            text="LOAN"
            active={location.pathname === "/loan"}
          />
        </div>
        <div onClick={handleMenu} className="bm-item">
          <NavTab path="/" text="WALLET" active={location.pathname === "/"} />
        </div>
      </Menu>
      <nav
        className={`${
          isAbsolute()
            ? "bg-transparent absolute top-0 left-0 right-0"
            : "bg-black"
        } z-10`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 xxl:py-4">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={handleMenu}
              >
                <span className="sr-only">Open main menu</span>

                <svg
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
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  src="/assets/Images/beyond.svg"
                  className="h-10 lg:h-12 xxl:h-16"
                  onClick={() => history.push("/market")}
                />
              </div>
              <div className="hidden sm:block md:ml-6">
                <div className="flex space-x-4 h-full items-center">
                  <NavTab
                    path="/stake/get_byn"
                    text="STAKE"
                    active={location.pathname.split("/")[1] === "stake"}
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
      </nav>
    </Fragment>
  );
}

export default Navbar;
