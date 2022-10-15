import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [myVal, setMyVal] = useState("Hi")
  return (
    <>
    <h1 style={{color: "#fff"}}>Counter Value : {count}</h1>
    <button onClick={()=>setCount(0)}>Reset Counter</button>
    <button onClick= {() =>(count > 15 ? " " :setCount(count + 1))}>Increase Counter</button>
    <button onClick={()=> setCount(count-1)}>Decrease Counter</button>
    </>
  )
}

export default Counter