import React from "react";
function SupportBanner() {
  return (
    <>
      <div className="bg-customGray-100 relative flex">
        <div className="w-full"></div>
        <img
          src="assets/Images/header-illustrations.png"
          alt="img"
          className="xl:h-84 xxl:h-full xl:w-1/2 xxl:w-1/2  content-end"
        />
        <div className="absolute inset-0 flex items-center ">
          <div className="text-center ml-36" style={{ marginLeft: "40px" }}>
            <h1 className="text-3xl font-bold">SUPPORT</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default SupportBanner;
