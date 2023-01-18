const router=require('express').Router()
const Auth = require('../middleware/Auth')
const Items = require('../models/Items')
let items=[]

router.get('/',async(req,res)=>{
    try{
     const items= await Items.find()
     res.json(items)
    }
    catch(err){
      console.log('items error',err)
    }

  
})
router.get("/:id",(req,res)=>{
    const {id}=req.params
    const item=items.find(item=>{ return item.id===id})
    return res.json(item)

})

router.post('/',async(req,res)=>{
    const {title}=req.body
    const {size}=req.body
    const {price}=req.body
    const {category}=req.body
    const {quantity}=req.body
    const {image}=req.body

    const item= new Items( {
        title,
        size,
        price,
        category,
        quantity,
        image
    } )
          await item.save()
    return  res.json(item)

})

router.put('/:id',Auth,(req,res)=>{
    const {id}=req.params
    const index=items.findIndex(item=>{return item.id==id})
    items[index].qty =req.body.qty
    return res.json( items)
})

router.delete("/:id",Auth,(req,res)=>{
    const {id}=req.params
    const newitems=items.filter(item=>{
        return item.id !==id
    })
    items=newitems
    return res.json(items)
})


module.exports=router;