import React from 'react'
import { MagnifyingGlass, Coffee, IdentificationCard } from 'phosphor-react'

const Infoearea = () => {
  return (
    <div className='infoE'>
      <div className='sercharea'>
        <div className='box'>
          <MagnifyingGlass size={20} color="#272626" />
          <input type='text' name='searchbycustomer' placeholder='Customer' />
        </div>
        <div className='box'>
          <MagnifyingGlass size={20} color="#272626" />
          <input type='text' name='searchbyproduct' placeholder='Product' />
        </div>
      </div>
      <div className='info' >
        <Coffee size={50} color="#272626" />
      </div>
      <div className='statistics'>
        <div className='store'>
          <label >STORE</label>
          <span> 0.00</span>

        </div>
        <div className='line'></div>
        <div className='store'>
          <label >REWARD</label>
          <span> 4223</span>

        </div>
        <div className='line'></div>
        <div className='store'>
          <label >VISITS</label>
          <span> 19</span>

        </div>
      </div>
      <div className='btn-group' >
        <button className='infouser' >
          <IdentificationCard size={30} color="#272626" />
        </button>
        <button className='purchases'>
          PURCHSSES
        </button>
      </div>
    </div>
  )
}

export default Infoearea