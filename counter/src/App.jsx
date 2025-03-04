import { useState } from 'react'


import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
 
  
 
//let counter = 15

const  addValue =() => {
 
  if (counter >=20) return;
  counter = counter + 1 
  
  
  setCounter(counter)
  
  
  
}

const removeValue=()=>{
  if (counter <=0) return;
  setCounter(counter-1)
}

  return (
    <>
    <h1>counter</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue} > Add  </button>
    <br />
    
    <button onClick={removeValue}>Remove</button>

    
    </>
  )
}

export default App
