import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white text-black w-fit h-fit flex flex-col items-center py-6 px-10 rounded-2xl'>
      <img className='h-24 w-24 rounded-full' src={props.photo} alt="" />
      <h1 className='text-2xl text-emerald-900 mt-2 mb-3 font-bold'>{props.username}</h1>
      <h2 className='text-base'>{props.id}</h2>
      <h2 className='text-base'>{props.phone}</h2>
      <h2 className='text-base'>{props.blood}</h2>
    </div>
  )
}

export default Card
