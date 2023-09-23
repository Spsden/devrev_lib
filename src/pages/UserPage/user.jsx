import React from "react";
import Feed from "../../component/feed/feed";
import Sidebar from "../../component/Sidebar/sidebar";
import Header from "../../component/homePage/header";


function User() {
  return (
    <div>
   
      <div className="flex">
        <Sidebar/>
        Main Body
      </div>
    </div>
  );
}

export default User;
