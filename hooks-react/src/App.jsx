//THIS IS NOT THE WAY TO DO, SO WE USE HOOKS (useState hooks)

// import React from 'react'

// const App = () => {

//   let user = "Diwas"
//   const changeUser = ()=>{
//     console.log(user)
//     user = "Raj"
//     console.log(user)
//   } 

//   return (
//     <div>
//       <h1>User name is {user}</h1>
//       <button onClick={changeUser}>Change Username</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>Currently the number is {num}</h1>
      <button onClick={()=>{setNum(num+1)}}>Increment By 1</button>
      <button onClick={()=>{setNum(num-1)}}>Decrement By 1</button>
    </div>
  )
}

export default App
