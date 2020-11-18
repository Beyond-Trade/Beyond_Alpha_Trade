import { useState } from "react"


const useMarketData = () => {
    const [state, setState] = useState({
        marketIndex: 0,
    })

    const setIndex = (index:number) => setState((prev)=>({...prev, marketIndex: index}))

    return {
        ...state,
        setIndex,
    }
}

export default useMarketData