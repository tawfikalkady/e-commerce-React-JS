import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavItems/>


      {/* https://getbootstrap.com/docs/5.3/utilities/sizing/ */}
      <div className="min-vh-100">
      <Outlet/>

      </div>
      <Footer/>
    </>
  )
}

export default App
