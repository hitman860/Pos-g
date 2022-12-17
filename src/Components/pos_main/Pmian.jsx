import React,{useState,useEffect} from 'react'
import  './post_main.css'
import Order from './order/Order'
import Content from './content/Content'
import {elements} from '../../asset/data'
import ListProvider ,{ListContext} from '../context/listContext'
import usefetchdata from '../hooks/fetchdata'
const Pmian = () => {
  const [data, setdata] = useState('')
  useEffect(() => {
   setdata (usefetchdata())
   
  }, [])
  
  return (
    <ListProvider>

   
    <div className='post_main'>
      <Content elements={data} />
        <Order />
        </div>
        </ListProvider>
  )
}

export default Pmian