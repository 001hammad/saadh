import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Brandsec from './Components/Brandsec'
import CardSection from './Components/Cards'
import CardSectionn from './Components/Card2sec'
import Signup from './Components/Signup'
import GetTouch from './Components/GetInTouch'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brandsec/>
      <CardSection/>
      <CardSectionn/>
      <Signup/>
      <GetTouch/>
      <Footer/>
    </div>
  )
}

export default Home