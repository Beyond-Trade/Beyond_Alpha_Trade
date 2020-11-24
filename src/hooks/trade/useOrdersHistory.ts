import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ContractLookup } from "../../contracts/contracts.lookup"
import { getContractTransactions } from "../../services/axios.service"
import { RootState } from "../../store/reducers/Index"

const useOrdersHistory = () => {
    const { exchange:{myOrders, selectedPair}, wallet: {balances} } = useSelector((state:RootState)=>state)
    const [state, setState] = useState({
        tabIndex: 0,
        loadingTrades: false,
        trades: []
    })

    const setTab = (index:number) => setState(prev=>({...prev, tabIndex: index}))

    const getTradeData = () => {
        setState(prev=>({...prev, loadingTrades: true}))
        const contract = ContractLookup.find((item) => item.contractName === selectedPair.base)
        if(!contract) return
        getContractTransactions(contract.contractAddress).then((data)=>{
            
            setState(prev=>({...prev, loadingTrades: false, trades: data}))
        }).catch((e)=>{
            console.log('error',e)
            
            setState(prev=>({...prev, loadingTrades: false}))
        })
    }
    useEffect(()=>{
        getTradeData()
    },[])

    return {
        ...state,
        setTab,
        myOrders,
        getTradeData,
    }
}

export default useOrdersHistory