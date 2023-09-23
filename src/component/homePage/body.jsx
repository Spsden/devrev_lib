import React from "react";
import Shelf from "../Shelf/shelf";
const Body = () => {
  return (
    <div className="pb-14">
    
      
      <Shelf title={"Fiction"} fetchUrl={"fiction"} />
      <Shelf title={"Novel"} fetchUrl={"novel"} />
      <Shelf title={"Mystery"} fetchUrl={"mystery"} />
      <Shelf title={"Thriller"} fetchUrl={"thriller"} />
      <Shelf title={"Horror"} fetchUrl={"horror"} />
      <Shelf title={"Comedy"} fetchUrl={"comedy"} />
      
    </div>
  );
};
export default Body;
