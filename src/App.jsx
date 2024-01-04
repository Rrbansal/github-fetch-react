import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Github from './components/Github/Github'
import { Link } from 'react-router-dom'
import CustomRoutes from './Routes/CustomRoutes'

function App() {

  return (
    <>
     <h1><Link to="/">PERSON</Link></h1>
      <CustomRoutes/>
    </>
  )
}

export default App
