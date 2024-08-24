import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Resource from '../components/Resource'
import Calendar from '../components/Calendar'

function Resources() {
  useEffect(()=>{
    document.title = "Resources | Building a Sustainable Tommorow : Emphasizing Eco Friendly Innovations"
  },[])
  return (
    <>

    <Resource/>
    <Calendar/>
    <Footer/>
    </>
  )
}

export default Resources