import React from "react";

function Banner() {
  return (
    <div className="flex bg-customGray-100">
      <div className="w-full ml-8 xl:ml-24 md:ml-16 lg:ml-20">
        <h1 className="text-3xl font-bold mt-20">
          EARN DAILY REWARDS BY STAKING BYN
        </h1>
        <p className="text-lg">
          While making return from your synthetic assets investment, also enjoy
          your BYN holdings compound on daily basis.
        </p>
      </div>
      <img
        src="assets/Images/header-illustrations.png"
        alt="img"
        className="h-56 sm:h-56 md:h-64 lg:h-94 xl:h-94"
      />
    </div>
  );
}

export default Banner;
