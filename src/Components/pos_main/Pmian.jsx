import React,{useState,useEffect} from 'react'
import  './post_main.css'
import Order from './order/Order'
import Content from './content/Content'
import {elements} from '../../asset/data'
import ListProvider ,{ListContext} from '../context/listContext'
const Pmian = () => {
  const [data, setdata] = useState('')
  useEffect(() => {
    fetch()
    
   
  }, [])
  const fetch=()=>{
    const datafromlocal=JSON.parse(localStorage.getItem('elements')||'[]')
    if(datafromlocal.length===0){
      const data= localStorage.setItem('elements',JSON.stringify ( elements))
      setdata(data)

    }
    else{
     
      setdata(datafromlocal)
    }
    
  }
  
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