import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Prajwal from './Pages/Prajwal'
import Praachi from './Pages/Praachi'
import Salila from './Pages/Salila'
import Vaishnavi from './Pages/Vaishnavi'
import Sonal from './Pages/sonal'

const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Prajwal" element={<Prajwal/>}/>
      <Route path="/Praachi" element={<Praachi/>}/>
      <Route path="/Salila" element={<Salila/>}/>
      <Route path="/Sonal" element={<Sonal/>}/>
      <Route path="/Vaishnavi" element={<Vaishnavi/>}/>
    </Routes>
   
  )
}

export default App
