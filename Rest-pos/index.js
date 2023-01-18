const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
const morgan = require("morgan")
const cookieparser=require('cookie-parser')
const cors=require('cors')
const { request } = require("express")
dotenv.config()
//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         }
    ,(err)=>{
    if(err) console.log(err) 
    else console.log("mongdb is connected");

});
///middleware
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())
app.use(morgan('common'))
app.use(cookieparser())
app.use('/api/items',require("./routes/items"))
app.use('/api/user',require('./routes/user'))
app.use('/api/invoice',require('./routes/invoice'))


app.listen(3002,()=>{
    console.log('Now im in port 3002')

})