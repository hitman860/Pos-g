import React,{useEffect,useState} from 'react'
import Li from '../../service/ItemofList'
import "../../service/Modal.css"
const ModelInfo = ({closeModl ,id,infoinv}) => {
   const {message}=infoinv[0]
    const {list}=infoinv[0]
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModl(false)} >  X </button>
        </div>
        <div className='title'>
          <h3> Invoice # {message?<>..</>: infoinv[0]?.id} </h3>
        </div>
        <div className='body'>
          <ul className='list'>
          {message?<>{message}{id}</>:<>
          {
            list && list.map(item => {
            
                return <Li item={item} key={item.id} />
              })
        }
        </>
          }
         
            
          </ul>

        </div>
        <div className='footer'>
          <button onClick={() => closeModl(false)} id='cancelBtn' >Cancel </button>
        
        </div>


      </div>

    </div>
  )
}

export default ModelInfo