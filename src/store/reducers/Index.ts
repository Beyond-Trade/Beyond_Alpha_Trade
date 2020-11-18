import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { walletReducer } from "./WalletReducer";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});
export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;