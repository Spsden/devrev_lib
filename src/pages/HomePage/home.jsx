import React from 'react'
import Header from '../../component/homePage/header'
import Body from '../../component/homePage/body'
import Footer from '../../component/homePage/footer'
import Hero from '../../component/homePage/hero'
import { Outlet } from 'react-router-dom'

// import Sidebar from '../../component/Sidebar/sidebar'
function Home() {
  return (
    <div className=' text-black'>
      {/* <Sidebar/> */}
  
    
     
      <Hero/>
      <Body/>
     
    
    </div>
  )
}

export default Home