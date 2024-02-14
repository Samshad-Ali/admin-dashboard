import React, {createContext, useState } from 'react'
import { userRows } from '../utils/usersData';
import { productrowData } from '../utils/productsData';
export const adminContext=createContext();
const ContextWrapper = ({children}) => {
    const [users,setUsers] = useState(userRows);
    const [products,setProducts] = useState(productrowData); 
    const handleDelete=(id)=>{
        const isIndex = users.findIndex(item=>item.id==id);
        if(isIndex != -1){
            let newarr = [...users];
            newarr.splice(isIndex,1);
            setUsers(newarr)
            console.log(users,'after set')
        }
    }
  return (
   <adminContext.Provider
   value={{
    handleDelete,
    users,setUsers,
    products,setProducts
   }}
   >
    {children}
   </adminContext.Provider>
  )
}

export default ContextWrapper