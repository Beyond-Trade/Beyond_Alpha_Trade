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
      <div className="xl:flex lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8">
        <div className="flex-1 xl:mr-8 xxl:mr-10 lg:mr-8">
          <EthAsCollateral ETH={ETH} />
          <YourWalet />
          <YourLoans />
        </div>
        <div className="xl:w-300 lg:w-300 xxl:w-28% xxxl:1/4">
          <CreateLoan />
          <CloseLoan />
        </div>
      </div>
    </div>
  );
}
export default Loan;
