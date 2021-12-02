import React from "react";
import styles from "./Gallary.module.css";

const Gallary = ({urls}) => {
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
