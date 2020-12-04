import { stat } from "fs";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { getLoan,getLoanUSDb,returnLoan,returnLoanUSDb } from "../../services/loan.service";
import { addTrade } from "../../services/trade.service";
import { RootState } from "../../store/reducers/Index";
import { Balance } from "../../store/types/WalletState";

const useCreateLoan = () => {
  const { balances } = useSelector((state: RootState) => state.wallet);
  const gasFees = [1, 23, 34];
  const {
    exchange: { selectedPair },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [state, setState] = useState({
    isSubmitting: false,
    isReturning:false,
    USDb: { cryptoBalance: 0, rate: 0 },
    ETHb: { cryptoBalance: 0, rate: 0 },
    ETH: { cryptoBalance: 0, rate: 0 },
    USDValue:0,
    fee: gasFees[0],
    loanType: "ETHb",
    rate: 0,
    locked: "",
    lockedErr:"",
    borrowed: "",
  });
  //   const [loanState, setLoanState] = useState({ , });

  useEffect(() => {
    const USDbObj: any = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.USDb
    );
    const ETHbObj: any = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETHb
    );
    const ETHObj: any = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.ETH
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

  const submit = (isMatchedType:any) => {
    if (!isValidated()) {
        console.log(state.locked,"SUBMIT IS Cancled=========")
      return;
    }
    // addTradeAction();
    console.log(state.locked,"SUBMIT IS CALLED")
     getLoanAction(isMatchedType,)
  };

    const getLoanAction = (type:any) => {
        debugger
        if(type === "ETHb" ){
            setState((prev) => ({ ...prev, isSubmitting: true }));
            getLoan(state.locked)
            .then((data) => {
              if (!data) {
                throw Error("Error");
              }
              alert.show("Loan added", { type: "success" });
              setState((prev) => ({ ...prev, isSubmitting: false }));
            })
            .catch((e) => {
              console.log("Error!", e);
    
              alert.show("Unable to add loan", { type: "error" });
              setState((prev) => ({ ...prev, isSubmitting: false }));
            });
        }
        else{
            setState((prev) => ({ ...prev, isSubmitting: true }));
            getLoanUSDb(state.locked)
            .then((data) => {
              if (!data) {
                throw Error("Error");
              }
              alert.show("Loan", { type: "success" });
              setState((prev) => ({ ...prev, isSubmitting: false }));
            })
            .catch((e) => {
              console.log("Error!", e);
    
              alert.show("Unable", { type: "error" });
              setState((prev) => ({ ...prev, isSubmitting: false }));
            });
        }
        
    };

    const returnLoanAction=(type:any)=>{
        if(type === "ETHb" ){
            setState((prev) => ({ ...prev, isReturning: true }));
            returnLoan()
            .then((data) => {
              if (!data) {
                throw Error("Error");
              }
              alert.show("ETHb Loan returned", { type: "success" });
              setState((prev) => ({ ...prev, isReturning: false }));
            })
            .catch((e) => {
              console.log("Error!", e);
    
              alert.show("Unable return ETHb loan", { type: "error" });
              setState((prev) => ({ ...prev, isReturning: false }));
            });
        }
        else{
            setState((prev) => ({ ...prev, isReturning: true }));
            returnLoanUSDb()
            .then((data) => {
              if (!data) {
                throw Error("Error");
              }
              alert.show("USDb Loan returned", { type: "success" });
              setState((prev) => ({ ...prev, isReturning: false }));
            })
            .catch((e) => {
              console.log("Error!", e);
    
              alert.show("Unable return USDb loan", { type: "error" });
              setState((prev) => ({ ...prev, isReturning: false }));
            });
        }
    }
  const isValidated = () => {
    let validated = true;
    if (state.locked === "") {
        setState((prev) => ({ ...prev, lockedErr: "This Field is required" }));
      validated = false;
    }
    
    if (Number(state?.locked) > state?.ETH?.cryptoBalance) {
        setState((prev) => ({ ...prev, lockedErr: "Not enough balance" }));
      validated = false;
    }
   
    return validated;
  };

  const getPairPrice = (fromRate: number, toRate: number) => {
    if (fromRate === 0) return 0;
    let result = (1 / toRate) * fromRate;
    return result;
  };

  const handleLockedChange = (event: any, type: String) => {
    const { value } = event.target;
    // const price = getPairPrice(state.fromRate, state.toRate);
    let actualLoan = ((value / 100) * 80).toString();
    let USDValueBorrowed=((value * state.ETH.rate) / 100) * 80
    console.log("before if block", type);
    if (type === "USDb") {
      console.log("in if block ");
      actualLoan = (((value * state.ETH.rate) / 100) * 80).toString();
    }
    setState((prev) => ({
      ...prev,
      locked: value,
      borrowed: actualLoan,
      USDValue:USDValueBorrowed
      //   to: (Number(price) * Number(value)).toString(),
    }));
  };
  const handleBorrowedChange = (event: any,type:any) => {
    const { value } = event.target;
    // const price = getPairPrice(state.fromRate, state.toRate);
    // const from = price === 0 ? "0" : (Number(value) / Number(price)).toString();
    let actualLoan = ((value / 100) * 20 + Number(value)).toString();
    let USDValueBorrowed=value * state.ETH.rate
    console.log(USDValueBorrowed)
    console.log("before if block", type);
    if (type === "USDb") {
        console.log("in if block ");
        USDValueBorrowed=value;
        let valueToDeduct=((value / state.ETH.rate) / 100)*20
        console.log(valueToDeduct,"valueToDeduct")
        actualLoan = ((value / state.ETH.rate + valueToDeduct)).toString();
      }
    setState((prev) => ({
      ...prev,
      locked: actualLoan,
      borrowed: value,
      USDValue:USDValueBorrowed
    }));
  };
  const handleUSDb = () => {
    setState((prev) => ({
      ...prev,
      loanType: "ETHb",
      rate: state.ETHb.rate,
    }));
  };
  const handleETHb = () => {
    setState((prev) => ({
      ...prev,
      loanType: "USDb",
      rate: state.USDb.rate,
    }));
  };
  useEffect(() => {
    console.log(
      "=================LOAN TYPE IS CHANGED==========",
      state.loanType
    );
  }, [state.loanType]);
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
    handleUSDb,
    handleETHb,
  };
};

export default useCreateLoan;
