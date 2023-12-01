import React from "react";
import styles from "./style.module.css";
import ResponsivePagination from "react-responsive-pagination";
type props = {
  page: number;
  itemPerPage: number;
  totalItemCount: number;
  handlePageClick: (e: any) => void;
};
function PaginationContainer(props: props) {
  const { page, itemPerPage, totalItemCount, handlePageClick } = props;
  return (
    <div className={styles.datatablefooter}>
      <div className={styles.datatableshowing}>
        <span>
          Showing {(page - 1) * itemPerPage + 1} to {Math.min(page * itemPerPage, totalItemCount)} of {totalItemCount} entries
        </span>
      </div>
      <ResponsivePagination className={styles.pagination} current={page} total={Math.ceil(totalItemCount / itemPerPage)} onPageChange={handlePageClick} />
    </div>
  );
}

export default PaginationContainer;
