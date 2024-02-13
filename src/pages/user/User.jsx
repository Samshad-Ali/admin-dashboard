import React from 'react'
import Single from '../../components/singlePageData/Single'
import { singleUser } from '../../utils/data'

const User = () => {
  return (
    <div className='user'>
      <Single {...singleUser} />
    </div>
  )
}

export default User