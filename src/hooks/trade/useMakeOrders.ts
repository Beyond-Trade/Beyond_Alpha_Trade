import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { showAlert } from "../../services/generic.services";
import { addTrade, convertSynths, mintSynth } from "../../services/trade.service";
import { RootState } from "../../store/reducers/Index";

const useMakeOrders = () => {
  const gasFees = [17, 23, 34];
  const { selectedPair } = useSelector((state: RootState) => state.exchange);
  const [state, setState] = useState({
    submitting: false,
    isFeeOpen: false,
    fee: gasFees[0],
    to: selectedPair.counter,
    from: selectedPair.base,
    fromBalance: 0,
    toBalance: 0
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
      toBalance: selectedPair.counterBalance
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
    }));
    setInputs((prev) => ({
      ...prev,
      to: "",
      from: "",
      toVal: "",
      fromVal: "",
    }));
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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
      [name + "Val"]: "",
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
    handleInputChange,
  };
};

export default useMakeOrders;
