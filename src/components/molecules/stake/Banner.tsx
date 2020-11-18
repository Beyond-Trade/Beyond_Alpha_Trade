import React from "react";

function Banner() {
  return (
    <div className="flex bg-customGray-100">
      <div className="w-full">
        <h1 className="text-3xl font-bold pl-24 mt-20">
          EARN DAILY REWARDS BY STAKING BYN
        </h1>
        <p className="text-lg ml-24">
          While making return from your synthetic assets investment, also enjoy
          your BYN holdings compound on daily basis.
        </p>
      </div>
      <img src="assets/Images/header-Illustrations.png" className="h-94" />
    </div>
  );
}

export default Banner;
