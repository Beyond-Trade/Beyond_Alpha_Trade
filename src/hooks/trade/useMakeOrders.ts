import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { showAlert } from "../../services/generic.services";
import {
  addTrade,
  convertSynths,
  mintSynth,
} from "../../services/trade.service";
import { RootState } from "../../store/reducers/Index";
import { Balance } from "../../store/types/WalletState";

const useMakeOrders = () => {
  const gasFees = [17, 23, 34];
  const {
    exchange: { selectedPair },
    wallet: { balances },
  } = useSelector((state: RootState) => state);
  const [state, setState] = useState({
    submitting: false,
    isFeeOpen: false,
    fee: gasFees[0],
    to: selectedPair.counter,
    from: selectedPair.base,
    fromBalance: 0,
    toBalance: 0,
    fromRate: 0,
    toRate: 0,
  });
  const [inputs, setInputs] = useState({
    to: "",
    from: "",
    toVal: "",
    fromVal: "",
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      to: selectedPair.counter,
      from: selectedPair.base,
      fromBalance: selectedPair.baseBalance,
      toBalance: selectedPair.counterBalance,
      fromRate: selectedPair.fromRate,
      toRate: selectedPair.toRate,
    }));
  }, [selectedPair]);

  const openFeeModal = () => setState((prev) => ({ ...prev, isFeeOpen: true }));
  const closeFeeModal = () =>
    setState((prev) => ({ ...prev, isFeeOpen: false }));
  const selectFee = (fee: number) =>
    setState((prev) => ({ ...prev, fee: fee, isFeeOpen: false }));

  const toggleBuySell = () => {
    setState((prev) => ({
      ...prev,
      to: prev.from,
      from: prev.to,
      fromBalance: prev.toBalance,
      toBalance: prev.fromBalance,
      fromRate: prev.toRate,
      toRate: prev.fromRate,
    }));
    setInputs((prev) => ({
      ...prev,
      to: "",
      from: "",
      toVal: "",
      fromVal: "",
    }));
  };

  const setPercentage = (percent: number) => {
    let amount = (state.fromBalance * (percent / 100)).toFixed(5);
    const result = percent == 100 ? state.fromBalance : amount;
    setInputs((prev) => ({ ...prev, from: result.toString() }));
  };

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    setState((prev) => ({ ...prev, submitting: true }));
    addTradeAction();
  };

  const addTradeAction = () => {
    addTrade(state.from, state.to, Number(inputs.to), state.fee)
      .then((data) => {
        if (!data) {
          throw Error("Error");
        }
        showAlert({
          title: "Success",
          message: "Order added",
          type: "success",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
        showAlert({
          title: "Error",
          message: "Unable to add order",
          type: "danger",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      });
  };

  const isValidated = () => {
    let validated = true;
    if (inputs.to === "") {
      setInputs((prev) => ({ ...prev, toVal: "This Field is required" }));
      validated = false;
    }
    if (inputs.from === "") {
      setInputs((prev) => ({ ...prev, fromVal: "This Field is required" }));
      validated = false;
    }
    if (state.submitting) {
      validated = false;
    }
    return validated;
  };

  const getPairPrice = (fromRate:number, toRate:number) => {
    if(fromRate===0) return 0
    let result = (1/fromRate)*toRate;
    return result.toFixed(7);
  }

  const handleFromChange = (event: any) => {
    const { value } = event.target;
    const price = getPairPrice(state.fromRate, state.toRate)
    debugger
    setInputs((prev) => ({
      ...prev,
      from: value,
      fromVal: "",
      to: (Number(price)*Number(value)).toString()
    }));
  };
  const handleToChange = (event: any) => {
    const { value } = event.target;
    const price = getPairPrice(state.fromRate, state.toRate)
    setInputs((prev) => ({
      ...prev,
      to: value,
      toVal: "",
      from: (value/Number(price)).toString()
    }));
  };

  return {
    ...state,
    inputs,
    submit,
    openFeeModal,
    closeFeeModal,
    selectFee,
    toggleBuySell,
    handleFromChange,
    handleToChange,
    setPercentage,
  };
};

export default useMakeOrders;
