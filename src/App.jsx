import { useState } from 'react'

import Navbar from './global/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Home from './pages/Home'
import Contact from './pages/contact/Contact'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Electrolysis from './component/electrolysis/Electrolysis'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Navbar/>
     <Routes >
    
      <Route  path="/" element={<Home />}/>
      <Route  path="electrolysis" element={<Electrolysis />}/>
      <Route  path="gallery" element={<Gallery />}/>
      <Route  path="Services" element={<Services />}/>
      <Route  path="Contact" element={<Contact />}/>
      <Route  path="About" element={<About />}/>
     </Routes>
    </>
  )
}

export default App
