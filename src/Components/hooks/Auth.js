import {useContext,useEffect} from 'react'
import {uescontext} from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
    const {userlogin} = useContext(uescontext)
    const navigate=useNavigate();
     // console.log('aseAtuth',userlogin.user)
     
  useEffect(() => {

    if(  userlogin.user===undefined ){
     
    navigate('/login')

    }
  
   
  }, [userlogin.user])

  
  return userlogin
}

export default useAuth