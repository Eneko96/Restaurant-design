import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Header from './components/Navbar/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import SpecialMenu from './components/SpecialMenu/SpecialMenu'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  )

}

export default App
