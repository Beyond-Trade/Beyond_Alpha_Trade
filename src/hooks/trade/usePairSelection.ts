import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPairPrice } from "../../services/generic.services"
import { TradePairsLookup } from "../../services/trade.service"
import { selectAssetPairAction, setMarketData } from "../../store/actions/ExchangeActions"
import { RootState } from "../../store/reducers/Index"


const usePairSelection = () => {
    const { exchange:{marketData, search, selectedPair}, wallet:{balances} } = useSelector((state: RootState)=>state)
    const dispatch = useDispatch()
    const getTabs = () => {
        let tabs:string[] = []
        marketData.forEach((item) => {
            tabs.push(item.marketCoin)
        })
        return tabs
    }
    const [state, setState] = useState({
        marketTab: 0,
        tabs: getTabs()
    })

    useEffect(() => {
        selectAssetPairAction(TradePairsLookup[0].marketCoin, TradePairsLookup[0].pairs[0].coin, selectedPair.rate)
        getPrices()
    },[balances])

    const getPrices = () => {
        let newData = TradePairsLookup
        TradePairsLookup.forEach((item, index)=>{
            const marketBalance = balances.find((b)=>b.short === item.marketCoin)
            item.pairs.forEach((item2, index2)=>{
                const counterBalance = balances.find((b)=>b.short === item2.coin)
                newData[index].pairs[index2].rate = Number(getPairPrice(marketBalance?.rate||0, counterBalance?.rate||0).toFixed(4))
            })
        })
        dispatch(setMarketData(newData))
    }

    const setMarketTab = (index:number) => setState(prev=>({...prev, marketTab: index}))
    const setSelectedPair = (from:string, to:string, rate: number) => {
        selectAssetPairAction(from, to, rate)
    }

    return {
        ...state,
        search,
        setMarketTab,
        marketData,
        setSelectedPair,
    }
}

export default usePairSelection