import React from "react";

function Banner() {
  return (
    <div className="bg-customGray-100 relative">
        <div className="w-full"></div>
        <img
          src="/assets/Images/header1.jpg"
          alt="img"
          style={{height: "25vw",width:"100%"}}
        />
        <div className="absolute inset-0 flex items-center px-20">
          <div className="">
            <h1 className="font-bold text-white" style={{fontSize: '2.6vw'}}>EARN DAILY REWARDS BY STAKING BYN</h1>
            <small className="text-white"> while making return from your synthetic asset investments,<br/>
            also enjoy your BYN holdings compound on a daily basis.</small>
          </div>
        </div>
      </div>
    
  );
}

export default Banner;
