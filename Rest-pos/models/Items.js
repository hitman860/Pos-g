const mongoos=require('mongoose')

const ItemsSchema=new mongoos.Schema({
   title:{
    type:String,
    required:[true,'please inter a title'],
   },
   size:{
    type:String,
   },
   price:{
    type:Number,
   },
   quantity:{
    type:Number,
   },
   category:{
    type:String
   },
   image:{
     type:String
   }
}
,
{timestamps:true}
)


module.exports=mongoos.model('Items',ItemsSchema)