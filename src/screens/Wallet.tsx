import React, { useState } from "react";
import WalletBanner from "../components/atomic/wallet/WalletBanner";
import History from "../components/molecules/wallet/History";
import StatesRow from "../components/molecules/wallet/StatesRow";
import WalletData from "../components/molecules/wallet/WalletData";
import Footer from "../components/organisms/Footer";

function Wallet() {
    const [tab, setTab] = useState(0)
  return (
    <div>
      <WalletBanner tab={tab} setTab={setTab} />
      {tab=== 0 && <StatesRow />}
      {tab=== 0 && <WalletData />}
      {tab=== 1 && <History />}
      <Footer />
    </div>
  );
}

export default Wallet;
