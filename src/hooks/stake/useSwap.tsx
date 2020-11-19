import { useState } from "react"



const useSwap = () => {
    const [state, setState] = useState({
        swapping: false
    })
    
    const submit = () => {
        setState(prev=>({...prev, swapping: true}))
        //TODO adding process
        setTimeout(()=>{
            setState((prev)=>({...prev, swapping: false}))
        },3000)
    }

    return {...state, submit}
}

export default useSwap