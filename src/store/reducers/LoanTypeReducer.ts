import {
  SWITCH_LOAN_TYPE,
  HANDLE_BORROWED_CHANGE,
  HANDLE_LOCKED_CHANGE,
  GET_LOAN_DETAILS,
  GET_ETH_LOCKED,
} from "../actions/LoanTypeActionTypes";

const initialState = {
  loanType: "ETHb",
  locked: "",
  borrowed: "",
  lockedErr: "",
  USDValue: "0",
  OpenLoansNo: "",
  interestFee: "",
  ETHbSupply: "",
  USDbSupply: "",
  collatRatio: "",
  ethLocked: "",
};

export function LoanTypeReducer(state = initialState, action: any) {
  console.log(action.payload, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  switch (action.type) {
    case SWITCH_LOAN_TYPE:
      return {
        ...state,
        loanType: action.payload,
        locked: "",
        borrowed: "",
        lockedErr: "",
        USDValue: "0",
      };
    case HANDLE_BORROWED_CHANGE:
      return {
        ...state,
        locked: action.payload.locked,
        borrowed: action.payload.borrowed,
        USDValue: action.payload.USDValue,
      };
    case HANDLE_LOCKED_CHANGE:
      return {
        ...state,
        locked: action.payload.locked,
        borrowed: action.payload.borrowed,
        USDValue: action.payload.USDValue,
      };
    case GET_LOAN_DETAILS:
      return {
        ...state,
        OpenLoansNo: action.payload._openLoans || "0",
        interestFee: action.payload._loanFeeRatio || "0",
        ETHbSupply: action.payload._totalETHb || "0",
        USDbSupply: action.payload._totalUSDb || "0",
        collatRatio: action.payload._loanCollatteralRatio || "0",
      };
    case GET_ETH_LOCKED:
      return {
        ...state,
        ethLocked: action.payload || "0",
      };
    default:
      return state;
  }
}
