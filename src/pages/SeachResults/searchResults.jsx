import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ListingPageComponent from "./ListingPageComponent";
import Card2 from "../../component/card/card2";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router-dom";

// Book.js

function Book({ title, author, genre, coverImage }) {
  return (
    <div className="w-52 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src={coverImage}
        alt="Product"
        className="h-52 w-52 object-cover rounded-t-xl"
      ></img>

      <div className="px-4 py-2 w-48">
        <span className="text-gray-400 mr-3 uppercase text-xs">{author}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {title}
        </p>
        <p className="text-sm text-gray-600 cursor-auto ml-2">10</p>
        <div className="flex items-center">
          <div className="ml-auto"></div>
        </div>
      </div>
    </div>
  );
}

function SearchResults({ redirectionTo }) {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  // State variable for the API key

  const key = "AIzaSyBsWNaSjQ41Q_AXHNLAaBr7J_o8AsCevKw";

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
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
