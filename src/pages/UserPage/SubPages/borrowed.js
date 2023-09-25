import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import Book from "../../../component/card/bookCard";

const Borrowed = () => {
  const auth = useAuthUser();

  const [issuedBooks,setIssuedBooks] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://booksdbdep.onrender.com/api/v1/library`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${auth().token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setIssuedBooks(data.tasks)
      console.log(data);
      // Process the data here
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <div>
      <div className=" pt-8">
        <div
          
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full"
        >
          {issuedBooks &&
            issuedBooks.length > 0 &&
            issuedBooks.map((book, index) => (
              <Book
                key={index}
                title={book.book_title}
                author={book.book_author}
                genre={book.genre}
                coverImage={book.image_url_l}
                authCheckCallBack={()=>{}}
              />
            ))}
        </div>
      </div>
    </div>
    </>

  )
};

export default Borrowed;
