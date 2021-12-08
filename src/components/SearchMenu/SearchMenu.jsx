import React from "react";
import { NavLink } from "react-router-dom";
// import styles from "./SearchMenu.module.css";

const SearchMenu = () => {
  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-center flex-column flex-sm-row ">
        <NavLink className="btn btn-primary m-2 pe-auto" to="/search/q=Cat">
          Cat
        </NavLink>
        <NavLink className="btn btn-primary m-2 pe-auto" to="/search/q=Dog">
          Dog
        </NavLink>
        <NavLink className="btn btn-primary m-2 pe-auto" to="/search/q=Mountain">
          Mountain
        </NavLink>
        <NavLink className="btn btn-primary m-2 pe-auto" to="/search/q=Cars">
          Cars
        </NavLink>
      </div>
    </div>
  );
};

export default SearchMenu;
