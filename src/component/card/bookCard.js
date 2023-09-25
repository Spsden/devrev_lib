import { useState } from "react";

import { useIsAuthenticated } from "react-auth-kit";
import { useAuthUser } from "react-auth-kit";

export default function Book({
  title,
  author,
  genre,
  coverImage,
  authCheckCallBack,
  gbooks_id,
  isbn,
  publisher,
  year,
}) {
  const [count, setCount] = useState(10);
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  async function postData(dataToSend) {
    try {
      const response = await fetch(
        "https://booksdbdep.onrender.com/api/v1/library",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth().token}`,
            "Content-Type": "application/json", // Specify JSON content type
          },
          body: dataToSend, // Convert the JSON object to a string
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      // Process the response data here
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
    }
  }

  const handleObjectCreation = () => {
    const toSend = {
      gbooks_id: gbooks_id,
      ISBN: isbn,
      book_title: title,
      image_url_s: "some link",
      image_url_m: "some link",
      image_url_l: coverImage,
      publisher: publisher,
      book_author: author,
      number_available: 10,
      year_of_publication: year,
    };

    const bookData = JSON.stringify(toSend);
    console.log(bookData)

    postData(bookData);
  };

  const handleAddButton = () => {
    console.log(isAuthenticated === true);
    if (isAuthenticated()) {
      setCount(count - 1);
      handleObjectCreation();
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
