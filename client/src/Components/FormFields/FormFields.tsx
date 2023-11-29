import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./style.module.css";
import Data from "../../Fields.json";

function FormFields() {
  const [inputValues, setInputValues] = useState<any>({});
  const handleChange = (e: any) => {
    setInputValues((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    Data.map((input) => {
      setInputValues((prev: any) => ({ ...prev, [input.name]: input.default_value }));
    });
  }, [Data]);
  return (
    <div className={styles.container}>
      {Data.map((input) => (
        <div className={styles.box}>
          <div className={styles.label}>{input.label}</div>
          {input.tag_type == "input" ? (
            <input type={input.input_type} onChange={handleChange} value={inputValues?.[input.name]} name={input.name} className={styles.input} />
          ) : (
            <textarea rows={4} name={input.name} onChange={handleChange} value={inputValues?.[input.name]} className={styles.input} />
          )}
        </div>
      ))}
    </div>
  );
}

export default FormFields;
