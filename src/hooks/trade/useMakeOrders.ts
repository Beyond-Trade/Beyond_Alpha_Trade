import { useState } from "react"



const useMakeOrders = () => {
    const gasFees = [17, 23, 34];
    const [state, setState] = useState({
        submitting: false,
        isFeeOpen: false,
        fee: gasFees[0],
    })

    const openFeeModal = () => setState(prev=>({...prev, isFeeOpen: true}))
    const closeFeeModal = () => setState(prev=>({...prev, isFeeOpen: false}))
    const selectFee = (fee: number) => setState((prev) => ({ ...prev, fee: fee, isFeeOpen: false }));

    const submit = () => {
        setState(prev=>({...prev, submitting: true}))
    }

    return {
        ...state,
        submit,
        openFeeModal,
        closeFeeModal,
        selectFee
    }
}

export default useMakeOrders