
import { useState } from "react"
import Hooks from "./Hooks"
//States are react variaavble...Which will update the dom or ui..
//Userstate() hook =>function
function App() {
 let [count,setcount]=useState(0);

  return (
    <>
      <p className="display">{count}</p>
      <button className="button" onClick={()=>setcount(count+1)}>Incriment</button>
      <button className="button" onClick={()=>setcount(count-1)}>Decriment</button>
      <button className="button" onClick={()=>setcount(0)}>RESET</button>
    </>
  )
}

export default App
