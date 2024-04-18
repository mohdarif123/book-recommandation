import React, { useState } from "react";
import Modal from "./Modal";
import PageNotFound from "../PageNotFound/PageNotFound";
const Card = ({ book, loading }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book?.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        // if (thumbnail != undefined && amount != undefined) {
        return (
          <div className="card" key={item.id}>
            <div class="card">
              <img src={thumbnail} alt="thumbnail" width={"100%"} />
              <h1 className="authorsStyle">
                {item?.volumeInfo?.authors[0]?.substring(0, 15)}
              </h1>
              <h1
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginTop: "8px",
                  height: "80px",
                }}
                className="title"
              >
                {item?.volumeInfo?.title?.substring(0, 40)}
              </h1>
              <hr />
              <h1
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginTop: "8px",
                  height: "80px",
                  marginBottom: "10px",
                }}
                className="title"
              >
                {item?.volumeInfo?.description?.substring(0, 80)
                  ? item?.volumeInfo?.description?.substring(0, 80)
                  : "No Description found!"}
              </h1>
              <p>
                <button
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  {amount ? `${String.fromCharCode(8377)}${amount}` : "Free"}
                </button>
              </p>
            </div>
          </div>
        );
        // }
      })}
      {loading === false && book?.length === 0 && <PageNotFound />}

      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};
export default Card;
