import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
  return (

    <div className='px-10 py-5'>
    <div className=' bg-gray-700 text-3xl text-center p-5 text-white'>
       User  {userid}
    </div>
    </div>
  )
}

export default User
