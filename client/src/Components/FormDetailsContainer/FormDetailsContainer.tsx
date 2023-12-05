import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Data from "../../Fields.json";
import { FormType } from "../../Utils/Types";
import FormDetails from "../../APIs/FormDetails";
import { Request_Succesfull, ToastError } from "../../Utils/Constant";
import { toast } from "react-toastify";
import { timestampToDateString } from "../../Utils/Function";

type Props = {
  id: string;
  isMobile: boolean;
};

function FormDetailsContainer(props: Props) {
  const { isMobile } = props;
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
        {isExpired ? (
          <div className={styles.expired_img}>
            <img src="https://dgmappl.uk.gov.in/Images/Expired_Form.png" alt="" />
          </div>
        ) : null}
        {!loading ? (
          <>
            {formDetails ? (
              <div className={styles.main_container}>
                <div className={styles.box}>
                  <div className={styles.label}>Form Type :</div>
                  <div className={styles.value}>{formDetails?.form_type}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Form No :</div>
                  <div className={styles.value}>{formDetails?.form_no}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Movement Type :</div>
                  <div className={styles.value}>{formDetails?.movement_type}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Owner Name :</div>
                  <div className={styles.value}>{formDetails?.owner_name}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Firm Name :</div>
                  <div className={styles.value}>{formDetails?.firm_name}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Lease Address :</div>
                  <div className={styles.value}>{formDetails?.lease_address}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Seller Reg. No :</div>
                  <div className={styles.value}>{formDetails?.seller_reg_no}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Seller GSTIN :</div>
                  <div className={styles.value}>{formDetails?.seller_gst}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Seller Address :</div>
                  <div className={styles.value}>{formDetails?.seller_address}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Mineral Name :</div>
                  <div className={styles.value}>{formDetails?.mineral_name}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Weight (Tons) :</div>
                  <div className={styles.value}>{formDetails?.weight}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Sale Value (GST inclusive) :</div>
                  <div className={styles.value}>{formDetails?.sale_value}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>GST Rate :</div>
                  <div className={styles.value}>{formDetails?.gst_rate}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Payble GST :</div>
                  <div className={styles.value}>{formDetails?.payble_gst}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Purchaser Reg. Status :</div>
                  <div className={styles.value}>{formDetails?.purchase_status}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Purchaser Reg. No :</div>
                  <div className={styles.value}>{formDetails?.purchase_reg_no}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Purchaser GSTIN :</div>
                  <div className={styles.value}>{formDetails?.purchase_gst}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Destination Address :</div>
                  <div className={styles.value}>{formDetails?.destination_address}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Vehicle Type :</div>
                  <div className={styles.value}>{formDetails?.vehicle_type}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Vehicle Reg No :</div>
                  <div className={styles.value}>{formDetails?.vehicle_reg_no}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Driver Name :</div>
                  <div className={styles.value}>{formDetails?.driver_name}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Driver Mobile No :</div>
                  <div className={styles.value}>{formDetails?.driver_no}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Travel Time (Hours) :</div>
                  <div className={styles.value}>{formDetails?.travel_time}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Travel Distance KM :</div>
                  <div className={styles.value}>{formDetails?.travel_distance}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Form Valid From :</div>
                  <div className={styles.value}>{timestampToDateString(Number(formDetails.form_valid_from))}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>Form Valid Upto :</div>
                  <div className={styles.value}>{timestampToDateString(Number(formDetails.form_valid_upto))}</div>
                </div>
              </div>
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
