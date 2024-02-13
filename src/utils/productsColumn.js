import React, { useMemo } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
export const ProductsColumn = () => {
  const columns = React.useMemo(
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
        Header: "Product Name",
        accessor: "title",
      },
      {
        Header: "Color",
        accessor: "color",
        Cell:(({row}) => { 
            return( <div style={{width:'15px',height:'15px',borderRadius:'100%',background:row.original.color}}>
            </div>)
        })
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
          const handleDelete = (value) => {
            console.log(value);
          };
          return (
            <div style={{ display: "flex", alignItems: "center", gap: 20,textAlign:'center' }}>
              <Link to={`/product/${row.original.id}`}>
              <BiEditAlt style={{ color: "green", cursor: "pointer" }} />
              </Link>
              <RiDeleteBin5Line
                onClick={() => {
                  handleDelete(row.original);
                }}
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          );
        },
      },
      {
        Header: "In Stock",
        accessor: "inStock",
        Cell: ({ value }) => {
          return (
            <span style={{ fontWeight: "800", textAlign: "center" }}>
             { value?
              'In Stock':'Out of Stock'}
            </span>
          );
        },
      },
    ],
    []
  );
  return columns;
};
