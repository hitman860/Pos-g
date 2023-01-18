import { useEffect, useState } from 'react'

export const useFetchdata = () => {

  const [items, setitems] = useState()
  const fetchitems = async () => {
    const res = await fetch('http://localhost:3002/api/items')
    const data = await res.json()
   
    setitems(data)
  }

  useEffect(() => {
    fetchitems()
  }, [])
  return items
}

export const addItem = async (newitem) => {
  try {

    await fetch('http://localhost:3002/api/items', {
      method: "POST",
      body: JSON.stringify(newitem),
      headers: { 'content-Type': 'application/json' }
    })
    return true
  }
  catch (err) {
    alert('error post', err)
  }


}

export const fetchTotal = (list) => {
  let x = 0;
  for (let i = 0; i < list.length; i++) {
    const element = list[i].qty * list[i].price;
    x = x + element
  }
  return x
}

export const postInvoice = async (newinvoice) => {
  try {
    await fetch('http://localhost:3002/api/invoice', {
      method: "POST",
      body: JSON.stringify(newinvoice),
      headers: { 'content-Type': 'application/json' }

    })
    return true
  }
  catch (err) {
    console.log(err)
  }

}

export const getinvoice=(id)=>{
  
   const fet=async()=>{
    const invoice= await fetch(`http://localhost:3002/api/invoice/${id}`)
    const data= await invoice.json()
       
         return data
   }
   return fet()
}