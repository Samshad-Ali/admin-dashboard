import React,{useMemo} from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

import { useTable,usePagination } from "react-table";
import { TableColumns } from "../../utils/tableData";
import { userRows } from "../../utils/usersData";


export default function DataTable(props) {
  // const handleDelete=(id)=>{
  //     console.log(id,'deleted...')
  // }
  // const actionColumn= {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="action">
  //           <Link to={`/${props.slug}/${params.row.id}`}>
  //             <BiEditAlt/>
  //           </Link>
  //           <div className="delete" onClick={() => handleDelete(params.row.id)}>
  //             <RiDeleteBin5Line/>
  //           </div>
  //         </div>
  //       );
  //     },
  //   };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns:TableColumns(),
    data:userRows
  },
  usePagination);
  return (
    <div className="dataTable">
      {/* <DataGrid
      className="datagrid"
      rows={props.rows} columns={[...props.columns,actionColumn]} 
      initialState={{
        pagination:{
            paginationModel:{
                pageSize:10,
            }
        }
      }}
      pageSizeOptions={[5]}
      slots={{toolbar:GridToolbar}}
      slotProps={{
        toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
        }
      }}
      checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      /> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
    </div>
  );
}
