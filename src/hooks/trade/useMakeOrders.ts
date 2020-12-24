import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addTrade } from "../../services/trade.service";
import { updateBalances } from "../../services/wallet.service";
import {
  setMyOrder,
  updateMyLastOrder,
} from "../../store/actions/ExchangeActions";
import { RootState } from "../../store/reducers/Index";

const useMakeOrders = () => {
  const gasFees = [1, 23, 34];
  const {
    exchange: { myOrders, selectedPair },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const alert = useAlert();
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
    fromImage: "",
    toImage: "",
    usdValue: 0,
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
      fromImage: selectedPair.fromImage,
      toImage: selectedPair.toImage,
    }));
    setInputs({ to: "", fromVal: "", from: "", toVal: "" });
  }, [selectedPair]);

  const openFeeModal = () => setState((prev) => ({ ...prev, isFeeOpen: true }));
  const closeFeeModal = () =>
    setState((prev) => ({ ...prev, isFeeOpen: false }));
  const selectFee = (fee: number, close: boolean) =>
    setState((prev) => ({ ...prev, fee: fee, isFeeOpen: !close }));

  const toggleBuySell = () => {
    setState((prev) => ({
      ...prev,
      to: prev.from,
      from: prev.to,
      fromBalance: prev.toBalance,
      toBalance: prev.fromBalance,
      fromRate: prev.toRate,
      toRate: prev.fromRate,
      fromImage: prev.toImage,
      toImage: prev.fromImage,
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
    let amount = state.fromBalance * (percent / 100);
    const price = getPairPrice(state.fromRate, state.toRate);
    const result = percent == 100 ? state.fromBalance : amount;
    setInputs((prev) => ({
      ...prev,
      from: result.toString(),
      to: (Number(price) * Number(amount)).toString(),
    }));
    setState((prev) => ({ ...prev, usdValue: Number(amount) * prev.fromRate }));
  };

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    setState((prev) => ({ ...prev, submitting: true }));
    addTradeAction();
  };

  const addTradeAction = () => {
    const price = getPairPrice(state.fromRate, state.toRate);
    dispatch(
      setMyOrder({
        date: moment().format("MMM Do YY") + " | " + moment().format("LT"),
        pair: state.to + "/" + state.from,
        buying: Number(inputs.to).toFixed(2) + " " + state.to,
        selling: Number(inputs.from).toFixed(2) + " " + state.from,
        price: Number(price).toFixed(2),
        status: "pending",
        infoURL: "",
      })
    );
    addTrade(state.from, state.to, Number(inputs.from), state.fee)
      .then((data) => {
        if (!data) {
          throw Error("Error");
        }
        updateBalances()
        console.log(data, "=========in then block");
        dispatch(
          updateMyLastOrder({
            date: moment().format("MMM Do YY") + " | " + moment().format("LT"),
            status: data?.status ? "Success" : "Failed",
            infoURL: "https://rinkeby.etherscan.io/tx/" + data.transactionHash,
          })
        );

        data?.status
          ? alert.show("Order added", { type: "success" })
          : alert.show("Unable to add order", { type: "error" });
          setInputs({
            to: "",
            from: "",
            toVal: "",
            fromVal: "",
          })
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
        console.log("Error!", e);
        dispatch(
          updateMyLastOrder({
            date: moment().format("MMM Do YY") + " | " + moment().format("LT"),
            status: "cancelled",
            infoURL: "",
          })
        );
        alert.show("Unable to add order", { type: "error" });
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
    if (inputs.to.length > 0 && inputs.from.length > 0) {
      setInputs((prev) => ({ ...prev, toVal: "", fromVal: ""  }));
      
    }
    if (Number(inputs.from) > state.fromBalance) {
      setInputs((prev) => ({ ...prev, fromVal: "Not enough balance" }));
      validated = false;
    }
    if (state.submitting) {
      validated = false;
    }
    return validated;
  };

  const getPairPrice = (fromRate: number, toRate: number) => {
    if (fromRate === 0) return 0;
    let result = (1 / toRate) * fromRate;
    return result;
  };

  const handleFromChange = (event: any) => {
    const { value } = event.target;
    const price = getPairPrice(state.fromRate, state.toRate);
    setInputs((prev) => ({
      ...prev,
      from: value,
      fromVal: "",
      to: (Number(price) * Number(value)).toString(),
    }));
    setState((prev) => ({ ...prev, usdValue: Number(value) * prev.fromRate }));
  };
  const handleToChange = (event: any) => {
    const { value } = event.target;
    const price = getPairPrice(state.fromRate, state.toRate);
    const from = price === 0 ? "0" : (Number(value) / Number(price)).toString();
    setInputs((prev) => ({
      ...prev,
      to: value,
      toVal: "",
      from: from,
    }));
    setState((prev) => ({ ...prev, usdValue: Number(from) * prev.fromRate }));
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
