import React, { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { adminContext } from "../context/ContextWrapper";
const CellComponent = ({ id }) => {
    const {users,setUsers} = useContext(adminContext);
  const handleDelete = (id) => {
        const isIndex = users.findIndex(item=>item.id==id);
        if(isIndex != -1){
            let newarr = [...users];
            newarr.splice(isIndex,1);
            setUsers(newarr)
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
      <Link to={`/user/${id}`}>
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

export default CellComponent;
