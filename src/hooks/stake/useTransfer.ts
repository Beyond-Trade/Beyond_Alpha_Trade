import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/Index";


const useTransfer = () => {
    const gasFees = [17, 23, 34];
    const { balances } = useSelector(
        (state: RootState) => state.wallet
      );
    const dropValues = ['BYN', 'ETH']
    const [state, setState] = useState({
      submitting: false,
      amount: "",
      amountVal: "",
      address: "",
      addressVal: "",
      fee: gasFees[0],
      isOpen: false,
      balance: 0,
      dropIndex: 0
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
      
    };
    const close = () => setState((prev) => ({ ...prev, isOpen: false }));
    const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
    const selectFee = (fee: number) =>
      setState((prev) => ({ ...prev, fee: fee, isOpen: false }));
    const setMax = () => setState((prev) => ({ ...prev, amount: state.balance.toString() }));
  
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
      const {name, value} = event.target;
      setState((prev) => ({ ...prev, [name]: value, [name+'Val']: "" }));
    };

    const onCoinSelect = (i:number) => {
        setState((prev)=>({...prev, dropIndex: i}))
    }
  
    return {
      ...state,
      submit,
      handleInputChange,
      close,
      setMax,
      selectFee,
      openFeeModal,
      onCoinSelect,
      dropValues
    };
  };

export default useTransfer