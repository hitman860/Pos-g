import React from 'react'

const Li = ({item}) => {
  
  return (
    <div className='listofitem'>
      <span>{item.name}</span>
      <span>{item.code}</span>
      <span>{item.qty}</span>
      <span>{item.price}</span>

    </div>
  )
}

export default Li