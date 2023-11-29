import React from "react";
import styles from "./style.module.css";
import LucideIcons from "../../Assets/Icons/Icons";
import { FormType } from "../../Utils/Types";
import moment from "moment";
type props = {
  data: FormType[];
};
function TableContainer(props: props) {
  const { data } = props;
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Action</th>
            <th className={styles.th}>Form Number</th>
            <th className={styles.th}>Created At</th>
            <th className={styles.th}>Form Type</th>
            <th className={styles.th}>Firm Name</th>
            <th className={styles.th}>Mineral Name</th>
            <th className={styles.th}>Weight</th>
            <th className={styles.th}>Sale Value</th>
            <th className={styles.th}>Vehicle Type</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={`${styles.td} ${styles.actionBox}`}>
                <div>
                  <LucideIcons name="view" color="#ab00fa" />
                </div>
                <div>
                  <LucideIcons name="qr" />
                </div>
                <div>
                  <LucideIcons name="delete" color="#fa0000" />
                </div>
              </td>
              <td className={styles.td}>{item.form_no}</td>
              <td className={styles.td}>{moment(item.created_at).format("DD/MM/YYYY hh:mm:ss")}</td>
              <td className={styles.td}>{item.form_type}</td>
              <td className={styles.td}>{item.firm_name}</td>
              <td className={styles.td}>{item.mineral_name}</td>
              <td className={styles.td}>{item.weight}</td>
              <td className={styles.td}>{item.sale_value}</td>
              <td className={styles.td}>{item.vehicle_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
