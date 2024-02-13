import React, { useContext, useEffect } from 'react'
import './Users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { UsersColum } from '../../utils/usersColumn'
import { adminContext } from '../../context/ContextWrapper'
import { userRows } from '../../utils/usersData'
const Users = () => {
  const {users,setUsers} = useContext(adminContext);
  const addUser=()=>{
    let user = {
        id: 41,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    }
    setUsers([...users],{user})
    console.log(users)
  }
  // useEffect(()=>{
  //   setUsers(userRows)
  // },[])
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
      <button onClick={addUser}>Add New User</button>
      </div>
      <DataTable data={users} 
       column={UsersColum()}
       />
    </div>
  )
}

export default Users;

const AddUserComponent=()=>{

}