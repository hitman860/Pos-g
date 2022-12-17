import React,{useEffect,useContext} from 'react'
import {uescontext} from '../context/userContext'
import { useNavigate } from 'react-router-dom'
const useIsAdmin = () => {
 const {userlogin}=useContext(uescontext)
 const navegate=useNavigate()

 useEffect(() => {
    if( userlogin === null || userlogin.roule!=='admin'){
        navegate('/login')
  
     }
 }, [userlogin])
 

  return  userlogin
  
}

export default useIsAdmin