import React,{useContext,useState,useEffect} from 'react'
import { ListContext } from '../../context/listContext'

const Total = () => {
    const [total, settotal] = useState(0)
    const context=useContext(ListContext)
    const {list}=context;
    useEffect(() => {
      fetchTotal();
       console.log('useeffect')
      
    }, [list])

    const fetchTotal=()=>{
        let x=0;
        for (let i = 0; i < list.length; i++) {
            const element = list[i].qty *list[i].price;
              x=x+element
           
        }
        settotal(x)
        console.log('x',x)

    }
    

  return (
    <div className='total'>
       <div className='label'> 
       <label>Total</label>
        </div>
        <div className='totalprice'>
        <span>  {total} </span>
            </div> 
        
    </div>
  )
}

export default Total