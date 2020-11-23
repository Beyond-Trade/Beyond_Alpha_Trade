import React from "react";
function PrivacyPolicyBanner() {
  return (
    <>
      <div className="bg-customGray-100 relative flex">
        <div className="w-full"></div>
        <img
          src="assets/Images/header-illustrations.png"
          alt="img"
          className="h-56 content-end"
        />
        <div className="absolute inset-0 flex items-center ">
          <div className="text-center ml-36" style={{ marginLeft: "40px" }}>
            <h1 className="text-3xl font-bold">PRIVACY POLICY</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default PrivacyPolicyBanner;