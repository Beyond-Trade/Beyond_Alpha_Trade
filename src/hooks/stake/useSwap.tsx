import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { buyBYNToken, BYNTokenValue } from "../../services/swap.service";
import { updateBalances } from "../../services/wallet.service";
import { RootState } from "../../store/reducers/Index";
import { Balance } from "../../store/types/WalletState";

const useSwap = () => {
  const { balances, selected } = useSelector(
    (state: RootState) => state.wallet
  );
  const alert = useAlert();

  const [state, setState] = useState({
    swapping: false,
    from: "",
    to: "",
    fromVal: "",
    balance: 0,
    rate: 0,
  });

  useEffect(() => {
    initialize();
  }, [balances]);

  const initialize = async () => {
    const balance = balances.find((balance) => balance.isEther);
    // @ts-ignore
    //let byninEthPrice = ((balance?.rate||0) / (BYNObj?.rate||0))
    let tokenValue: number = await BYNTokenValue();
    if (balance) {
      setState((prev) => ({
        ...prev,
        balance: balance.cryptoBalance,
        rate: tokenValue,
      }));
    }
  };

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    buyTokens();
  };

  const buyTokens = () => {
    setState((prev) => ({ ...prev, swapping: true }));

    buyBYNToken(state.from)
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        alert.show("Get BYN successful", { type: "success" });
        updateBalances();
        setState((prev) => ({ ...prev, swapping: false, from: "", to: "" }));
      })
      .catch((e) => {
        console.log("e", e);
        alert.show("Unable to Get BYN", { type: "error" });
        setState((prev) => ({ ...prev, swapping: false }));
      });
  };

  const isValidated = () => {
    let validated = true;
    if (state.from === "") {
      setState((prev) => ({ ...prev, fromVal: "This field is required" }));
      validated = false;
    }
    if (Number(state.from) <= 0) {
      setState((prev) => ({ ...prev, fromVal: "Please enter a valid amount" }));
      validated = false;
    }
    if (Number(state.from) > state.balance) {
      setState((prev) => ({
        ...prev,
        fromVal: "Not enough balance",
      }));
      validated = false;
    }
    if (state.swapping) {
      validated = false;
    }
    return validated;
  };
  const setMax = () =>
    setState((prev) => ({
      ...prev,
      from: state.balance.toString(),
      to: String(state.balance * prev.rate),
    }));

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
      [name + "Val"]: "",
      to: String(Number(value) * prev.rate),
    }));
  };

  return { ...state, submit, setMax, handleInputChange };
};

export default useSwap;
