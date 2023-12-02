import React from "react";
import styles from "./style.module.css";
import Header from "../../Assets/Images/Header.png";
import Mobile_Header from "../../Assets/Images/mobile_header.png";
function FormDetailsHeader() {
  const handleClick = (type: string) => {
    switch (type) {
      case "home":
        window.location.href = "https://dgmappl.uk.gov.in/Home.aspx";
        break;

      case "declaration":
        alert("This service is not available");
        break;
      case "track":
        window.location.href = "https://dgmappl.uk.gov.in/TrackOnlinePayment.aspx";
        break;
      case "pay":
        window.location.href = "https://dgmappl.uk.gov.in/OnlinePayment.aspx";
        break;
      case "mobile":
        window.location.href = "https://dgmappl.ukgov.info/verifyravanacheck/view/IJ23104007321#";
        break;
      case "sign":
        alert("Please go to home page. Then Click Sign in Button.");
        break;
      case "contact":
        window.location.href = "https://dgmappl.uk.gov.in/ContactUs.aspx";
        break;
      case "complaints":
        window.location.href = "https://dgmappl.uk.gov.in/ComplaintHome.aspx";
        break;
      case "transporter":
        window.location.href = "https://dgmappl.uk.gov.in/TransporterRegistration.aspx";
        break;
      default:
        return;
    }
  };
  return (
    <div className={styles.header}>
      <img src={Header} alt="" className={styles.img} />
      <img src={Mobile_Header} alt="" className={styles.img_mobile} />
      <div className={styles.hiddenBox}>
        <div
          onClick={() => {
            handleClick("home");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("declaration");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("track");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("pay");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("mobile");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("sign");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("contact");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("complaints");
          }}
        ></div>
        <div
          onClick={() => {
            handleClick("transporter");
          }}
        ></div>
      </div>
    </div>
  );
}

export default FormDetailsHeader;
