import React from "react";
import styles from "./style.module.css";
import FormFields from "../../Components/FormFields/FormFields";
function FormGenerator() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Create New Form</div>
      <div className={styles.fields}><FormFields /></div>
      <div className={styles.btn}>Generate Form</div>
    </div>
  );
}

export default FormGenerator;
