import React from "react";
import Header from "../homePage/header";
import Footer from "../homePage/footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";

const CommonLayout = () => {

  const nameUrl = window.location.href
  const url = new URL(nameUrl);

// Access the pathname property to get the path
const path = url.pathname;
  console.log(path)


  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4 Z-20">
        <Header />
      </header>
      <main className="flex-grow  overflow-y-auto  mt-[3.6rem] h-14 bg-[#0f2e86] m-0">

        {/* {path === '/user' ? <Sidebar/> : <></>} */}

        
        {/* Use <Outlet> to render the main content */}
        <div className={`mb-4 `} >
          
        <Outlet />

        </div>

      
        <footer className="bg-gray-800 text-white p-4">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default CommonLayout;
