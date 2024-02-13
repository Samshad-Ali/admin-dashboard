import React, { useContext, useMemo } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import CellComponent from "./CellComponent";
import { adminContext } from "../context/ContextWrapper";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
export const UsersColum = () => {
  const {users,setUsers,handleDelete} = useContext(adminContext);
  const columns = useMemo(
    () => [
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
        //  return <CellComponent id={row.original.id} />
        return    <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}
      >
        <Link to={`/user/${row.original.id}`}>
          <BiEditAlt style={{ color: "green", cursor: "pointer" }} />
        </Link>
        <RiDeleteBin5Line
          onClick={() => {
            handleDelete(row.original.id);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
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
    ],
    []
  );
  return columns;
};
