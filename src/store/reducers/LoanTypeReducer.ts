import {
  SWITCH_LOAN_TYPE,
  HANDLE_BORROWED_CHANGE,
  HANDLE_LOCKED_CHANGE,
} from "../actions/LoanTypeActionTypes";

const initialState = {
  loanType: "ETHb",
  locked: "",
  borrowed: "",
  lockedErr: "",
  USDValue:"0"
};

export function LoanTypeReducer(state = initialState, action: any) {
  console.log(action.payload);
  switch (action.type) {
    case SWITCH_LOAN_TYPE:
      return {
        ...state,
        loanType: action.payload,
        locked: "",
        borrowed: "",
        lockedErr: "",
        USDValue:"0"
      };
    case HANDLE_BORROWED_CHANGE:
      return {
        ...state,
        locked: action.payload.locked,
        borrowed: action.payload.borrowed,
        USDValue:action.payload.USDValue
      };
      case HANDLE_LOCKED_CHANGE:
      return {
        ...state,
        locked: action.payload.locked,
        borrowed: action.payload.borrowed,
        USDValue:action.payload.USDValue,
      };
    default:
      return state;
  }
}
