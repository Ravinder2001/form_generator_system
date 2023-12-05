import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";

import Middle from "../../Assets/Images/Middle.png";
import Footer from "../../Assets/Images/Footer.png";
import FormDetailsContainer from "../../Components/FormDetailsContainer/FormDetailsContainer";
import FormDetailsHeader from "../../Components/FormDetailsHeader/FormDetailsHeader";
import FormDetailsNavbar from "../../Components/FormDetailsNavbar/FormDetailsNavbar";
function FormDetails() {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {

      const isAtTop = window.scrollY === 0;
  
      // Update isScroll based on scroll position
      setIsScroll(!isAtTop);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScroll]);
  return (
    <div className={styles.container}>
      {isScroll ? <FormDetailsNavbar /> : <FormDetailsHeader />}

      <FormDetailsContainer id={location.pathname.split("/")[3]} />

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
