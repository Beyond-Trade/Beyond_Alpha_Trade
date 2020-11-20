import { useState } from "react";
import { showAlert } from "../../services/generic.services";
import { mintERC20 } from "../../services/mint.service";

const useMint = () => {
  const gasFees = [17, 23, 34];
  const [state, setState] = useState({
    submitting: false,
    amount: "",
    amountVal: "",
    fee: gasFees[0],
    isOpen: false,
  });

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    mintToken();
  };
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
        debugger
        showAlert({
          title: "Success!",
          message: "Mint successful",
          type: "success",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
          debugger
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

    return validated;
  };

  const setAmount = (event: any) => {
    const value = event.target.value;
    setState((prev) => ({ ...prev, amount: value, amountVal: "" }));
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
