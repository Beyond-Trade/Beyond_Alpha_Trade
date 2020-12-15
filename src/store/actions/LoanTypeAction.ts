import {
  SWITCH_LOAN_TYPE,
  HANDLE_BORROWED_CHANGE,
  HANDLE_LOCKED_CHANGE,
  GET_LOAN_DETAILS,
  GET_ETH_LOCKED
} from "../actions/LoanTypeActionTypes";

export const setLoanTypeAction = (payload: any) => {
  return { type: SWITCH_LOAN_TYPE, payload };
};
export const handleBorrowed = (payload: any) => {
    console.log(payload,"handleBorrowed")
  return { type: HANDLE_BORROWED_CHANGE, payload };
};
export const handleLocked = (payload: any) => {
    console.log(payload,"handleLocked")
  return { type: HANDLE_LOCKED_CHANGE, payload };
};
export const getLoanDetailsAction=(payload: any) => {
  console.log(payload, "==================getLoanContractDetails in ACTION===================");
  debugger
return { type: GET_LOAN_DETAILS, payload };
};
export const getEthLockedAction=(payload: any) => {
  console.log(payload, "==================getEthLockedAction in ACTION===================");
return { type: GET_ETH_LOCKED, payload };
};