import * as React from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import {ethers} from "ethers"
import { ERC20Contracts } from "../../contracts/constants/contracts";
import {
  checkUserCollatteral,
  getCollateralDetailsFromProx,
  releaseCollateralRatio,
  settleCollateralRatio,
} from "../../services/burn.service";
import { getPairPrice } from "../../services/generic.services";
import { collatteralRatio } from "../../services/mint.service";
import { updateBalances } from "../../services/wallet.service";
import { RootState } from "../../store/reducers/Index";
import { Balance } from "../../store/types/WalletState";
import Web3 from "web3";

function useBurn() {
  const { balances, selected } = useSelector(
    (state: RootState) => state.wallet
  );
  const gasFees = [17, 23, 34];

  const alert = useAlert();
  const [state, setState] = React.useState({
    burning: false,
    orignalVal:"",
    amount: "",
    amountVal: "",
    byn: "",
    fee: gasFees[0],
    isOpen: false,
    balance: 0,
    burnType: 0,
    cRatio: 0,
    collateralFixAmount: 0,
    showBYN: false,
    rate: 0,
    maxBurn:""
  });

  React.useEffect(() => {
    const balance = balances.find((balance) => balance.short === "USDb");
   
    getCollateralDetailsFromProx().then((maxBurn)=>{
      if(maxBurn){
        const burnMaxBYN = Web3.utils.fromWei(maxBurn._bUSDValue, 'ether');
        setState((prev) => ({ ...prev, maxBurn: String(burnMaxBYN)}));
        console.log("maxBurn>>>>>>>>>>>",burnMaxBYN)
      }
    })
    if (balance) {
      const rate = getRate(balance);
      setState((prev) => ({ ...prev, balance: balance.cryptoBalance, rate }));
    }
    collatteralRatio().then((c) => {
      setState((prev) => ({ ...prev, cRatio: c }));
    });
  }, [balances]);

  const getRate = (marketBalance: Balance) => {
    const counterBalance = balances.find((b) => b.short === "Beyond");
    let rate = Number(
      getPairPrice(marketBalance?.rate || 0, counterBalance?.rate || 0)
    );
    return rate;
  };

  const close = () => setState((prev) => ({ ...prev, isOpen: false }));
  const showBYNField = () => setState((prev) => ({ ...prev, showBYN: true }));
  const setMax = () =>
    setState((prev) => ({
      ...prev,
      amount: prev.maxBurn,
      byn: ((Number(prev.maxBurn) * (prev.cRatio / 100)) / prev.rate).toString(),
      burnType: 0,
    }));
  const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
  const selectFee = (fee: number, close: boolean) =>
    setState((prev) => ({ ...prev, fee: fee, isOpen: !close }));

  const checkCollateral = () => {
    if (state.burning) {
      return;
    }
    setState((prev) => ({ ...prev, burnType: 1 }));

    //setState(prev=>({...prev, burnType: BurnTypes[1]}))
    // const ETHObj = balances.find(
    //     (bal: Balance) => bal.short == ERC20Contracts.ETH
    //   );
    // checkUserCollatteral(selected.address, ETHObj?.rate).then((data)=>{
    //     if(!data){
    //         throw new Error("No provider");
    //     }
    //     console.log('data', data)
    // }).catch((e)=>{
    //     console.log('e', e)
    // })
  };
  const submit = () => {
    if (!isValidated()) {
      return;
    }
    setState((prev) => ({ ...prev, burning: true }));
    if (state.burnType === 0) {
      releaseCollateral();
    } else {
      settleCollateral();
    }
  };

  const releaseCollateral = () => {
    console.log(state.amount, state.fee, "<<<<<<<<<<");
    releaseCollateralRatio(state.amount, state.fee)
      .then((data) => {
        if (!data) {
          throw new Error("No provider");
        }
        alert.show("Success!", { type: "success" });
        updateBalances();
        setState((prev) => ({ ...prev, burning: false, amount: "", byn: "" }));
      })
      .catch((e) => {
        console.log("e", e);
        alert.show("Error!", { type: "error" });
        setState((prev) => ({ ...prev, burning: false }));
      });
  };

  const settleCollateral = () => {
    settleCollateralRatio(state.amount, state.fee, selected.address)
      .then((data) => {
        if (!data) {
          throw new Error("No provider");
        }
        alert.show("Success!", { type: "success" });
        updateBalances();
        setState((prev) => ({ ...prev, burning: false }));
      })
      .catch((e) => {
        console.log("e", e);
        alert.show("Error!", { type: "error" });
        setState((prev) => ({ ...prev, burning: false }));
      });
  };

  const isValidated = () => {
    let validated = true;
    console.log(Number(state.amount) , state.balance ,"==========AMOUNT AND BALNCE")
    if (state.burnType === 0 && Number(state.amount) > state.balance) {
      setState((prev) => ({ ...prev, amountVal: "Not enough balance" }));
      validated = false;
    }
    if (state.burnType === 0 && Number(state.amount) <= 0) {
      setState((prev) => ({
        ...prev,
        amountVal: "Please enter a valid amount",
      }));
      validated = false;
    }
    if (state.burnType === 0 && state.amount === "") {
      setState((prev) => ({ ...prev, amountVal: "This field is required" }));
      validated = false;
    }
    if (state.burning) {
      validated = false;
    }
    return validated;
  };

  const handleAmountChange = (event: any) => {
    const value = event.target.value;
    setState((prev) => ({
      ...prev,
      amount: value,
      amountVal: "",
      byn: ((value * (prev.cRatio / 100)) / prev.rate).toString(),
    }));
    // setState(prev=>({...prev, amount: value, amountVal: "", byn: (Number(value)/prev.rate).toString()}))
  };
  const handleBYNChange = (event: any) => {
    const value = event.target.value;
    setState((prev) => ({
      ...prev,
      byn: value,
      amount: ((value / (prev.cRatio / 100)) * prev.rate).toString(),
    }));
  };

  return {
    ...state,
    submit,
    close,
    setMax,
    showBYNField,
    openFeeModal,
    selectFee,
    checkCollateral,
    handleAmountChange,
    handleBYNChange,
  };
}

export default useBurn;
