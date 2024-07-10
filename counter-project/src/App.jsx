import { useState } from 'react'
import './App.css'

function App() {
  
  let [count,setcount] = useState(15);

  const increaseCount = () => {
    setcount(count + 1)
  }

  const decreaseCount = () => {
    if (count > 0) {
      setcount(count - 1)
    }  
  }

  return (
    <>
      <h1>Counting : {count}</h1>
      <button type='button' onClick={increaseCount}>Add Count</button><br/>
      <button type='button' onClick={decreaseCount}>Decrease Count</button>
    </>
  )
}

export default App
