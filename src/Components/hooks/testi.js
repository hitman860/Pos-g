import {useEffect,useState} from 'react'

const useTesti = () => {
    const [items, setitems] = useState('')
    const fetchitems=async()=>{
        const res= await fetch('http://localhost:3002/api/items')
        const data= await res.json()
         setitems (data)
    }

    useEffect(() => {
    fetchitems()
    }, [])
    
    return items
}

export default useTesti