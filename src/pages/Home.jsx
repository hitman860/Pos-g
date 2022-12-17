import React ,{useEffect,useContext}from 'react'
import Pmain from '../Components/pos_main/Pmian'
import {uescontext} from '../Components/context/userContext'
import { useNavigate } from 'react-router-dom'
import useAuth from '../Components/hooks/Auth'

const Home = () => {
  ///use this code without custom hooks
  // const {userlogin} = useContext(uescontext)
  //   const navigate=useNavigate();

  // useEffect(() => {
  //   if(userlogin === null){
  //     navigate('/login')

  //   }
  
   
  // }, [userlogin])
  
  useAuth()
  
  return (
    <>
    <Pmain />
    </>
  )
}

export default Home