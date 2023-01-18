import React,{useState} from 'react'
import useCategory from './hooks/Category'
import {addItem} from './hooks/fetchdata'
const AddForm = () => {
  const category = useCategory()
 
  const [kind, setkind] = useState('')
  const handlesubmit = (e) => {
    e.preventDefault()
     const newitem={
      title:e.target.title.value,
      price: e.target.price.value,
      size: e.target.size.value,
      quantity: e.target.quantity.value,
      category: kind!==''?kind:e.target.category.value,
      image: e.target.image.value
     }
     const additem=addItem(newitem)
     if(additem){
      alert('Add Item successful')
      rest(e)
     }
     
      
      
     // localStorage.setItem('elements',JSON.stringify( [newitem,...oldData]))
     
  }
  const rest=(e)=>{
    e.target.title.value=''
    e.target.price.value=''
    e.target.quantity.value=''
    e.target.image.value=''
    setkind('')
  }
  
  return (
    <div className='container1'>
      <form onSubmit={handlesubmit} className='addform'>
        <span>
          <label >Title</label>
          <input type='text ' name='title' required></input>
        </span>
        <span>
          <label  >Price</label>
          <input type='number' name='price' required></input>
        </span>
        <span>
          <label>Size</label>
          <select name='size'>
            <option value='S'>small </option>
            <option value='M'> mid</option>
            <option value='large'>large</option>
            <option value='2XL'> xxlarge</option>
            <option value='XL'>xlarge </option>

          </select>
        </span>
        <span>
          <label>Category</label>
          <select name='category'>
            {
              category && category.map((item, index) => {
                return <option value={item} key={index}>{item} </option>
              }
              )
            }
          </select>
        OR 
         <input type='text'onChange={(e)=>{setkind(e.target.value)}} />
        </span>
        <span>
          <label >QTY</label>
          <input type='number ' name='quantity' required></input>
        </span>
        <span>
          <label>Image</label>
          <input type='url' name='image' required></input>
        </span>

        <button type='submit' >ADD</button>
      </form>
    </div>
  )
}

export default AddForm