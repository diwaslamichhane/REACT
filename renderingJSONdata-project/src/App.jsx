import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      "name": "Diwas",
      "id": "01",
      "phoneNumber": "123-456-7890",
      "bloodGroup": "O+",
      "profilePhoto": "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
    },
    {
      "name": "Dishant",
      "id": "02",
      "phoneNumber": "987-654-3210",
      "bloodGroup": "A-",
      "profilePhoto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw"
    },
    {
      "name": "Aayush",
      "id": "03",
      "phoneNumber": "555-123-4567",
      "bloodGroup": "B+",
      "profilePhoto": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHw"
    },
    {
      "name": "Bibek",
      "id": "04",
      "phoneNumber": "111-222-3333",
      "bloodGroup": "AB-",
      "profilePhoto": "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
    }]

  return (
    <div className='bg-emerald-900 h-screen w-full flex gap-10 p-5'>
      {users.map((e)=>{
        return <Card username={e.name} id={e.id} phone={e.phoneNumber} blood={e.bloodGroup} photo={e.profilePhoto} />
      })}
    </div>
  )
}

export default App
