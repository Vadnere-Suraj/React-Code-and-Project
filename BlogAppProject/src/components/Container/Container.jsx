import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-4xl mx-auto p-5'>
      {children}
    </div>
  )
}

export default Container
