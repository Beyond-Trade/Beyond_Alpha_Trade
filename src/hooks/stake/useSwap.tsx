import { useState } from "react"



const useSwap = () => {
    const [state, setState] = useState({
        swapping: false,
        from: "",
        to: "",
        fromVal: ""
    })
    
    const submit = () => {
        if(!isValidated()){
            return;
        }
        
        setState(prev=>({...prev, swapping: true}))
        //TODO adding process
        setTimeout(()=>{
            setState((prev)=>({...prev, swapping: false}))
        },3000)
    }

    const isValidated = () => {
        let validated = true;
        if(state.from === ""){
            setState(prev=>({...prev, fromVal: "This field is required"}))
            validated = false;
        }
        return validated
    }

    const handleInputChange = (event:any) =>{
        const {name, value} = event.target;
        setState(prev=>({...prev, [name]: value, [name+"Val"]: ""}))
    }

    return {...state, submit, handleInputChange}
}

export default useSwap