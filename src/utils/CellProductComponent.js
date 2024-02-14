import React, { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { adminContext } from "../context/ContextWrapper";
const CellProductComponents = ({ id }) => {
    const {products,setProducts} = useContext(adminContext);
  const handleDelete = (id) => {
    console.log(id,'click',products)
        const isIndex = products.findIndex(item=>item.id==id);
        if(isIndex != -1){
            let newarr = [...products];
            newarr.splice(isIndex,1);
            setProducts(newarr)
        }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        textAlign: "center",
      }}
    >
      <Link to={`/product/${id}`}>
        <BiEditAlt style={{ color: "green", cursor: "pointer" }} />
      </Link>
      <RiDeleteBin5Line
        onClick={() => {
          handleDelete(id);
        }}
        style={{ color: "red", cursor: "pointer" }}
      />
    </div>
  );
};

export default CellProductComponents;
