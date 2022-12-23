import React, { useContext } from 'react'

const SaveSale = ({openmodl}) => {
 
   const handleClick=()=>{
    openmodl(true)
   }
  return (
    <div className='pos_element' onClick={handleClick}>
        <span>Save</span>
        <span>Sale</span>
       </div>
  )
}

export default SaveSale