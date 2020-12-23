import * as React from "react";

import Banner from "../components/molecules/stake/Banner";
import BottomSection from "../components/organisms/stake/BottomSection";
import FAQ from "../components/organisms/stake/FAQ";
import MidSection from "../components/organisms/stake/MidSection";

function Stake() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <Banner />
      <MidSection />
      <BottomSection />
      <FAQ />
    </div>
  );
}

export default Stake;
