import { useState } from "react"

export const CounterApp2 = ({value}) => {
    const [Counter, setCounter] = useState(value)
  return (
    <>
    <div>CounterApp2</div>
    <h1> value: {Counter}</h1>
    <button onClick={()=>{
        setCounter(Counter+1)
        
  
    }}> + </button>
 
    <button onClick={()=>{
        setCounter(Counter-1)
    }}> - </button>

    </>



  )
}
