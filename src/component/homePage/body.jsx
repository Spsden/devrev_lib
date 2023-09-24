import React from "react";
import Shelf from "../Shelf/shelf";
import { recommendations } from "../../utiils/data/recommendation";
const Body = () => {
  const fiction = recommendations.filter((book) => book.genre === "Fiction");
  const history = recommendations.filter((book) => book.genre === "History");

  const horror = recommendations.filter((book) => book.genre === "Horror");

  const romance = recommendations.filter((book) => book.genre === "Romance");
  const thriller = recommendations.filter((book) => book.genre === "Thriller");

  const allRecommendations = [
    {
      genre: "Fiction",
      data: fiction,
    },
    {
      genre: "History",
      data: history,
    },
    {
      genre: "Romance",
      data: romance,
    },
    {
      genre: "Thriller",
      data: thriller,
    },
    {
      genre: "Horror",
      data: horror,
    },
  ];

  console.log(allRecommendations);

  return (
    <div className="">
      {allRecommendations.map((data) => {
        return <Shelf title={data.genre} books={data.data} />;
      })}
    </div>
  );
};
export default Body;
