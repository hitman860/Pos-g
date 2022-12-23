import React, { useContext } from 'react'
import { ListContext } from '../../context/listContext'
import Li from './ItemofList'
import "./Modal.css"

export const Modal = ({ closeModl }) => {
  const context = useContext(ListContext)
  const { list } = context;
  const idv = Math.random() * 100
  const newinv = [...list, idv]
  console.log('invoice', newinv)
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModl(false)} >  X </button>
        </div>
        <div className='title'>
          <h3> Invoice # 123  </h3>
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
          <button>Continue </button>
        </div>


      </div>

    </div>
  )
}
