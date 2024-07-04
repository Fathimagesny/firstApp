import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Card } from '@mui/material'
import Mcard from './components/Mcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/Add' element={<Add person={{ name:'Fathima',email:'fg@gmail.com',password:'23435',address:'vuguygfu'}}/>}></Route>
      <Route path='/Mcard' element={<Mcard/>}></Route>
    </Routes>
     
    
    </>
  )
}

export default App
