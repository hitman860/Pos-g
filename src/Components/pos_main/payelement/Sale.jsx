import React,{useContext} from 'react'
import { ListContext } from '../../context/listContext'

const Sale = ({Icon}) => {
    const context = useContext(ListContext)
    const {list,setlist}=context
   const handleClick=()=>{
         setlist('')
   }
  return (
    <div className='sale' onClick={handleClick} >
      {<Icon  size={60} color="#272626" weight="thin"  />}
      SALE</div>
  )
}

export default Sale