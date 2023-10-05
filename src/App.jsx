import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(1);
  const increamentValue = () => {
    if(counter < 20)
    setcounter(counter+1);
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
  }
  const decreamentValue = () =>{
    if(counter > 0)
      setcounter(counter-1);
      console.log(counter)
  }
  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={increamentValue}>Increament Value</button>
      <br />
      <button onClick={decreamentValue}>Decreament Value</button>
    </>
  )
}

export default App
