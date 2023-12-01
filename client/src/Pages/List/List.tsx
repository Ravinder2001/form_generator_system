import React, { ChangeEvent, useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import GetFormList from "../../APIs/GetFormList";
import { Request_Succesfull, ToastError } from "../../Utils/Constant";
import { FormType } from "../../Utils/Types";
import moment from "moment";
import TableContainer from "../../Components/TableContainer/TableContainer";
import PaginationContainer from "../../Components/PaginationContainer/PaginationContainer";
import FormSearch from "../../APIs/FormSearch";
import QRCode from "qrcode.react";
import { toast } from "react-toastify";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
function List() {
  const [itemPerPage, setItemPerPage] = useState(-1);
  const [page, setPage] = useState(1);
  const [totalItemCount, setTotalItemCount] = useState(-1);
  const [data, setData] = useState<FormType[]>([]);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const debouncedSearchTerm = useDebounce(text, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setText(e.target.value);
    setLoading(true);
  };

  const FetchFromList = async () => {
    const res = await GetFormList(page);
    if (res?.status == Request_Succesfull) {
      setData(res?.data.list);
      setTotalItemCount(res?.data?.totalCount);
      setItemPerPage(res?.data?.itemPerPage);
    } else {
      toast.error("Something went wrong!", ToastError);
    }
    setLoading(false);
  };
  const FetchFormSearch = async () => {
    const res = await FormSearch(text, page);
    if (res?.status == Request_Succesfull) {
      setData(res?.data.list);
      setTotalItemCount(res?.data?.totalCount);
      setItemPerPage(res?.data?.itemPerPage);
    } else {
      toast.error("Something went wrong!", ToastError);
    }
    setLoading(false);
  };

  const handlePageClick = (e: any) => {
    setPage(e);
  };

  useEffect(() => {
    if (text.length == 0) {
      FetchFromList();
    }
  }, [text, page]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      FetchFormSearch();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>View and Modify Forms</div>
      <div className={styles.optionBox}>
        {/* <div >Column functionality</div> */}

        <input className={styles.input} value={text} onChange={handleChange} type="text" placeholder="Search Here" />
      </div>

      <TableContainer data={data} loading={loading} FetchFromList={FetchFromList} />
      <PaginationContainer page={page} itemPerPage={itemPerPage} totalItemCount={totalItemCount} handlePageClick={handlePageClick} />
    </div>
  );
}

export default List;
