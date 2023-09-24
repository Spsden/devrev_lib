import { React } from "react";
import Card2 from "../../component/card/card2";

function ListingPageComponent({ onScroll, listInnerRef, booksList }) {
  return (
    <div>
        {JSON.stringify(booksList)}
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto "
      >
        
        {booksList && booksList.length > 0 &&
        
        booksList.map((book, index) => {
          return (
            <Card2
            key={index}
              title={book.volumeInfo.title}
              img_src={
               
                book.volumeInfo.imageLinks.thumbnail
              }
            />
            // <div
            //   key={index}
            //   style={{
            //     marginTop: "40px",
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     flexDirection: "column"
            //   }}
            // >
            //   <p>Name: {item.name}</p>
            //   <p>Trips: {item.trips}</p>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPageComponent;
