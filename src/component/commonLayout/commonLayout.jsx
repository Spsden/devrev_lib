import React from 'react'
import Header from '../homePage/header'
import Footer from '../homePage/footer'
import { Outlet } from 'react-router-dom'


const CommonLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <header className="bg-gray-800 text-white p-4 Z-20"><Header/></header>
    <main className="flex-grow p-4 overflow-y-auto  mt-[3.6rem] h-14">
      {/* Use <Outlet> to render the main content */}
      <Outlet />
    </main>
    <footer className="bg-gray-800 text-white p-4"><Footer/></footer>
  </div>
  
  
 
    
  )
}

export default CommonLayout