import React from 'react'
import Pmain from '../Components/pos_main/Pmian'
import useAuth from '../Components/hooks/Auth'

const Home = () => {
 
  
  useAuth()
  
  return (
    <>
    <Pmain />
    </>
  )
}

export default Home