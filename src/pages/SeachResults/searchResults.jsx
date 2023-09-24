import React, { useState, useEffect ,useRef} from "react";
import { useParams } from "react-router-dom";

import Card2 from "../../component/card/card2";
import MoonLoader from "react-spinners/MoonLoader";



const SearchResults = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);

  const [result, setResult] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const listInnerRef = useRef();

  async function fetchData(searchTerm, page) {
    try {
      const endpoint = "http://localhost:3001/api/v1/bookdb";

      // Construct the URL with query parameters
      const url = `${endpoint}?search=${encodeURIComponent(
        searchTerm
      )}&page=${page}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      const searchResponse = res.results;

      // If it's the first page (page === 1), set the results directly, otherwise append
      setResult((data) => (page === 0 ? searchResponse : [...data, ...searchResponse]));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       setLoading(true);
  //       setPage((prevPage) => {
  //         // Log the page number when it changes
  //         console.log(`Page changed to: ${prevPage + 1}`);
  //         return prevPage + 1;
  //       });
  //     }
  //   }
  // };

  const handleInfiniteScroll = async () => {
    console.log("trigge")
    try {
      console.log(page);
     
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prevPage) => {
          // Log the page number when it changes
          console.log(`Page changed to: ${prevPage + 1}`);
          return prevPage + 1;
        });
      }
    } catch (error) {}
  };

  

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [page]);

  useEffect(() => {
    // Clear existing results when a new search term is given
    setResult([]);
    setPage(1); // Reset page to 1 for the new search
    fetchData(searchTerm, 1);
  }, [searchTerm]);

  return (
    <div className="bg-yellow pt-8">
      <div ref={listInnerRef} onScroll={console.log("scrolllled")} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-4/6 bg-slate-600	">
        {result &&
          result.length > 0 &&
          result.map((i) => (
            <Card2 key={i && i.id} title={i.book_title} img_src={i.image_url_m} />
          ))}
      </div>
      {loading && <MoonLoader />}
    </div>
  );
};

export default SearchResults;



