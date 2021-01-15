import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { ContractLookup } from "../../contracts/contracts.lookup";
import { transferERC20, transferEther } from "../../services/transfer.service";
import { updateBalances } from "../../services/wallet.service";
import { RootState } from "../../store/reducers/Index";

const useTransfer = () => {
  const gasFees = [17, 23, 34];
  const { balances } = useSelector((state: RootState) => state.wallet);
  const alert = useAlert()
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
    const balance = balances.find((balance) => balance.short===state.dropValues[state.dropIndex]);
    if (balance) {
      setState((prev) => ({ ...prev, balance: balance.cryptoBalance }));
    }
  }, [balances]);

  useEffect(() => {
    let coins: any = [];
    ContractLookup.forEach((item) => {
      if (item.isSyntheticAsset && (item.contractName === "Beyond" || item.contractName === "ETH")) {
        coins.push(item.contractName);
      }
    });
    const balance = balances.find((balance) => balance.short === coins[0]);
    setState((prev) => ({ ...prev, dropValues: coins, balance: balance?.cryptoBalance||0 }));
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
  const selectFee = (fee: number, close:boolean) =>
    setState((prev) => ({ ...prev, fee: fee, isOpen: !close }));
  const setMax = () =>
    setState((prev) => ({ ...prev, amount: state.balance.toString() }));

  const transferEtherBalance = () => {
    transferEther(state.address, parseFloat(state.amount), state.fee)
      .then((data) => {
        if (!data) {
          throw new Error("no data");
        }
        updateBalances()
        alert.show('Transfer successful', {type:'success'})
        setState((prev) => ({ ...prev, submitting: false,amount:"",address:"" }));
      })
      .catch((e) => {
        alert.show('Unable to transfer', {type:'error'})
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
        updateBalances()
        alert.show('Transfer successful', {type:'success'})
        setState((prev) => ({ ...prev, submitting: false,amount:"",address:"" }));
      })
      .catch((e) => {
        alert.show('Unable to transfer', {type:'error'})
        setState((prev) => ({ ...prev, submitting: false }));
      });
  };

  const isValidated = () => {
    let validated = true;
    if (state.amount === "") {
      setState((prev) => ({ ...prev, amountVal: "This field is required" }));
      validated = false;
    }
    if (Number(state.amount) > state.balance) {
      setState((prev) => ({ ...prev, amountVal: "Not enough balance" }));
      validated = false;
    }
    if (state.address === "") {
      setState((prev) => ({ ...prev, addressVal: "This field is required" }));
      validated = false;
    }
    if(state.submitting){
      validated = false
    }
    return validated;
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value, [name + "Val"]: "" }));
  };

  const onCoinSelect = (i: number) => {
    const balance = balances.find((balance) => balance.short === state.dropValues[i]);
    setState((prev) => ({ ...prev, dropIndex: i,amount:"", balance: balance?.cryptoBalance||0 }));
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
