import React,{useContext}from 'react'
import { ListContext } from '../../context/listContext'

const Producut = ({element}) => {
   const context = useContext(ListContext)
   const {list,setlist}=context
   const handleClick=()=>{
    const item={
      id:Math.random(Date.now()) ,
      name:element.title,
      code:element.category,
      qty:1,
      price:element.price
    }
  const newList=[...list,item]
    setlist(newList)
   }
  return (
    <div className='product' onClick={handleClick}>
      <img src={element.image}   /> 
      <span className='price'>{element.price}$</span>
      </div>
  )
}

export default Producut