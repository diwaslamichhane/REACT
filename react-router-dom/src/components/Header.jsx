import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-emerald-800 flex justify-between items-center text-white px-10 py-5'>
      <h1 className='text-2xl font-extrabold'>DIWAS</h1>
      <div className='flex gap-16 text-lg'>
        <Link to={'/'}>HOME</Link>
        <Link to={'/About'}>ABOUT</Link>
        <Link to={'/Service'}>SERVICE</Link>
        <Link to={'/Contact'}>CONTACT</Link>
      </div>
    </div>
  )
}

export default Header
