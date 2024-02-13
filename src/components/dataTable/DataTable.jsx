import React from "react";
import "./DataTable.scss";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

export default function DataTable(props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns: props.column,
      data: props.data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="dataTable">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter || ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>
                      {column.isSortedDesc ? <GoSortDesc /> : <GoSortAsc />}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          disabled={!canPreviousPage}
          style={{ cursor: !canPreviousPage && "not-allowed" }}
          onClick={() => {
            previousPage();
          }}
        >
          <FaAngleLeft />
        </button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          disabled={!canNextPage}
          style={{ cursor: !canNextPage && "not-allowed" }}
          onClick={() => {
            nextPage();
          }}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
