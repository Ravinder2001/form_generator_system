import React from "react";
import styles from "./style.module.css";
import ReactPaginate from "react-paginate";
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalItemCount / itemPerPage}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.paginationLink}
        nextLinkClassName={styles.paginationLink}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
      />
    </div>
  );
}

export default PaginationContainer;
