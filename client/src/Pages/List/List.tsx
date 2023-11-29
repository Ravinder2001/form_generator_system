import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import LucideIcons from "../../Assets/Icons/Icons";
import ReactPaginate from "react-paginate";
import GetFormList from "../../APIs/GetFormList";
import { Request_Succesfull } from "../../Utils/Constant";
import { FormType } from "../../Utils/Types";
import moment from "moment";
import TableContainer from "../../Components/TableContainer/TableContainer";
import PaginationContainer from "../../Components/PaginationContainer/PaginationContainer";
function List() {
  const [itemPerPage, setItemPerPage] = useState(-1);
  const [page, setPage] = useState(1);
  const [totalItemCount, setTotalItemCount] = useState(-1);
  const [data, setData] = useState<FormType[]>([]);

  const FetchFromList = async () => {
    const res = await GetFormList(page);
    if (res?.status == Request_Succesfull) {
      setData(res?.data.list);
      setTotalItemCount(res?.data?.totalCount);
      setItemPerPage(res?.data?.itemPerPage);
    }
  };

  const handlePageClick = (e: any) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    FetchFromList();
  }, [page]);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>View and Modify Forms</div>
      <div className={styles.optionBox}>
        <div>Column functionality</div>

        <input className={styles.input} type="text" placeholder="Search Here" />
      </div>
      <TableContainer data={data} />
      <PaginationContainer page={page} itemPerPage={itemPerPage} totalItemCount={totalItemCount} handlePageClick={handlePageClick} />
    </div>
  );
}

export default List;
