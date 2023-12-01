import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import Header from "../../Assets/Images/Header.png";
import Middle from "../../Assets/Images/Middle.png";
import Footer from "../../Assets/Images/Footer.png";
import FormDetailsContainer from "../../Components/FormDetailsContainer/FormDetailsContainer";
function FormDetails() {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Header} alt="" className={styles.img} />
      </div>

      <FormDetailsContainer id={location.pathname.split("/")[2]} />

      <div className={styles.middle}>
        <img src={Middle} alt="" className={styles.img} />
      </div>
      <div className={styles.footer}>
        <img src={Footer} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default FormDetails;
