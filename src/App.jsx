import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Search from './Components/Search'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  // const [cart, setCart] = useState([])
  // const [data, setData] = useState([])
  // useEffect(() => {

  // }, [])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
