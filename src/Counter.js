import { useState } from "react"

function Counter (){
    const clickResponse = () => {
        setAmount(amount + 1)
    }
    const clickResponseD = () => {
        setAmount(amount - 1)
    }
    
    const [amount, setAmount] = useState(0)
    
    return (
        <>
        <button onClick={clickResponse}>Increase</button>
        {amount}
        <button onClick={clickResponseD}>Decrease</button>
        </>
    )
}
export default Counter