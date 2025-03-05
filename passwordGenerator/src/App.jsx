

import { useState, useCallback } from 'react'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPasswrod] = useState("")

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&* "

    for (let i=1;i<=Array.length;i++){
      let char = Math.floor(Math.random() * str.length+1)

      pass= str.charAt(char)
    }

    setPasswrod(pass)

  }, [length, numberAllowed, charAllowed, setPasswrod]) 

  return (
    <>
     {/* <h1 className='text-4xl text-center inline-block bg-red-400'>Password Generator</h1> */}
     <div className='w-full max-w-md mx-auto shadow-md rounded-lf px-4 my-8 text-orange-500'>

          Test

     </div>
    </>
  )
}

export default App
