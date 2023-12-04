import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./style.module.css";
import Data from "../../Fields.json";
import moment from "moment";

type props = {
  inputValues: any;
  handleChange: (e: any) => void;
  isDateValid: { from: boolean; upto: boolean };
};
function FormFields(props: props) {
  const { inputValues, handleChange, isDateValid } = props;

  return (
    <div className={styles.container}>
      {Data.map((input) => (
        <div className={styles.box}>
          <div className={styles.label}>{input.label}</div>
          {input.tag_type == "input" ? (
            <input
              required
              type={input.input_type}
              onChange={handleChange}
              value={inputValues?.[input.name]}
              name={input.name}
              className={`${styles.input} ${input.name == "form_valid_from" && !isDateValid.from && styles.invalidDate}  ${
                input.name == "form_valid_upto" && !isDateValid.upto && styles.invalidDate
              }`}
            />
          ) : (
            <textarea required rows={1} name={input.name} onChange={handleChange} value={inputValues?.[input.name]} className={styles.textarea} />
          )}
          {input.name == "form_valid_from" && !isDateValid.from && <div className={styles.dateError}>DD/MM/YYYY HH:MM:SS AM/PM</div>}
          {input.name == "form_valid_upto" && !isDateValid.upto && <div className={styles.dateError}>DD/MM/YYYY HH:MM:SS AM/PM</div>}
        </div>
      ))}
    </div>
  );
}

export default FormFields;
