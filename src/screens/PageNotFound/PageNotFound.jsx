import React from "react";
const PageNotFound = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
        <h1 style={{ color: "black", fontWeight: 600, fontSize: "25px" }}>
          Page not found
        </h1>
      </div>
    </>
  );
};
export default React.memo(PageNotFound);
