import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useIsAuthenticated } from "react-auth-kit";
import "react-toastify/dist/ReactToastify.css";
import Book from "../../component/card/bookCard";

// Book.js


function SearchResults({ redirectionTo }) {
  const { searchTerm } = useParams();

  console.log(searchTerm);
  const listInnerRef = useRef();
  const isAuthenticated = useIsAuthenticated();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  // State variable for the API key
  const notify = () => {
   

    toast.info("Login to add Books !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const key = "AIzaSyBsWNaSjQ41Q_AXHNLAaBr7J_o8AsCevKw";

  const addButtonHandler = () => {
    notify();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${currPage}&maxResults=10&key=${key}`
        );

        if (response.data.items && response.data.items.length === 0) {
          setLastPage(true);
          return;
        }
        console.log(response.data.items);

        setPrevPage(currPage);
        setBookList([...bookList, ...response.data.items]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (!lastPage && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastPage, prevPage, bookList]);

  useEffect(() => {
    setCurrPage(0);
    setBookList([]);
  }, [searchTerm]);

  const onScroll = () => {
    if (listInnerRef.current) {
      console.log("'scrolled'");
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>
      <div className="bg-yellow pt-8">
        <div
          ref={listInnerRef}
          onScroll={onScroll}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "90vh",

            overflow: "auto",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {bookList &&
            bookList.length > 0 &&
            bookList.map((book, index) => (
              <Book
                key={index}
                title={book.volumeInfo.title}
                author={book.volumeInfo?.authors?.join(" ")}
                genre={book.volumeInfo?.categories?.join(" ")}
                coverImage={book.volumeInfo?.imageLinks?.thumbnail}
              
                authCheckCallBack={addButtonHandler}
                gbooks_id={book.id}
                isbn={"n/a"}
                publisher={book.volumeInfo?.publisher}
                year={book.volumeInfo.publishedDate}

                
              

              />
            ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SearchResults;
