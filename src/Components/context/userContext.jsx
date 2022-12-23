import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const uescontext= React.createContext({})
 
const UserProvider = ({children}) => {
  const [userlogin, setuserlogin] = useState('')
  const navigate=useNavigate()

  const handelUserlogin= async(email,password)=>{
   const res = await fetch('http://localhost:3002/api/user/login',{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{'content-Type':'application/json'}
    })
    const data=await res.json()
    if(data.user){

      setuserlogin(data)
    
        navigate('/home',{replace:true})
    }
    else{
      alert(data.error.password||data.error.email);  
      }
          
  }
  const handleLogout=()=>{
     localStorage.removeItem('pos_user')
     setuserlogin('')
  }
  return (
     <uescontext.Provider   value={{userlogin,setuserlogin,handelUserlogin,handleLogout}} >
        {children}
     </uescontext.Provider>
  )
}

export default UserProvider