import React from 'react'
import Infoearea from './Infoearea'
import Listitemes from './Listitemes'
import './order.css'
import Total from './Total'
 const Order = () => {
  return (
    <div  className='order'>
      <Infoearea  />
      <Listitemes />
      <Total />
    </div>
  )
}


export default Order
