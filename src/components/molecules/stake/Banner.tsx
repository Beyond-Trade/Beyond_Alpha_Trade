import React from "react";

function Banner() {
  return (
    <div className="flex bg-customGray-100">
      <div className="ml-8 xl:ml-24 md:ml-16 lg:ml-20" style={{width: "50%"}}>
        <h1 className="font-bold" style={{marginTop: '3.5vw', fontSize: '3vw'}}>
          EARN DAILY REWARDS BY STAKING BYN
        </h1>
        <p className="text-sm md:text-lg">
          While making return from your synthetic assets investment,<br/> also enjoy
          your BYN holdings compound on daily basis.
        </p>
      </div>

      <img
        src="assets/Images/header-illustrations.png"
        alt="img"
        style={{width:"50%", height: '30vw'}}
      />

    </div>
  );
}

export default Banner;
