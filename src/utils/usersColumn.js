import React, { useMemo } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import CellComponent from "./CellComponent";

export const UsersColum = () => {
  const columns =[
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Image",
        accessor: "img",
        Cell: ({ value }) => {
          return (
            <img
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "100%",
              }}
              src={value}
            />
          );
        },
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
         return <CellComponent id={row.original.id} />
        },
      },
      {
        Header: "Verified",
        accessor: "verified",
        Cell: ({ value }) => {
          return (
            <span style={{ fontWeight: "800", textAlign: "center" }}>
              {value ? <TiTick /> : <RxCross2 />}
            </span>
          );
        },
      },
    ];
  return columns;
};
