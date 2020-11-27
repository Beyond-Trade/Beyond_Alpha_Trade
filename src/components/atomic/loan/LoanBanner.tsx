import React from "react";
function LoanBanner() {
  return (
    <>
      {/* <div
        className="flex bg-customGray-100 justify-center"
        style={{
          backgroundImage: `url(assets/Images/trade-illustration.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          minHeight: "309px",
          // backgroundSize: "400px 309px",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold ">LOAN</h1>
          <p className="text-lg">Manage Your Loans Easily.</p>
        </div>
      </div> */}

      {/*  */}

      <div className="bg-customGray-100 relative">
        <div className="w-full"></div>
        <img
          src="assets/Images/Group 859.png"
          alt="img"
          style={{height: "25vw"}}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold" style={{fontSize: '2.6vw'}}>LOAN</h1>
            <small className="text-gray-600">Manage Your Loans Easily.</small>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoanBanner;
