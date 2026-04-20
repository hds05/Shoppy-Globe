import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Search from './Components/Search'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'

function App() {

  // state for thevisibility of welcome component
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    // hide the welcome component in 3 seconds
    const welcome = setTimeout(() => {
      setVisibility(false)
    }, 3000)

    // clear the timeout when the component unmounts
    return () => clearTimeout(welcome)
  }, [])

  
  // Header and Footer stay fixed for all pages
  // Outlet renders the current route page between them
  return (
    <>
      {visibility ? <Welcome /> :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
