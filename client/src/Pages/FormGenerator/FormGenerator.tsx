import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import FormFields from "../../Components/FormFields/FormFields";
import Data from "../../Fields.json";
import AddForm from "../../APIs/AddForm";
import { Bad_Request, Request_Succesfull, ToastError, ToastSuccess } from "../../Utils/Constant";
import { toast } from "react-toastify";
import moment from "moment";
import { dateStringToTimestamp, isValidDateTime } from "../../Utils/Function";
function FormGenerator() {
  const [inputValues, setInputValues] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [isDateValid, setIsDateValid] = useState<{ from: boolean; upto: boolean }>({ from: true, upto: true });

  const handleChange = (e: any) => {
    setInputValues((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    Data.map((input) => {
      if (input.name == "form_valid_from") {
        setInputValues((prev: any) => ({ ...prev, [input.name]: moment().format("DD/MM/YYYY hh:mm:ss A") }));
      } else if (input.name == "form_valid_upto") {
        setInputValues((prev: any) => ({ ...prev, [input.name]: moment().add(1, "days").format("DD/MM/YYYY hh:mm:ss A") }));
      } else {
        setInputValues((prev: any) => ({ ...prev, [input.name]: "" }));
      }
    });
  }, [Data]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (isDateValid.from && isDateValid.upto) {
      let from_timestamp = dateStringToTimestamp(inputValues.form_valid_from);

      let upto_timestamp = dateStringToTimestamp(inputValues.form_valid_upto);

      let obj = {
        ...inputValues,
        form_valid_from: from_timestamp,
        form_valid_upto: upto_timestamp,
      };

      const res = await AddForm(obj);
      if (res?.status == Request_Succesfull) {
        toast.success(res?.message, ToastSuccess);
      } else if (res?.response?.status == Bad_Request) {
        toast.error(res?.response?.data?.message, ToastError);
      } else {
        toast.error("Something went wrong!", ToastError);
      }
    } else {
      alert("invalid date");
    }

    setLoading(false);
  };

  useEffect(() => {
    setIsDateValid((prev) => ({ ...prev, from: isValidDateTime(inputValues.form_valid_from) }));
  }, [inputValues.form_valid_from]);
  useEffect(() => {
    setIsDateValid((prev) => ({ ...prev, upto: isValidDateTime(inputValues.form_valid_upto) }));
  }, [inputValues.form_valid_upto]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Create New Form</div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} style={{ height: "100%", width: "100%" }}>
          <FormFields isDateValid={isDateValid} inputValues={inputValues} handleChange={handleChange} />

          <button type="submit" className={styles.btn}>
            {loading ? <span className={styles.loader}></span> : "Generate Form"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormGenerator;
