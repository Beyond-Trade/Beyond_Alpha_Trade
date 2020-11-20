import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ContractLookup } from "../../contracts/contracts.lookup";
import { showAlert } from "../../services/generic.services";
import { transferERC20, transferEther } from "../../services/transfer.service";
import { RootState } from "../../store/reducers/Index";

const useTransfer = () => {
  const gasFees = [17, 23, 34];
  const { balances } = useSelector((state: RootState) => state.wallet);

  const [state, setState] = useState({
    submitting: false,
    amount: "",
    amountVal: "",
    address: "",
    addressVal: "",
    fee: gasFees[0],
    isOpen: false,
    balance: 0,
    dropIndex: 0,
    dropValues: [],
  });

  useEffect(() => {
    const balance = balances.find((balance) => balance.isEther);
    if (balance) {
      setState((prev) => ({ ...prev, balance: balance.cryptoBalance }));
    }
  }, [balances]);

  useEffect(() => {
    let coins: any = [];
    ContractLookup.forEach((item) => {
      if (item.isSyntheticAsset) {
        coins.push(item.contractName);
      }
    });
    setState((prev) => ({ ...prev, dropValues: coins }));
  }, []);

  const submit = () => {
    if (!isValidated()) {
      return;
    }
    setState((prev) => ({ ...prev, submitting: true }));
    if (state.dropValues[state.dropIndex] === "ETH") {
      transferEtherBalance();
    } else {
      transferERC20Balance();
    }
  };

  const close = () => setState((prev) => ({ ...prev, isOpen: false }));
  const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
  const selectFee = (fee: number) =>
    setState((prev) => ({ ...prev, fee: fee, isOpen: false }));
  const setMax = () =>
    setState((prev) => ({ ...prev, amount: state.balance.toString() }));

  const transferEtherBalance = () => {
    transferEther(state.address, state.amount, state.fee)
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        showAlert({
          title: "Success!",
          message: "Transfer successful",
          type: "success",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
        console.log("transfer ether error", e);
        showAlert({
          title: "Error!",
          message: "Unable to transfer",
          type: "danger",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      });
  };

  const transferERC20Balance = () => {
    transferERC20(
      state.address,
      state.amount,
      state.dropValues[state.dropIndex],
      state.fee
    )
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        showAlert({
          title: "Success!",
          message: "Transfer successful",
          type: "success",
        });
        setState((prev) => ({ ...prev, submitting: false }));
      })
      .catch((e) => {
        showAlert({
          title: "Error!",
          message: "Unable to transfer",
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
    if (state.address === "") {
      setState((prev) => ({ ...prev, addressVal: "This field is required" }));
      validated = false;
    }

    return validated;
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value, [name + "Val"]: "" }));
  };

  const onCoinSelect = (i: number) => {
    setState((prev) => ({ ...prev, dropIndex: i }));
  };

  return {
    ...state,
    submit,
    handleInputChange,
    close,
    setMax,
    selectFee,
    openFeeModal,
    onCoinSelect,
  };
};

export default useTransfer;
