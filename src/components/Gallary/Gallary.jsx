import React, {useState, useEffect} from "react";
import styles from "./Gallary.module.css";
import { get_photos } from "../../api/index";

const Gallary = ({ q }) => {
  const [urls, setUrls] = useState([]);  
  useEffect(() => {
    const fetchAPI = async () => {
      const urls_array = await get_photos(q);      
      setUrls(urls_array);
    };
    fetchAPI();
  }, [q]);
  if (urls.length < 1) {
    return (<div className="text-center fs-1">Fetching...</div>);
  }
  return (
    <div className="container">
      <div className="text-center">
        {urls.map((image, key) => {
          let farm = image.farm;
          let server = image.server;
          let id = image.id;
          let secret = image.secret;
          let title = image.title;
          let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
          return (<img key={key} src={url} className={styles.images} alt={title} />)
        })}
      </div>
    </div>
  );
};

export default Gallary;
