import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Footer from '../components/Footer'
import Brief from '../components/Brief'

function Home() {
  useEffect(()=>{
    document.title = "Home | Building a Sustainable Tommorow : Emphasizing Eco Friendly Innovations"
  },[])
  return (
    <>
    
    <Introduction/>
    <Brief/>
    <Footer/>
    </>
  )
}

export default Home