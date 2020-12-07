import { combineReducers } from "redux";
import { exchangeReducer } from "./exchangeReducer";
import { LoanTypeReducer } from "./LoanTypeReducer";
import { userReducer } from "./UserReducer";
import { walletReducer } from "./WalletReducer";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  exchange: exchangeReducer,
  loan:LoanTypeReducer
});
export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
