import { collatteralRatio, mintERC20 } from "../../services/mint.service";
import { showAlert } from "../../services/generic.services";
import { useEffect, useState } from "react";
import { Balance } from "../../store/types/WalletState";
import { ERC20Contracts } from "../../contracts/constants/contracts";
import { RootState } from "../../store/reducers/Index";
import { useSelector } from "react-redux";

const useMint = () => {
  const { balances } = useSelector(
    (state: RootState) => state.wallet
  );
  const gasFees = [17, 23, 34];
  const [state, setState] = useState({
    submitting: false,
    amount: "",
    amountVal: "",
    fee: gasFees[0],
    isOpen: false,
    cRatio: 0,
    BYNStackingAmount: 0,
    BynRate: 0,
    BynBalance: 0
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
    })
    const BYNObj = balances.find(
      (bal: Balance) => bal.short == ERC20Contracts.BEYOND
    );
    setState((prev) => ({ ...prev, BynRate: BYNObj?.rate || 0, BynBalance: BYNObj?.cryptoBalance||0 }));
  }, [])


  const close = () => setState((prev) => ({ ...prev, isOpen: false }));
  const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
  const selectFee = (fee: number) =>
    setState((prev) => ({ ...prev, fee: fee, isOpen: false }));

  const mintToken = () => {
    setState((prev) => ({ ...prev, submitting: true }));
    mintERC20(Number(state.amount), state.fee)
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        showAlert({
          title: "Success!",
          message: "Mint successful",
          type: "success",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
        showAlert({
          title: "Error!",
          message: "Error while minting",
          type: "danger",
        });
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

    debugger
    if (state.BYNStackingAmount > state.BynBalance||state.BynBalance===0) {
      setState((prev) => ({ ...prev, amountVal: "Not enough balance" }));
      validated = false;
    }

    return validated;
  };

  const setAmount = (event: any) => {
    const value = event.target.value;
    let stacking = ((value * state.cRatio) / state.BynRate);
    debugger
    setState((prev) => ({ ...prev, amount: value, amountVal: "",BYNStackingAmount:state.BynRate===0?0: stacking }));
  };

  return {
    ...state,
    submit,
    setAmount,
    close,
    selectFee,
    openFeeModal,
  };
};

export default useMint;
