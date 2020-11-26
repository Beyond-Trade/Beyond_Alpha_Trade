import * as React from 'react';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { releaseCollateralRatio, settleCollateralRatio } from '../../services/burn.service';
import { RootState } from '../../store/reducers/Index';


function useBurn() {
    const { balances } = useSelector((state:RootState)=>state.wallet)
    const gasFees = [17, 23, 34];
    const alert = useAlert()
    const [state, setState] = React.useState({
        burning: false,
        amount: "",
        amountVal: "",
        fee: gasFees[0],
        isOpen: false,
        balance: 0
    })

    React.useEffect(() => {
        const balance = balances.find((balance) => balance.short==='USDb');
        if (balance) {
          setState((prev) => ({ ...prev, balance: balance.cryptoBalance }));
        }
    }, [balances]);

    const close = () => setState((prev) => ({ ...prev, isOpen: false }));
    const setMax = () => setState((prev) => ({ ...prev, amount: prev.balance.toString() }));
    const openFeeModal = () => setState((prev) => ({ ...prev, isOpen: true }));
    const selectFee = (fee: number, close:boolean) => setState((prev) => ({ ...prev, fee: fee, isOpen: !close }));

    const submit = () => {
        if(!isValidated()){
            return
        }
        setState(prev=>({...prev, burning: true}))
        if(true){
            releaseCollateral()
        } else {
            settleCollateral()
        }
    }

    const releaseCollateral = () => {
        releaseCollateralRatio(state.amount, state.fee).then((data)=>{
            if(!data){
                throw new Error("No provider");
            }
            alert.show('Success!', {type: 'success'})
            setState(prev=>({...prev, burning: false}))
        }).catch((e)=>{
            console.log('e', e)
            alert.show("Error!", {type: 'error'})
            setState(prev=>({...prev, burning: false}))
        })
    }

    const settleCollateral = () => {
        settleCollateralRatio(state.amount, state.fee).then((data)=>{
            if(!data){
                throw new Error("No provider");
            }
            alert.show('Success!', {type: 'success'})
            setState(prev=>({...prev, burning: false}))
        }).catch((e)=>{
            console.log('e', e)
            alert.show("Error!", {type: 'error'})
            setState(prev=>({...prev, burning: false}))
        })
    }

    const isValidated = () => {
        let validated = true
        if(Number(state.amount) > state.balance) {
            setState(prev=>({...prev, amountVal: "Not enough balance"}))
            validated=false
        }
        if(Number(state.amount) <= 0) {
            setState(prev=>({...prev, amountVal: "Please enter a valid amount"}))
            validated=false
        }
        if(state.amount === "") {
            setState(prev=>({...prev, amountVal: "This field is required"}))
            validated=false
        }
        if(state.burning) {
            validated=false
        }
        return validated
    }

    const handleAmountChange = (event:any) => {
        const value = event.target.value
        setState(prev=>({...prev, amount: value, amountVal: ""}))
    } 
    return {
        ...state,
        submit,
        close,
        setMax,
        openFeeModal,
        selectFee,
        handleAmountChange
    }
}

export default useBurn