import { combineReducers } from "redux";
import { exchangeReducer } from "./exchangeReducer";
import { userReducer } from "./UserReducer";
import { walletReducer } from "./WalletReducer";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  exchange: exchangeReducer
});
export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
