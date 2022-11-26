import React from 'react'

const Note = ({Icon}) => {
  return (
    <div className='pos_element'>
        {<Icon size={48} color="#272626" weight="thin"   />}
        Notes 
        </div>
  )
}

export default Note