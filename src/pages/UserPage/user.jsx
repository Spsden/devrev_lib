import React from "react";
import Feed from "../../component/feed/feed";
import Sidebar from "../../component/Sidebar/sidebar";
import Header from "../../component/homePage/header";
import Body from "../../component/homePage/body";
import { Outlet } from "react-router-dom";
import Footer from "../../component/homePage/footer";

function User() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="grow">
          <div className="ms-64">
            <Outlet/>
            <Footer/>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
