import { useState } from 'react';

import React from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=06')
    setData(response.data)
    console.log(data);
    
  }
  return (
    <div className='p-4'>

      <button
      onClick={getData}
      className='bg-emerald-900 text-white text-2xl px-6 py-4 rounded-lg active:scale-95'
      >Get Data</button>

      <div
      className='mt-5 bg-gray-900 w-fit flex text-white'
      >{data.map((e, idx)=>{
        return <div key={idx} className='text-white flex p-2 w-full items-center justify-center'>
          <div className='px-5 py-8 bg-gray-500 rounded-2xl flex flex-col'>
            <img className='rounded-full h-40' src={e.download_url} alt="" />
            <h1 className='text-xl font-semibold'>ID : {e.id}</h1>
            <h2 className='text-lg'>Author: {e.author} </h2>

          </div>
        </div>
      })}</div>

    </div>
  )
}

export default App
