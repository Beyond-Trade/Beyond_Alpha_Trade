import {
  SWITCH_LOAN_TYPE,
  HANDLE_BORROWED_CHANGE,
  HANDLE_LOCKED_CHANGE,
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
