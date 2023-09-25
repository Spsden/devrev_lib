import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";

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

  return <div>{JSON.stringify(issuedBooks)}hjvjhv</div>;
};

export default Borrowed;
