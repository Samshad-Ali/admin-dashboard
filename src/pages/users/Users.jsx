import React from 'react'
import './Users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../utils/usersData';
const Users = () => {
  // const columns= [
  //   { field: "id", headerName: "ID", width: 20 },
  //   {
  //     field: "img",
  //     headerName: "Avatar",
  //     width: 100,
  //     renderCell: (params) => {
  //       return <img className='avatar' src={params.row.img} />;
  //     },
  //   },
  //   {
  //     field: "firstName",
  //     type: "string",
  //     headerName: "First name",
  //     width: 50,
  //   },
  //   {
  //     field: "lastName",
  //     type: "string",
  //     headerName: "Last name",
  //     width: 50,
  //   },
  //   {
  //     field: "email",
  //     type: "string",
  //     headerName: "Email",
  //     width: 200,
  //   },
  //   {
  //     field: "phone",
  //     type: "string",
  //     headerName: "Phone",
  //     width: 150,
  //   },
  //   {
  //     field: "createdAt",
  //     headerName: "Created At",
  //     width: 150,
  //     type: "string",
  //   },
  //   {
  //     field: "verified",
  //     headerName: "Verified",
  //     width: 50,
  //     type: "boolean",
  //   },
  // ];
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
      <button>Add New User</button>
      </div>
      {/* <DataTable
      slug="users"
      columns={columns}
      rows={userRows}
      /> */}
      <DataTable/>
    </div>
  )
}

export default Users