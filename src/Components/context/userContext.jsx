import React,{useState} from 'react'

export const uescontext= React.createContext({})

const getLoggedInUser = () => {
   const localUser = JSON.parse(localStorage.getItem('pos_user'));
   return localUser || null;
 }
 
const UserProvider = ({children}) => {
  const [userlogin, setuserlogin] = useState(getLoggedInUser())
  const handelUserlogin=(loginUser)=>{
           setuserlogin(loginUser)
           localStorage.setItem('pos_user',JSON.stringify(loginUser))
  }
  const handleLogout=()=>{
     localStorage.removeItem('pos_user')
     setuserlogin(null)
  }
  return (
     <uescontext.Provider   value={{userlogin,setuserlogin,handelUserlogin,handleLogout}} >
        {children}
     </uescontext.Provider>
  )
}

export default UserProvider