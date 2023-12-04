import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import FormFields from "../../Components/FormFields/FormFields";
import Data from "../../Fields.json";
import AddForm from "../../APIs/AddForm";
import { Bad_Request, Request_Succesfull, ToastError, ToastSuccess } from "../../Utils/Constant";
import { toast } from "react-toastify";
import moment from "moment";
import { isValidDateTime } from "../../Utils/Function";
function FormGenerator() {
  const [inputValues, setInputValues] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    console.log("🚀  file: FormGenerator.tsx:15  e:", e.target.value);
    setInputValues((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    Data.map((input) => {
      if (input.name == "form_valid_from") {
        setInputValues((prev: any) => ({ ...prev, [input.name]: moment().format("DD/MM/YYYY h:mm:ss A") }));
      } else if (input.name == "form_valid_upto") {
        setInputValues((prev: any) => ({ ...prev, [input.name]: moment().add(1, "days").format("DD/MM/YYYY h:mm:ss A") }));
      } else {
        setInputValues((prev: any) => ({ ...prev, [input.name]: "1" }));
      }
    });
  }, [Data]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (isValidDateTime(inputValues.form_valid_from) && isValidDateTime(inputValues.form_valid_upto)) {
      const res = await AddForm(inputValues);
      console.log("🚀  file: FormGenerator.tsx:21  res:", res);
      if (res?.status == Request_Succesfull) {
        toast.success(res?.message, ToastSuccess);
      } else if (res?.response.status == Bad_Request) {
        toast.error(res?.response?.data?.message, ToastError);
      } else {
        toast.error("Something went wrong!", ToastError);
      }
    } else {
      alert("Invalid date and time");
    }
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Create New Form</div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <FormFields inputValues={inputValues} handleChange={handleChange} />
          </div>

          <button type="submit" className={styles.btn}>
            {loading ? <span className={styles.loader}></span> : "Generate Form"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormGenerator;
