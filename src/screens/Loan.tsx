import CloseLoan from "../components/molecules/loan/CloseLoan";
import CreateLoan from "../components/molecules/loan/CreateLoan";
import EthAsCollateral from "../components/molecules/loan/EthAsCollateral";
import { Link } from "react-router-dom";
import LoanBanner from "../components/atomic/loan/LoanBanner";
import React from "react";
import YourLoans from "../components/molecules/loan/YourLoans";
import YourWalet from "../components/molecules/loan/YourWalet";
function Loan() {
  return (
    <div>
      <LoanBanner />
      <div className="flex px-24 mt-8">
        <div className="flex-1 mr-8">
          <EthAsCollateral />
          <YourWalet />
          <YourLoans />
        </div>
        <div style={{ width: "28%" }}>
          <CreateLoan />
          <CloseLoan />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
export default Loan;
