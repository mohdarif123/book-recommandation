import React, { useEffect, useState } from "react";
import Card from "./Card";
import ChildrenImage from "../../assets/ChildrenImage.png";
import Loader from "../../global/Loader/Loader";

const AllBooks = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultQuery = "a";

  useEffect(() => {
    if (search !== "") {
      handleSearchBooks();
    } else {
      fetchAllBookMethod();
    }
  }, [search]);

  console.log(bookData,"bookData")

  const fetchAllBookMethod = async (evt) => {
    try {
      setLoading(true);
      //   const response = await fetch(
      //     `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDeRyxszLMKRwhRZoKBcNP_21gJfFiwrNc`
      //   );
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}&key=AIzaSyDeRyxszLMKRwhRZoKBcNP_21gJfFiwrNc`
      );
      const data = await response.json();
      setBookData(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // searching method
  const handleSearchBooks = () => {
    if (search !== "") {
      setLoading(true);
      const result = bookData.filter((items, index) => {
        return items?.volumeInfo?.authors?.[0] === search;
      });
      setBookData(result);
      setLoading(false);
    }
  };

  const handleSearchOnchange = (e) => {
    const { value } = e.target;
    if (value) {
      setSearch(value.trim());
    } else {
      setSearch("");
    }
  };

  const getMainDashboard = () => {
    return (
      <>
        <div className="header">
          <div className="row1">
            <h1 style={{ color: "white" }}>
              A room without books is like
              <br /> a body without a soul.
            </h1>
          </div>
          <div className="row2">
            <h2 style={{ color: "white" }}>Find Your Book</h2>
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={handleSearchOnchange}
              />
              {/* <button
                type="button"
                className="buttonStyle"
                onClick={handleSearchBooks}
              >
                Search
              </button> */}
            </div>
            <img src={ChildrenImage} alt="bgImage" />
          </div>
        </div>

        <div className="container">
          {<Card book={bookData} loading={loading} />}
        </div>
        {loading && <Loader />}
      </>
    );
  };
  return getMainDashboard();
};
export default React.memo(AllBooks);
