import React from 'react'
import  './post_main.css'
import Order from './order/Order'
import Content from './content/Content'
//import {elements} from '../../asset/data'
import ListProvider  from '../context/listContext'
import  {useFetchdata} from '../hooks/fetchdata'
const Pmian = () => {
  const x=useFetchdata()
 
  console.log('pmin',x)
  return (
    <ListProvider>

   
    <div className='post_main'>
      <Content elements={x} />
        <Order />
        </div>
        </ListProvider>
  )
}

export default Pmian