import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css"
import { Home_Route } from "../Utils/Constant";
function ErrorFallback() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      Something went wrong
      {/* <img src={server} alt="" className={styles.img} /> */}
      <button className={styles.button} onClick={()=>navigate(Home_Route)}>Home</button>
    </div>
  );
}

export default ErrorFallback;
