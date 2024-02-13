import React from 'react'
import Single from '../../components/singlePageData/Single'
import { singleProduct } from '../../utils/data'

const Product = () => {
  return (
    <div className='user'>
      <Single {...singleProduct} />
    </div>
  )
}

export default Product