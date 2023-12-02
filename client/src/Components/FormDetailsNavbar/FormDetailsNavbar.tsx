import React from "react";
import styles from "./style.module.css";
import Image from "../../Assets/Images/nav_image.png";
function FormDetailsNavbar() {
  const handleClick = (type: string) => {
    switch (type) {
      case "home":
        window.location.href = "https://dgmappl.uk.gov.in/Home.aspx";
        break;
      case "track":
        window.location.href = "https://dgmappl.uk.gov.in/TrackOnlinePayment.aspx";
        break;
      case "pay":
        window.location.href = "https://dgmappl.uk.gov.in/OnlinePayment.aspx";
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
    <div className={styles.container}>
      <img src={Image} alt="" className={styles.img} />
      <div className={styles.box}>
        <div
          onClick={() => {
            handleClick("home");
          }}
        >
          home
        </div>
        <div
          onClick={() => {
            handleClick("transporter");
          }}
        >
          transporter
        </div>
        <div
          onClick={() => {
            handleClick("pay");
          }}
        >
          pay online
        </div>
        <div
          onClick={() => {
            handleClick("track");
          }}
        >
          track payent
        </div>
        <div
          onClick={() => {
            handleClick("sign");
          }}
        >
          sign in
        </div>
        <div
          onClick={() => {
            handleClick("complaints");
          }}
        >
          complaints
        </div>
        <div
          onClick={() => {
            handleClick("contact");
          }}
        >
          contact us
        </div>
      </div>
    </div>
  );
}

export default FormDetailsNavbar;
