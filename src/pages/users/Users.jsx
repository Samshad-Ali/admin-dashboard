import React, { useContext, useState } from 'react'
import './Users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { UsersColum } from '../../utils/usersColumn'
import { adminContext } from '../../context/ContextWrapper'
const Users = () => {
  const {users,setUsers} = useContext(adminContext);
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
      </div>
      {
        users.length > 0 &&
      <DataTable data={users} 
       column={UsersColum()}
       />
      }
    </div>
  )
}

export default Users;
