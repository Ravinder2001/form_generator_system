import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";

import Middle from "../../Assets/Images/Middle.png";
import Footer from "../../Assets/Images/Footer.png";
import FormDetailsContainer from "../../Components/FormDetailsContainer/FormDetailsContainer";
import FormDetailsHeader from "../../Components/FormDetailsHeader/FormDetailsHeader";
import FormDetailsNavbar from "../../Components/FormDetailsNavbar/FormDetailsNavbar";
import neww from "../../Assets/Images/newww.png"
function FormDetails() {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;

      // Update isScroll based on scroll position
      setIsScroll(!isAtTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold based on your design
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.container}>
      {isScroll ? <FormDetailsNavbar /> : isMobile?<img src={neww} alt="" className={styles.new_img} />: <FormDetailsHeader />}

      <FormDetailsContainer id={location.pathname.split("/")[3]} isMobile={isMobile} />

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
