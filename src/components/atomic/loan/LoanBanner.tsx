import React from "react";
function LoanBanner() {
  return (
    <>
      <div className="bg-customGray-100 relative">
        <div className="w-full"></div>
        <img src="assets/Images/Group 859.png" alt="img" className="h-56" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">LOAN</h1>
            <small className="text-gray-600">Manage Your Loans Easily.</small>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoanBanner;
