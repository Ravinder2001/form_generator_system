import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Data from "../../Fields.json";
import { FormType } from "../../Utils/Types";
import FormDetails from "../../APIs/FormDetails";
import { Request_Succesfull, ToastError } from "../../Utils/Constant";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

function FormDetailsContainer(props: Props) {
  const [formDetails, setFormDetails] = useState<FormType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const FetchFormDetails = async () => {
    setLoading(true);
    const res = await FormDetails(props.id);
    if (res?.status == Request_Succesfull) {
      setFormDetails(res?.data?.formDetails);
      setIsExpired(res?.data?.isExpired);
    } else {
      toast.error("Something went wrong!", ToastError);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchFormDetails();
  }, [props.id]);

  return (
    <div className={styles.container}>
      {isExpired ? <div className={styles.exipred}>Related Form No has been already Expired.</div> : null}
      <div className={styles.heading}>Form Details</div>
      <div className={styles.tableContainer}>
        {!loading ? (
          <>
            {formDetails ? (
              <table className={styles.table}>
                
                <tbody className={styles.tbody}>
                  {Data.map((item) => (
                    <tr key={item.name} className={styles.tr}>
                      <td className={`${styles.td} ${styles.label}`}>{item?.label}</td>
                      <td className={styles.td}>{(formDetails as any)?.[item?.name]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>No data Found!</div>
            )}
          </>
        ) : (
          <span className={styles.loader}></span>
        )}
      </div>
    </div>
  );
}

export default FormDetailsContainer;
