import React from 'react'
import Carousel from '../component/carousel/Carousel'
import Services from './Services'
import Hero from '../component/hero/Hero'
import Contact from './contact/Contact'




const Home = () => {
  return (
    <div>
      <Carousel/>
      <Hero/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home
