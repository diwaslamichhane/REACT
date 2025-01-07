// Q. Create a counter with 2 buttons increase and decrease, count should not go above 10 and should not go below 0.


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Project Counter</h1>
      <h3>Current Count: {count}</h3>

      <button onClick={()=>{
        if(count < 10){
          setCount(count + 1)
        }
        else{
          alert("You cannot go above 10")
        }
      }}>Increase by 1</button>

      <button onClick={()=>{
        if(count > 0){
          setCount(count -1)
        }
        else{
          alert("You cannot go below 0")
        }
      }}>Decrease by 1</button>
    </div>
  )
}

export default App
