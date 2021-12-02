import React, {useState} from "react";

import styles from "./SearchForm.module.css";

const SearchForm = ({ setUrls, onSearch}) => {
const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);    
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
    setUrls([]);
  }
  return (
    <div className="container p-4 p-md-5">
      <form className={styles.form} onSubmit={handleSubmit}>
        <input onChange={handleChange} className="form-control" type="search" placeholder="Cat" />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
