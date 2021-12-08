import React from "react";

import styles from "./App.module.css";
import { SearchedQuery, SearchForm, SearchMenu } from "./components";

function App() {  
  return (
    <div className="App container p-5">
      <div className={styles.logo}>
        <h1 className={styles.logoText}>Snap Shot</h1>
      </div>

      <SearchForm />
      <SearchMenu />

      <SearchedQuery />
    </div>
  );
}

export default App;
