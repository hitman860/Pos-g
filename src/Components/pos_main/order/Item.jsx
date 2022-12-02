import React, { useState } from 'react'
import {Eraser} from 'phosphor-react'
const Item = ({ item,editQty,deletItem,index }) => {
  const [editable, seteditable] = useState(false)
  const [change, setchange] = useState('')
 
  const clickhandle = () => {
    seteditable(true)
    console.log('index',index%2)
  }
  const hanldeEdite=()=>{
     editQty(item.id,change)
    seteditable(false)
  }
  return (
    <li className={index%2==0?'liodd':null}>
      <span  >{item.name} </span>
      <span  >{item.code}</span>
      <span >{ editable === false ? <span  onClick={clickhandle}>{item.qty}</span> :
        <div className='editeqty'>
          <input type='text'  onChange={(e)=>{setchange(e.target.value)}}/>
         <button onClick={hanldeEdite}>ok</button>
        </div>
      
      }
      </span>
      <span >{item.price}</span>
    <span > <Eraser size={20} color="#272626"  onClick={()=>deletItem(item.id)}/></span> 
    </li>
  )
}

export default Item