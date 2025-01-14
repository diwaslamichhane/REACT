import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen flex items-center justify-center'
    style={{backgroundColor: color}}>
    
      <div>
        <h1 className='text-white text-5xl'>" Background Changer "</h1>
      </div>

      <div 
      className='fixed flex flex-col top-10 right-10 justify-center px-2'>
        <div 
        className='flex flex-col justify-center bg-white gap-4 shadow-lg px-3 py-2 rounded-xl'>

          <button onClick={()=>{setColor("Red")}}
          className='bg-red-600 text-white p-2 rounded-xl'>
            RED
          </button>

          <button onClick={()=>{setColor("Blue")}}
          className='bg-blue-600 text-white p-2 rounded-xl'>
            BLUE
          </button>

          <button onClick={()=>{setColor("Green")}}
          className='bg-green-600 text-white p-2 rounded-xl'>
            GREEN
          </button>

          <button onClick={()=>{setColor("Pink")}}
          className='bg-pink-600 text-white p-2 rounded-xl'>
            PINK
          </button>

          <button onClick={()=>{setColor("Purple")}}
          className='bg-purple-600 text-white p-2 rounded-xl'>
            PURPLE
          </button>

          <button onClick={()=>{setColor("Yellow")}}
          className='bg-yellow-600 text-white p-2 rounded-xl'>
            YELLOW
          </button>

          <button onClick={()=>{setColor("Orange")}}
          className='bg-orange-600 text-white p-2 rounded-xl'>
            ORANGE
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
