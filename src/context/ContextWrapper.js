import React, {createContext, useState } from 'react'
import { userRows } from '../utils/usersData';
import { ProductsColumn } from '../utils/productsColumn';

export const adminContext=createContext();
const ContextWrapper = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [users,setUsers] = useState(userRows);
    const [products,setProducts] = useState(ProductsColumn); 
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
    isOpen,setIsOpen,
    users,setUsers,
    products,setProducts
   }}
   >
    {children}
   </adminContext.Provider>
  )
}

export default ContextWrapper