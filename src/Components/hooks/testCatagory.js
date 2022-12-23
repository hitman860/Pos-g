import React from 'react'
import useTesti from './testi'
const useCatagory = () => {
    const category = []
    const x=useTesti()
   x && x.map(z=>{
    if (category.includes(z.category)) {
     return category
    }
    else{
     category.push(z.category)
    }
    })
  return category
}

export default useCatagory