import React, { useEffect } from 'react'

import Team from '../components/Team'
import Inspire from '../components/Inspire'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

function About() {

  useEffect(()=>{
    document.title = "About the Site | Building a Sustainable Tommorow : Emphasizing Eco Friendly Innovations"
  },[])
  return (
    <>
    
    <AboutContent/>
    <Team/>
    <Inspire/>
    <Footer/>
    </>
  )
}

export default About