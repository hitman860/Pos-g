import React,{useContext,useEffect} from 'react'
import {uescontext} from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
 
    const {userlogin} = useContext(uescontext)
    const navigate=useNavigate();

  useEffect(() => {
    if(userlogin === null ){
      navigate('/login')

    }
  
   
  }, [userlogin])

  
  return userlogin
}

export default useAuth