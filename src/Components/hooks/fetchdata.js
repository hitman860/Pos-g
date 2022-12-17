import React from 'react'
import {elements} from '../../asset/data'

const usefetchdata = () => {
        const datafromlocal=JSON.parse(localStorage.getItem('elements')||'[]')

        if(datafromlocal.length===0){
          const data= localStorage.setItem('elements',JSON.stringify ( elements))
         return data
    
        }
        else{
         
          return datafromlocal 
        }
        
      

    
  
}

export default usefetchdata