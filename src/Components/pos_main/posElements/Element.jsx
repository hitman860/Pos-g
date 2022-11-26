import React from 'react'
import { useSearchParams} from 'react-router-dom'
const Element = ({category}) => {
   const [params,setparams]=useSearchParams()

   const  handleclik=()=>{
      const newprams=new URLSearchParams(params)

        newprams.set('query',category)
        setparams(newprams)
        
    }
  return (
    <div>
        <div className='pos_element' onClick={handleclik} >
          {category}
     </div>
    </div>
  )
}

export default Element