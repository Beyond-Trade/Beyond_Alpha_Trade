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
      <div className="xl:flex lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8">
        <div className="flex-1 xl:mr-8 lg:mr-8">
          <EthAsCollateral />
          <YourWalet />
          <YourLoans />
        </div>
        <div className="xl:w-300 lg:w-300 xxl:w-1/3 xxxl:1/3">
          <CreateLoan />
          <CloseLoan />
        </div>
      </div>
    </div>
  );
}
export default Loan;
