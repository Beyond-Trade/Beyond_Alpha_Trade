import { collatteralRatio, mintERC20 } from "../../services/mint.service";
import { useEffect, useState } from "react";
import { Balance } from "../../store/types/WalletState";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { RootState } from "../../store/reducers/Index";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { updateBalances } from "../../services/wallet.service";

const useMint = () => {
  const { balances } = useSelector((state: RootState) => state.wallet);
  const alert = useAlert();
  const gasFees = [1, 23, 34];

  const [state, setState] = useState({
    submitting: false,
    amount: "",
    amountVal: "",
    fee: gasFees[0],
    isOpen: false,
    cRatio: 0,
    BYNStackingAmount: 0,
    usdbBalance: 0,
    BynRate: 0,
    BynBalance: 0,
    burnableByns: 0,
    graphPercent: 0,
  });

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    mintToken();
  };

  useEffect(() => {
    collatteralRatio().then((c) => {
      setState((prev) => ({ ...prev, cRatio: c }));
    });
    const BYNObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.BEYOND
    );

    setState((prev) => ({
      ...prev,
      BynRate: BYNObj?.rate || 0,
      BynBalance: BYNObj?.cryptoBalance || 0,
      amountVal: "",
      // @ts-ignore
      usdbBalance: Number((((BYNObj?.cryptoBalance * state.BynRate) / (state.cRatio / 100)))) || 0,
      // ((BYNObj?.cryptoBalance * (state.cRatio / 100)) / state.BynRate).toFixed(4)
    }));
  }, [balances]);
console.log(state.BynRate,"<<<<<<<<<<<<<<<<<<BynRate")
  const close = () => setState((prev) => ({ ...prev, isOpen: false }));
  const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
  const selectFee = (fee: number, close: boolean) =>
    setState((prev) => ({ ...prev, fee: fee, isOpen: !close }));

  const mintToken = () => {
    console.log(Number(state.amount), state.fee)
    setState((prev) => ({ ...prev, submitting: true }));
    mintERC20(Number(state.amount), state.fee)
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        updateBalances();
        alert.show("Mint successful", { type: "success" });
        setState((prev) => ({ ...prev, submitting: false,amount:"",graphPercent:0,burnableByns:0,BYNStackingAmount:0 }));
      })
      .catch((e) => {
        console.log("e", e);
        alert.show("Error while minting", { type: "error" });
        setState((prev) => ({ ...prev, submitting: false }));
      });
  };

  const isValidated = () => {
    let validated = true;
    if (state.amount === "") {
      setState((prev) => ({ ...prev, amountVal: "This field is required" }));
      validated = false;
    }
    if (Number(state.amount) <= 0) {
      setState((prev) => ({ ...prev, amountVal: "Amount is not valid" }));
      validated = false;
    }
    if (state.BYNStackingAmount > state.BynBalance || state.BynBalance === 0) {
      setState((prev) => ({ ...prev, amountVal: "Not enough balance" }));
      validated = false;
    }
    if (state.submitting) {
      validated = false;
    }
    return validated;
  };

  const setAmount = (event: any) => {
    const value = event.target.value;
    let stacking = ((value / state.BynRate * (state.cRatio / 100)) );
    const burnable = Number(((value  / state.BynRate * (state.cRatio / 100))));
    const percent = (burnable*100)/state.BynBalance
    
    setState((prev) => ({
      ...prev,
      amount: value,
      amountVal: "",
      BYNStackingAmount: state.BynRate === 0 ? 0 : Number(stacking),
      burnableByns: burnable,
      graphPercent: percent
    }));
  };

  const setMax = () => {
    let stacking = ((state.usdbBalance / state.BynRate * (state.cRatio / 100)));
    const burnable = Number(((state.usdbBalance / state.BynRate * (state.cRatio / 100))));
    const percent = (burnable*100)/state.BynBalance
    
    setState((prev) => ({
      ...prev,
      amount: String(state.usdbBalance),
      amountVal: "",
      BYNStackingAmount: state.BynRate === 0 ? 0 : Number(stacking),
      burnableByns: burnable,
      graphPercent: percent
    }));
  };

  return {
    ...state,
    submit,
    setMax,
    setAmount,
    close,
    selectFee,
    openFeeModal,
  };
};

export default useMint;
