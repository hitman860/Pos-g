const mongoos= require('mongoose')

const invoiceSchema=new mongoos.Schema({
    id:{type:Number},
    list:[]
})
module.exports=mongoos.model('Invoice',invoiceSchema)