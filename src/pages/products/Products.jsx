import React, { useContext } from 'react'
import './Products.scss'
import DataTable from '../../components/dataTable/DataTable'
import { ProductsColumn } from '../../utils/productsColumn'
import { adminContext } from '../../context/ContextWrapper'
const Products = () => {
  const {products} = useContext(adminContext)
  return (
    <div className='products'>
    <div className="info">
      <h1>Users</h1>
    </div>
    <DataTable data={products} 
    column={ProductsColumn()}
    />
  </div>
  )
}

export default Products
