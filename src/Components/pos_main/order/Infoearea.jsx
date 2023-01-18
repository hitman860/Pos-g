import React,{useState} from 'react'
import { MagnifyingGlass, Coffee, IdentificationCard } from 'phosphor-react'
import {getinvoice} from '../../hooks/fetchdata'
import ModelInfo from './infoInvoic/ModelInfo'
const Infoearea = () => {
  const [numInvoic, setnumInvoic] = useState(0)
  const [datainvo, setdatainvo] = useState()
  const [openModl, setopenModl] = useState(false)

  const handelchange=(e)=>{
      e.preventDefault()
    setnumInvoic(e.target.value)
  }

  const handleClick=async()=>{
    const x1=await getinvoice(numInvoic)
   setdatainvo (x1)
   setopenModl(true)
  
  }
  const testhandle=()=>{
   
    
  }
  return (
    <div className='infoE'>
      <div className='sercharea'>
        <div className='box'>
          <MagnifyingGlass size={20} color="#272626" onClick={testhandle} />
          <input type='text' name='searchbycustomer' placeholder='Customer' />
        </div>
        <div className='box'>
          <MagnifyingGlass size={20} color="#272626" onClick={handleClick} />
          <input type='number' name='searchbyproduct' placeholder='#Invoice' onChange={handelchange} />
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
     {openModl && <ModelInfo  closeModl={setopenModl} id={numInvoic} 
     infoinv={datainvo} />}
    </div>
  )
}

export default Infoearea