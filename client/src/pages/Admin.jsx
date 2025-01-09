import React from 'react'
import AddProduct from '../components/Add_Product/Add_Product'
import AdminProductPage from '../components/AdminProductPage/AdminProductPage'

function Admin() {
  return (
    <div>
        <AdminProductPage/>
        <AddProduct/>
    </div>
  )
}

export default Admin