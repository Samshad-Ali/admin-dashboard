import React from 'react'
import './Products.scss'
import DataTable from '../../components/dataTable/DataTable'
import { products } from '../../utils/productsData'
import { ProductsColumn } from '../../utils/productsColumn'
const Products = () => {
 
  return (
    <div className='products'>
    <div className="info">
      <h1>Users</h1>
    <button>Add New User</button>
    </div>
    <DataTable data={products} 
    column={ProductsColumn()}
    />
  </div>
  )
}

export default Products
