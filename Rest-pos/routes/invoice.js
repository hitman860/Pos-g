const router= require('express').Router();
const Invoice= require('../models/Invoices');

router.post('/',async(req,res)=>{
    const {id}=req.body;
    const {list}=req.body;
    console.log('inv',id,list)
    const invoice=new Invoice( {id,list})
    try{
        await invoice.save()
        res.status(200).json(invoice)
    }
    catch(err){
    console.log(err)
    }
})
///find all
router.get('/',async(req,res)=>{
    try{
        const data= await Invoice.find()
        res.status(200).json(data)
    }
    catch(err){
     console.log(err)
    }
  
})
//find by invoice id 

router.get('/:id',async(req,res)=>{
    const id=req.params
     try{
        const invoice=await Invoice.find(id)

        if(invoice.length==0){
            res.status(200).json([{message:'no invoice #'}])
        }
        else{
            res.status(200).json(invoice)
        }
       
       
     }
     catch(err){
        console.log(err)
     }
})


module.exports=router;