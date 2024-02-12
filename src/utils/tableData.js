import React, {useMemo} from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
export const TableColumns=()=>{
    const columns = React.useMemo(
       () => [
         {
           Header: "ID",
           accessor: "id",
         },
         {
           Header: "Image",
           accessor: "img",
           Cell:({value})=>{ return <img
            style={{width:'40px', height:'40px',objectFit:'cover',borderRadius:'100%'}}
            src={value} />}
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
            Header:'Action',
            accessor:'action',
            Cell:({row})=>{
                const handleDelete=(value)=>{
                    console.log(value)
                }
                return <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <BiEditAlt style={{color:'green',cursor:'pointer'}} />
                    <RiDeleteBin5Line
                    onClick={()=>{handleDelete(row.original)}}
                    style={{color:'red',cursor:'pointer'}} />
                </div>
            }
         },
         {
           Header: "Verified",
           accessor: "verified",
           Cell:({value})=>{return value?<TiTick/>:<RxCross2
           style={{fontWeight:'800'}}
           /> }
         },
       ],
       []
     );
    return columns
}