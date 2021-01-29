import CloseLoan from "../components/molecules/loan/CloseLoan";
import CreateLoan from "../components/molecules/loan/CreateLoan";
import EthAsCollateral from "../components/molecules/loan/EthAsCollateral";
import { Link } from "react-router-dom";
import LoanBanner from "../components/atomic/loan/LoanBanner";
import React, { useEffect } from "react";
import YourLoans from "../components/molecules/loan/YourLoans";
import YourWalet from "../components/molecules/loan/YourWalet";
import { getLoan, loanDetails } from "../services/loan.service";
import useCreateLoan from "../hooks/Loan/useCreateLoan";
function Loan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const { ETH } = useCreateLoan();
  return (
    <div>
      <LoanBanner />
      <div className="flex flex-col lg:flex-row px-4 md:px-16 xl:px-24 lg:px-24 mt-8">
        <div className="flex-1 lg:mr-1 mt-2 lg:mt-0 order-2 lg:order-1">
          <EthAsCollateral ETH={ETH} />
          <YourWalet />
          <YourLoans />
        </div>
        <div className="xl:w-300 order-1 lg:order-2 lg:w-300 xxl:w-28% xxxl:1/4">
          <CreateLoan />
          <CloseLoan />
        </div>
      </div>
    </div>
  );
}
export default Loan;
