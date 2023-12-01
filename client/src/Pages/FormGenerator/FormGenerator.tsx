import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import FormFields from "../../Components/FormFields/FormFields";
import Data from "../../Fields.json";
import AddForm from "../../APIs/AddForm";
import { Bad_Request, Request_Succesfull, ToastError, ToastSuccess } from "../../Utils/Constant";
import { toast } from "react-toastify";
function FormGenerator() {
  const [inputValues, setInputValues] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    console.log("🚀  file: FormGenerator.tsx:15  e:", e.target.value)
    setInputValues((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    Data.map((input) => {
      setInputValues((prev: any) => ({ ...prev, [input.name]: input.default_value }));
    });
  }, [Data]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    const res = await AddForm(inputValues);
    console.log("🚀  file: FormGenerator.tsx:21  res:", res);
    if (res?.status == Request_Succesfull) {
      toast.success(res?.message, ToastSuccess);
    } else if (res?.response.status == Bad_Request) {
      toast.error(res?.response?.data?.message, ToastError);
    }
    setLoading(false)
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Create New Form</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <FormFields inputValues={inputValues} handleChange={handleChange} />
        </div>

        <button type="submit" className={styles.btn}>
          {loading ? <span className={styles.loader}></span> : "Generate Form"}
        </button>
      </form>
    </div>
  );
}

export default FormGenerator;
