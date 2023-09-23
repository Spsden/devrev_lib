import React, { useEffect, useState } from "react";
import axios from "../../utiils/requests/axios"
import Card from "../card/card";

const apiKey = process.env.NYTIMESKEY

const baseUrl = "volumes?maxResults=20&q=subject:";
const Shelf = ({ title, fetchUrl }) => {
  const [books, setBooks] = useState([]);

  


  useEffect(() => {
    async function getBookArray() {

        
      const recievedBooksArray = await axios.get(baseUrl + fetchUrl);
     // console.log(JSON.stringify(recievedBooksArray.data.items))
    //  console.log(recievedBooksArray.data.items[0].volumeInfo.imageLinks.smallThumbnail)
      setBooks(recievedBooksArray.data.items);
    }
    getBookArray();
  }, []);
  return (
    <div className="pt-6">
      <h1 className="mb-2  ml-[.7rem] text-xl font-bold text-white md:font-semibold">
        {title}
      </h1>
      <div className="no-scrollbar grid grid-flow-col overflow-x-scroll px-2 md:hidden ">
        {books &&
          books.length > 0 &&
          books.map((i) => (
            <Card
               key={i && i.id}
            
              image_src={i.volumeInfo?.imageLinks?.smallThumbnail}
            //   image_alt={i && i.original_title}
            //   id={i.id}
            />
          ))}
      </div>
      <div className="no-scrollbar hidden grid-flow-col overflow-x-scroll px-2 md:grid  ">
        {books &&
          books.length > 0 &&
          books.map((i) => (
            <Card
            key={i && i.id}
         
           image_src={i.volumeInfo?.imageLinks?.smallThumbnail}
         //   image_alt={i && i.original_title}
         //   id={i.id}
         />
          ))}
      </div>
    </div>
  );
};

export default Shelf;