import React from "react";

import styles from "./SearchMenu.module.css";

const SearchMenu = ({ onSearch, setUrls}) => {
  const handleClick = (e) => {
    setUrls([]);
    onSearch(e.target.innerText);
  }
  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-center flex-column flex-sm-row ">
        <button className="btn btn-primary m-2 pe-auto" onClick={handleClick}>Cat</button>
        <button className="btn btn-primary m-2 pe-auto" onClick={handleClick}>Dog</button>
        <button className="btn btn-primary m-2 pe-auto" onClick={handleClick}>Mountain</button>
        <button className="btn btn-primary m-2 pe-auto" onClick={handleClick}>Cars</button>
      </div>
    </div>
  );
};

export default SearchMenu;
