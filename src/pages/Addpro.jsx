import React from 'react'
import  './addpro.css'
import AddForm from '../Components/AddForm'
import useIsAdmin from '../Components/hooks/IsAdmin'
const Addpro = () => {
  useIsAdmin()

  return (
    <div  className='z' >
      <h2>Add Products</h2>
      <AddForm />
    </div>
  )
}

export default Addpro