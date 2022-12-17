import React,{useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import  '../service/service.css'
import {Plus}from 'phosphor-react'
import {uescontext} from '../../context/userContext'
const AddPro = () => {
  const context=useContext(uescontext)
  const {userlogin}=context;
  const  navegate=useNavigate()
 
  
  return (
    <div className='pos_elementadd' >
     {
      userlogin  && userlogin.roule ==='admin'?
       <Plus size={50} color="#272626" weight="thin" 
       onClick={()=>{navegate('/addpro')}}/>:userlogin?userlogin.roule:null
     }
   
   
     </div>
  )
}

export default AddPro