import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ContractLookup } from "../../contracts/contracts.lookup"
import { getContractTransactions } from "../../services/axios.service"
import { RootState } from "../../store/reducers/Index"
import { Trade } from "../../store/types/ExchangeState"

const useOrdersHistory = () => {
    const { exchange:{myOrders, selectedPair}, wallet: { selected } } = useSelector((state:RootState)=>state)
    const init:Trade[] = []
    const [state, setState] = useState({
        tabIndex: 0,
        loadingTrades: false,
        trades: init,
        myTrades: init
    })

    const setTab = (index:number) => setState(prev=>({...prev, tabIndex: index}))

    // const getTradeData = () => {
    //     setState(prev=>({...prev, loadingTrades: true}))
    //     const contract = ContractLookup.find((item) => item.contractName === selectedPair.base)
    //     if(!contract) return
    //     getContractTransactions(contract.contractAddress).then((data: Trade[])=>{
    //         let myTrades = data.filter((item)=> item.fromAddress.toLowerCase() === selected.address.toLowerCase())
    //         setState(prev=>({...prev, loadingTrades: false, trades: data, myTrades: myTrades }))
    //     }).catch((e)=>{
    //         setState(prev=>({...prev, loadingTrades: false}))
    //     })
    // }
    // useEffect(()=>{
    //     getTradeData()
    // },[selectedPair])

    return {
        ...state,
        setTab,
        myOrders,
        selectedPair
        // getTradeData,
    }
}

export default useOrdersHistory