import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { SearchForm, Gallary, SearchMenu } from "./components";

import styles from "./App.module.css";

import { get_photos } from './api/index';

function App() {
  const [urls, setUrls] = useState([]);

  const fetchAPI = async (query) => {
    const photos_array = await get_photos(query);
    let urls_array = photos_array.map((image) => image);
  
    setUrls(urls_array);
  };

  useEffect(() => {
    fetchAPI("cat");
  }, [])

  const onSearch = (query) => {
    fetchAPI(query);
    console.log(query);
  };
 
  return (
    <div className="App container p-5">
      <div className={styles.logo}>
        <h1 className={styles.logoText}>Snap Shot</h1>
      </div>
      <SearchForm setUrls={setUrls}  onSearch={onSearch} />
      <SearchMenu onSearch={onSearch} setUrls={setUrls} />
      <Gallary urls={urls} />
    </div>
  );
}

export default App;
