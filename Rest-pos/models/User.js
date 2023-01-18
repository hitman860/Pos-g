
const mongoose=require('mongoose')
const bcrypt = require("bcrypt")

const {isEmail}=require('validator')
const UserSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,'please inter a name'],
        
    },
    email:{
        type:String,
        required:[true,'pls inter an email'],
        unique:true,
        validate:[isEmail,'inter valid Email']

    },
    password:{
        type:String,
        required:[true,'pls inter pass'],
        minLength:[6,'must be more than 6'],
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

    gender:{
        type:String
    },
    imageUrl:{
        type:String
    }
},
{timestamps:true}
)
//fire function before save 
UserSchema.pre('save',async function (next) {
    const salt=await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)

    next()
    
})
///static method login user
UserSchema.statics.login= async function (email,password) {
   
 const user=await this.findOne({email})
 console.log('im in statics',user)
 if(user){
   const auth = await bcrypt.compare(password,user.password)
   if(auth){
    return user
   }
   else{
    throw Error('incorrect password')
   }
 }
 else{
    throw Error('incorrect email')
 }
    
}

module.exports=mongoose.model('User',UserSchema)