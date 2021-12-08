import React, {useState} from "react";

import styles from "./SearchForm.module.css";

const SearchForm = ({ setUrls, onSearch}) => {
const [query, setQuery] = useState("");
  const handleChange = (e) => {
    if(e.target.value === "")
    {
      return;
    }
    setQuery(e.target.value);
  }
  return (
    <div className="container p-4 p-md-5">
      <form className={styles.form} action={"q=" + query}>
        <input onChange={handleChange} className="form-control" type="search" placeholder="Cat" />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
