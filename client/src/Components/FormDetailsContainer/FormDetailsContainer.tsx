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
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold based on your design
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isExpired ? <div className={styles.exipred}>Related Form No has been already Expired.</div> : null}
      <div className={styles.heading}>Form Details</div>
      <div className={styles.tableContainer}>
        {isExpired ? (
          <div className={styles.expired_img}>
            <img src="https://dgmappl.uk.gov.in/Images/Expired_Form.png" alt="" />
          </div>
        ) : null}
        {!loading ? (
          <>
            {formDetails ? (
              <table className={styles.table}>
                <tbody className={styles.tbody}>
                  {Data.map((item) =>
                    isMobile ? (
                      <tr key={item.name} className={styles.tr}>
                        <td className={styles.td}>{(formDetails as any)?.[item?.name]}</td>
                        <td className={`${styles.td} ${styles.label}`}>{item?.label}</td>
                      </tr>
                    ) : (
                      <tr key={item.name} className={styles.tr}>
                        <td className={`${styles.td} ${styles.label}`}>{item?.label}</td>
                        <td className={styles.td}>{(formDetails as any)?.[item?.name]}</td>
                      </tr>
                    )
                  )}
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
