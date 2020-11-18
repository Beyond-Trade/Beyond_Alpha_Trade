import { useState } from "react"


const useMarketData = () => {
    const [state, setState] = useState({
        marketIndex: 0,
        topIndex: 0,
    })

    const setIndex = (index:number) => setState((prev)=>({...prev, marketIndex: index}))
    const setTopIndex = (index:number) => setState((prev)=>({...prev, topIndex: index}))

    return {
        ...state,
        setIndex,
        setTopIndex,
    }
}

export default useMarketData