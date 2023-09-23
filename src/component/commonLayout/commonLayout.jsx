import React from 'react'
import Header from '../homePage/header'
import Footer from '../homePage/footer'
import { Outlet } from 'react-router-dom'


const CommonLayout = () => {
  return (
    <div className='bg-blue-600 text-black  '>
    {/* <Sidebar/> */}
    <Header/>
    <main>
    <Outlet/>

    </main>
    
    
    <Footer/>
  
  </div>
    
  )
}

export default CommonLayout