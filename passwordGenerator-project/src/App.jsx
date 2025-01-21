import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8) //minimum 8 characters
  const [char, setChar] = useState(false) //default false
  const [num, setNum] = useState(false) //default false
  const[password, setPassword] = useState('')

  // useRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (char) str += "!@#$%^&*()`_-+=~"
    if (num) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
      
    }
    setPassword(pass)

  }, [length, char, num, setPassword]) // callBack hook is used for optimization

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select() //password select garna lai
    window.navigator.clipboard.writeText(password) //password copy garna lai
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, num, char, passwordGenerator]) // useEffect hook is used for performance, It runs after the render is committed to the screen. 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-xl rounded-xl px-5 py-4 my-9 text-emerald-600 bg-gray-800'>
        <h1 className='text-2xl text-center text-emerald-600 my-3'>Password Generator</h1>
        <div className='flex shadow-xl rounded-xl mb-5 overflow-hidden'>
          <input 
          type="text"
          placeholder='Password'
          value={password}
          className='outline-none w-full py-2 px-4 text-emerald-600'
          readOnly
          ref={passwordRef}
          />
          
          <button
          onClick={copyPassToClipboard}
          className='outline-none bg-emerald-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={num}
            id='numInput'
            onChange={()=>{
              setNum((prev)=> !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={()=>{
              setChar((prev)=> !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>          
      </div>
    </>
  )
}

export default App
