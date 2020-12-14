import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import {
  getEthLocked,
  getLoan,
  getLoanContractDetails,
  getLoanUSDb,
  returnLoan,
  returnLoanUSDb,
} from "../../services/loan.service";
import { RootState } from "../../store/reducers/Index";
import { Balance } from "../../store/types/WalletState";
import {
  getEthLockedAction,
  getLoanDetailsAction,
  handleBorrowed,
  handleLocked,
} from "../../store/actions/LoanTypeAction";
import { stat } from "fs";
import { updateBalances } from "../../services/wallet.service";

const useCreateLoan = () => {
  const dispatch = useDispatch();
  const { balances } = useSelector((state: RootState) => state.wallet);
  const { loanType, locked } = useSelector((state: RootState) => state.loan);
  const gasFees = [1, 23, 34];
  const alert = useAlert();
  const [state, setState] = useState({
    isSubmitting: false,
    isReturning: false,
    USDb: { cryptoBalance: 0, rate: 0, icon: "" },
    ETHb: { cryptoBalance: 0, rate: 0, icon: "" },
    ETH: { cryptoBalance: 0, rate: 0, icon: "" },
    USDValue: 0,
    isFeeOpen: false,
    fee: gasFees[0],
    rate: 0,
    locked: "",
    lockedErr: "",
    borrowed: "",
  });
  //   const [loanState, setLoanState] = useState({ , });

  useEffect(() => {
    const USDbObj: any = balances.find(
      (bal: Balance) => bal.short === ERC20Contracts.USDb
    );
    const ETHbObj: any = balances.find(
      (bal: Balance) => bal.short === ERC20Contracts.ETHb
    );
    const ETHObj: any = balances.find(
      (bal: Balance) => bal.short === ERC20Contracts.ETH
    );
    setState((prev) => ({
      ...prev,
      ETH: ETHObj,
      ETHb: ETHbObj,
      USDb: USDbObj,
    }));
    console.log(USDbObj, "USDbObj");
    console.log(ETHbObj, "ETHbObj");
  }, [balances]);

  useEffect(() => {
    getLoanContractDetails().then((res) => {
      getLoanDetailsAction(res);
    });
    getEthLocked().then((res) => {
      getEthLockedAction(res);
    });
  }, [loanType]);

  const openFeeModal = () => setState((prev) => ({ ...prev, isFeeOpen: true }));
  const closeFeeModal = () =>
    setState((prev) => ({ ...prev, isFeeOpen: false }));
  const selectFee = (fee: number, close: boolean) =>
    setState((prev) => ({ ...prev, fee: fee, isFeeOpen: !close }));

  //   const setPercentage = (percent: number) => {
  //     let amount = (state.fromBalance * (percent / 100)).toFixed(5);
  //     const result = percent == 100 ? state.fromBalance : amount;
  //     setInputs((prev) => ({ ...prev, from: result.toString() }));
  //   };

  const submit = (isMatchedType: any) => {
    if (!isValidated()) {
      console.log(state.locked, "SUBMIT IS Cancled=========");
      return;
    }
    // addTradeAction();
    console.log(state.locked, "SUBMIT IS CALLED");
    getLoanAction(isMatchedType);
  };

  const getLoanAction = (type: any) => {
    if (type === "ETHb") {
      setState((prev) => ({ ...prev, isSubmitting: true }));
      getLoan(locked, state.fee)
        .then((data) => {
          if (!data) {
            throw Error("Error");
          }
          alert.show("ETHb Loan added.", { type: "success" });
          updateBalances();
          getLoanContractDetails().then((res) => {
            getLoanDetailsAction(res);
          });
          getEthLocked().then((res) => {
            getEthLockedAction(res);
          });
          setState((prev) => ({
            ...prev,
            isSubmitting: false,
          }));
        })
        .catch((e) => {
          console.log("Error!", e);

          alert.show("Unable to add ETHb loan", { type: "error" });
          setState((prev) => ({
            ...prev,
            isSubmitting: false,
          }));
        });
    } else {
      setState((prev) => ({ ...prev, isSubmitting: true }));
      getLoanUSDb(locked, state.fee)
        .then((data) => {
          if (!data) {
            throw Error("Error");
          }
          alert.show("USDb Loan added", { type: "success" });
          updateBalances();
          getLoanContractDetails().then((res) => {
            getLoanDetailsAction(res);
          });
          getEthLocked().then((res) => {
            getEthLockedAction(res);
          });
          setState((prev) => ({ ...prev, isSubmitting: false }));
        })
        .catch((e) => {
          console.log("Error!", e);

          alert.show("Unable to add USDb loan", { type: "error" });
          setState((prev) => ({ ...prev, isSubmitting: false }));
        });
    }
  };

  const returnLoanAction = () => {
    if (loanType === "ETHb") {
      setState((prev) => ({ ...prev, isReturning: true }));
      returnLoan(state.fee)
        .then((data) => {
          if (!data) {
            throw Error("Error");
          }
          alert.show("ETHb Loan returned", { type: "success" });
          updateBalances();
          getLoanContractDetails().then((res) => {
            getLoanDetailsAction(res);
          });
          getEthLocked().then((res) => {
            getEthLockedAction(res);
          });
          setState((prev) => ({ ...prev, isReturning: false }));
        })
        .catch((e) => {
          console.log("Error!", e);

          alert.show("Unable return ETHb loan", { type: "error" });
          setState((prev) => ({ ...prev, isReturning: false }));
        });
    } else {
      setState((prev) => ({ ...prev, isReturning: true }));
      returnLoanUSDb(state.fee)
        .then((data) => {
          if (!data) {
            throw Error("Error");
          }
          alert.show("USDb Loan returned", { type: "success" });
          updateBalances();
          getLoanContractDetails().then((res) => {
            getLoanDetailsAction(res);
          });
          getEthLocked().then((res) => {
            getEthLockedAction(res);
          });
          setState((prev) => ({ ...prev, isReturning: false }));
        })
        .catch((e) => {
          console.log("Error!", e);

          alert.show("Unable return USDb loan", { type: "error" });
          setState((prev) => ({ ...prev, isReturning: false }));
        });
    }
  };
  const isValidated = () => {
    let validated = true;
    if (locked === "") {
      setState((prev) => ({ ...prev, lockedErr: "This Field is required" }));
      validated = false;
    } else if (Number(locked) > state?.ETH?.cryptoBalance) {
      setState((prev) => ({ ...prev, lockedErr: "Not enough balance" }));
      validated = false;
    } else {
      setState((prev) => ({ ...prev, lockedErr: "" }));
    }

    return validated;
  };

  //   const getPairPrice = (fromRate: number, toRate: number) => {
  //     if (fromRate === 0) return 0;
  //     let result = (1 / toRate) * fromRate;
  //     return result;
  //   };

  const handleLockedChange = (event: any) => {
    const { value } = event.target;
    // const price = getPairPrice(state.fromRate, state.toRate);
    let actualLoan = ((value / 100) * 80).toString();
    let USDValueBorrowed = ((value * state?.ETH?.rate) / 100) * 80;
    console.log("before if block", loanType);
    if (loanType === "USDb") {
      console.log("in if block ");
      actualLoan = (((value * state.ETH.rate) / 100) * 80).toString();
    }
    dispatch(
      handleLocked({
        locked: value,
        borrowed: actualLoan,
        USDValue: USDValueBorrowed,
      })
    );
  };
  const handleBorrowedChange = (event: any) => {
    const { value } = event.target;
    // const price = getPairPrice(state.fromRate, state.toRate);
    // const from = price === 0 ? "0" : (Number(value) / Number(price)).toString();
    let actualLoan = ((value / 100) * 20 + Number(value)).toString();
    let USDValueBorrowed = value * state.ETH.rate;
    console.log(USDValueBorrowed);
    console.log("before if block", loanType);
    if (loanType === "USDb") {
      console.log("in if block ");
      USDValueBorrowed = value;
      let valueToDeduct = (value / state.ETH.rate / 100) * 20;
      console.log(valueToDeduct, "valueToDeduct");
      actualLoan = (value / state.ETH.rate + valueToDeduct).toString();
    }
    dispatch(
      handleBorrowed({
        locked: actualLoan,
        borrowed: value,
        USDValue: USDValueBorrowed,
      })
    );
  };

  return {
    ...state,
    submit,
    openFeeModal,
    closeFeeModal,
    selectFee,
    handleLockedChange,
    handleBorrowedChange,
    returnLoanAction,
    // handleSelectLoanType,
    // handleUSDb,
    // handleETHb,
  };
};

export default useCreateLoan;
