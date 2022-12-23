import React from 'react'
//import useTesti from '../Components/hooks/testi'
import useCatagory from '../Components/hooks/testCatagory'
const Testpage = () => {

   
    const items=useCatagory()
    

    
  return (
    <div>{ items && items.map(item=>{
      
        return  item
    })
        
        }</div>
  )
}

export default Testpage