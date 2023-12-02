import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./style.module.css";
import Data from "../../Fields.json";
import moment from "moment";

type props = {
  inputValues: any;
  handleChange: (e: any) => void;
};
function FormFields(props: props) {
  const { inputValues, handleChange } = props;

  return (
    <div className={styles.container}>
      {Data.map((input) => {
        if (input.name == "form_valid_form") {
          input.default_value = moment().format("YYYY-MM-DDTHH:mm");
        }
        if (input.name == "form_valid_upto") {
          input.default_value = moment().add(1, "day").format("YYYY-MM-DDTHH:mm");
        }
        return (
          <div className={styles.box}>
            <div className={styles.label}>{input.label}</div>
            {input.tag_type == "input" ? (
              <input
                required
                type={input.input_type}
                onChange={handleChange}
                value={inputValues?.[input.name]}
                name={input.name}
                className={styles.input}
              />
            ) : (
              <textarea required rows={1} name={input.name} onChange={handleChange} value={inputValues?.[input.name]} className={styles.textarea} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FormFields;
