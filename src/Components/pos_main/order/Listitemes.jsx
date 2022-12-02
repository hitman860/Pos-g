import React,{useContext} from 'react'
import { ListContext } from '../../context/listContext'
import Item from './Item'

const Listitemes = () => {
  const context = useContext(ListContext)
       const   {list,setlist}=context
    //  const [style, setstyle] = useState(false)
      const editQty=(id,change)=>{
        console.log(id,'===',change)
        const newlist=list && list.map(item=>{
             if(item.id==id){
              return {...item,qty:change}
             }
             return item
        })
        setlist(newlist)

      }

      const deletItem=(id)=>{
        const newList=list.filter(item=> item.id !==id)
           setlist(newList)
      }

  return (
    <div  className='listitems'>
        <ul>
            <li >
             <span >Name </span>
             <span >code </span>
             <span  >Qty</span>
             <span >Price</span>
             <span >Delete</span>
            </li>
            {
              list && list.map((i,index)=>(

                  <Item  item={i} 
                   editQty={editQty}
                   deletItem={deletItem}
                   index={index}
                    key={i.id} />

              )
                 
              )
            }
           
        </ul>
        
        </div>
  )
}

export default Listitemes