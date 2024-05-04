import React from 'react'
import Carousel from '../component/carousel/Carousel'
import Services from './Services'
import Hero from '../component/hero/Hero'
import Contact from './contact/Contact'
import Gallery from './Gallery'
import Footer from '../component/Footer'




const Home = () => {
  return (
    <div>
      <Carousel/>
      <Hero/>
      <Gallery/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
