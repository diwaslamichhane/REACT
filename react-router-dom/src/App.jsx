import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
