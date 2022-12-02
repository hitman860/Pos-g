import React,{useState} from 'react'
export const ListContext=React.createContext([])

const ListProvider = ({children}) => {
  const [list, setlist] = useState([])
  return (
   <ListContext.Provider value={{list,setlist}}>
    {children}
   </ListContext.Provider>
  )
}

export default ListProvider