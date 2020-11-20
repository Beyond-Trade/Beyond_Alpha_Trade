import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showAlert } from "../../services/generic.services";
import { buyBYNToken } from "../../services/swap.service";
import { RootState } from "../../store/reducers/Index";

const useSwap = () => {
  const { balances, selected } = useSelector(
    (state: RootState) => state.wallet
  );
  const [state, setState] = useState({
    swapping: false,
    from: "",
    to: 0,
    fromVal: "",
    balance: 0,
    rate: 2.5,
  });

  useEffect(() => {
    const balance = balances.find((balance) => balance.isEther);
    if (balance) {
      setState((prev) => ({ ...prev, balance: balance.cryptoBalance }));
    }
  }, [balances]);

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
        showAlert({
          title: "Success!",
          message: "Swap successful",
          type: "success",
        });

        setState((prev) => ({ ...prev, swapping: false, from: "", to: 0 }));
      })
      .catch((e) => {
        showAlert({
          title: "Error!",
          message: "Unable to swap",
          type: "danger",
        });
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
        setState((prev) => ({ ...prev, fromVal: "Amount can't be greater than your balance" }));
        validated = false;
      }
    return validated;
  };
  const setMax = () =>
    setState((prev) => ({ ...prev, from: state.balance.toString() }));

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
      [name + "Val"]: "",
      to: Number(value) * prev.rate,
    }));
  };

  return { ...state, submit, setMax, handleInputChange };
};

export default useSwap;
