import React from 'react'
const Producut = ({element}) => {
  return (
    <div className='product'>
      <img src={element.image}  /> 
      <span className='price'>{element.price}$</span>
      </div>
  )
}

export default Producut