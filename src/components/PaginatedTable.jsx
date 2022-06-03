import React, { useEffect, useState } from "react";

const PaginatedTable = ({ data, dataInfo, additionField, numOfPage }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let pCount = Math.ceil(data.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, []);

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;

    setTableData(data.slice(start, end));
  }, [currentPage]);

  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}

            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}

              {additionField ? <td>{additionField.elements(d.id)}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li
            className={`page-item ${currentPage === 1 ? "disable" : null}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="page-link" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>

          {pages.map((page) => (
            <li key={page} className="page-item">
              <span
                className={`page-link ${
                  currentPage === page ? "alert-success" : null
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </span>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === pageCount ? "disable" : null
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="page-link" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginatedTable;
