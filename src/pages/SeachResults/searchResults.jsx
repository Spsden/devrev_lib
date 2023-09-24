import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useIsAuthenticated } from "react-auth-kit";
import "react-toastify/dist/ReactToastify.css";

// Book.js

function Book({ title, author, genre, coverImage, authCheckCallBack }) {
  const [count, setCount] = useState(10);
  const isAuthenticated = useIsAuthenticated();
  const handleAddButton = () => {
    console.log(isAuthenticated === true);
    if (isAuthenticated() ) {
      setCount(count - 1);
    } else {
      authCheckCallBack();
    }
  };

  return (
    <div className="w-52 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src={coverImage}
        alt="Product"
        className="h-52 w-52 object-cover rounded-t-xl"
      ></img>

      <div className="px-4 py-2 w-48">
        <span className="text-gray-400 mr-3 uppercase text-xs ">
          <p className="truncate block capitalize">{author}</p>
        </span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {title}
        </p>
        <div className="flex justify-between items-center ">
          <p className="text-sm text-gray-600 cursor-auto ml-2">{count}</p>
          <div className=" ">
            <button
              type="button"
              onClick={handleAddButton}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              />
            ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SearchResults;
