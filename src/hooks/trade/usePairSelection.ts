import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TradePairsLookup } from "../../services/trade.service"
import { selectAssetPairAction } from "../../store/actions/ExchangeActions"
import { RootState } from "../../store/reducers/Index"


const usePairSelection = () => {
    const { exchange:{marketData, search}, wallet:{balances} } = useSelector((state: RootState)=>state)
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
        selectAssetPairAction(TradePairsLookup[0].marketCoin, TradePairsLookup[0].pairs[0].coin)
    },[balances])

    const setMarketTab = (index:number) => setState(prev=>({...prev, marketTab: index}))
    const setSelectedPair = (from:string, to:string) => {
        selectAssetPairAction(from, to)
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