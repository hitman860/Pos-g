import React, { useState,useContext } from 'react'
import { ListContext } from '../../context/listContext'
import Li from './ItemofList'
import "./Modal.css"
import {postInvoice} from '../../hooks/fetchdata'
export const Modal = ({ closeModl ,id}) => {
  const [isconfarm, setisconfarm] = useState(false)
  const context = useContext(ListContext)
  const { list } = context;
  const invoicehandle=(e)=>{
    e.preventDefault()
   const  newinv = {list,id:id }
     const confarm= postInvoice(newinv)

     if(confarm){
      setisconfarm(true)
      alert('add invoice successful')
     }
    
          
  }
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModl(false)} >  X </button>
        </div>
        <div className='title'>
          <h3> Invoice # {id} </h3>
        </div>
        <div className='body'>
          <ul className='list'>
            {
              list && list.map(item => {
                return <Li item={item} key={item.id} />
              })
            }
          </ul>

        </div>
        <div className='footer'>
          <button onClick={() => closeModl(false)} id='cancelBtn' >Cancel </button>
          <button  disabled={isconfarm?true:false}   onClick={invoicehandle}>Continue </button>
        </div>


      </div>

    </div>
  )
}
