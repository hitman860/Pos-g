import React from 'react'
import usefetchdata from './fetchdata'


const useCategory= () => {
  const elements=usefetchdata()
  const category = []
  elements && elements.map(element => {
    if (category.includes(element.category)) {
    }
    else {
      category.push(element.category)

    }
  })
  return category
   
}

export default useCategory
