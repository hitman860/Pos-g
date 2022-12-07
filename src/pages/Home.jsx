import React ,{useEffect,useContext}from 'react'
import Pmain from '../Components/pos_main/Pmian'
import {uescontext} from '../Components/context/userContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {userlogin} = useContext(uescontext)
    const navigate=useNavigate();

  useEffect(() => {
    if(userlogin === null){
      navigate('/login')

    }
  
   
  }, [userlogin])
  
  return (
    <>
    <Pmain />
    </>
  )
}

export default Home