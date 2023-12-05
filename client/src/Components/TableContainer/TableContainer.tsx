import React from "react";
import styles from "./style.module.css";
import LucideIcons from "../../Assets/Icons/Icons";
import { FormType } from "../../Utils/Types";
import moment from "moment";
import { Form_Details_Route, Request_Succesfull, ToastError, ToastSuccess } from "../../Utils/Constant";
import QRCode from "qrcode.react";
import DeleteForm from "../../APIs/DeleteForm";
import { toast } from "react-toastify";
import { Button, message, Popconfirm } from "antd";
import { timestampToDateString } from "../../Utils/Function";
type props = {
  data: FormType[];
  loading: boolean;
  FetchFromList: () => void;
};
function TableContainer(props: props) {
  const { data, loading, FetchFromList } = props;

  const handleClick = (id: string) => {
    window.open(`${Form_Details_Route}/${id}`, "_blank");
  };

  const downloadQRCode = (form_name: string) => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement;
    const imageUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${form_name}.png`;
    link.click();
  };

  const handleDelete = async (id: string) => {
    const res = await DeleteForm(id);
    if (res?.status == Request_Succesfull) {
      FetchFromList();
      toast.success(res?.message, ToastSuccess);
    } else {
      toast.error("Something went wrong!", ToastError);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Action</th>
            <th className={styles.th}>Form Number</th>
            <th className={styles.th}>Valid Upto</th>
            <th className={styles.th}>Form Type</th>
            <th className={styles.th}>Firm Name</th>
            <th className={styles.th}>Mineral Name</th>
            <th className={styles.th}>Weight</th>
            <th className={styles.th}>Sale Value</th>
            <th className={styles.th}>Vehicle Type</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {loading ? (
            <div>Loading</div>
          ) : (
            <>
              {data.map((item) => (
                <tr className={styles.tr} key={item.id}>
                  <td className={`${styles.td} ${styles.actionBox}`}>
                    <div onClick={() => handleClick(item.form_no)}>
                      <LucideIcons name="view" color="#ab00fa" size={18} />
                    </div>
                    <div
                      onClick={() => {
                        downloadQRCode(item.form_no);
                      }}
                    >
                      <LucideIcons name="qr" size={18} />
                    </div>
                    <Popconfirm
                      title="Delete the Form"
                      description="Are you sure to delete this Form?"
                      onConfirm={() => {
                        handleDelete(item.id);
                      }}
                      // onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <div>
                        <LucideIcons name="delete" color="#fa0000" size={18} />
                      </div>
                    </Popconfirm>
                  </td>
                  <td className={styles.td}>{item.form_no}</td>
                  <td className={styles.td}>{timestampToDateString(Number(item.form_valid_upto))}</td>
                  <td className={styles.td}>{item.form_type}</td>
                  <td className={styles.td}>{item.firm_name}</td>
                  <td className={styles.td}>{item.mineral_name}</td>
                  <td className={styles.td}>{item.weight}</td>
                  <td className={styles.td}>{item.sale_value}</td>
                  <td className={styles.td}>{item.vehicle_type}</td>

                  <QRCode
                    id="qr-code-canvas"
                    value={`https://dgmappl.ukgov.info/verifyravanacheck/view/${item.form_no}`}
                    style={{ display: "none" }}
                  />
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
