import React,{useContext,useState,useEffect} from 'react'
import { ListContext } from '../../context/listContext'
import {fetchTotal} from '../../hooks/fetchdata'
const Total = () => {
    const [total, settotal] = useState(0)
    const context=useContext(ListContext)
    const {list}=context;
    useEffect(() => {
       settotal( fetchTotal(list))
       
    }, [list])
     const tax=()=>{
         const tax=  Math.round( total * 0.17)
      return tax
     }

  return (
    <div className='total'>
      
        <div className='t' >
          <label>Total</label>
          <span>  {total} </span>
          </div>
        <div className='t'> 
         <label  className='t_lab'>TAX</label>
         <span>  {tax()} </span>
            </div>
        <div className='t'>  
        <label  className='t_lab'>NET</label>
         <span>{total - tax()} </span>
        </div>
    </div>
  )
}

export default Total