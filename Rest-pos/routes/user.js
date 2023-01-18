const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require("bcrypt")
const jwt=require('jsonwebtoken')
//handleerror
const handelError=(err)=>{
    console.log(err.message)
    
    let error={email:'',password:''}
    ///duplicate erro
      if(err.code===11000){
        error.email='thas email id already exist'
        return error
      }
    if (err.message.includes('User validation failed')) {
        Object.values (err.errors).forEach(({properties})=>{
            error[properties.path]=properties.message
        })    
    }
     ///incorrect emil
     if(err.message === 'incorrect email'){
        error.email='incorrect email';
    }
    //incorrect password
    if(err.message === 'incorrect password'){
        error.password ='incorrect password'
    }
    return error
}

/////creatjwt
const maxAge=24 * 60 * 60
const createTolken=(id)=>{

  return jwt.sign({id},'pos secret',{expiresIn:maxAge})

}
///router
router.post('/reg', async (req, res) => {

    try {
        ///newuser
        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password:req.body.password,
            isAdmin:req.body.isAdmin,
            gender:req.body.gender,
            imageUrl:req.body.imageUrl
        })
            await user.save()
            const token=createTolken(user._id);
            res.cookie('pos-jwt',token,{httpOnly:true,maxAge:maxAge *1000})
        res.status(200).json({user})
    }
    catch (err) {
        console.log(err)
        const errors=handelError( err)
        res.status(500).json(errors)
    }

})


router.post('/login', async (req, res) => {
    try {
        // const user = await User.findOne({ email: req.body.email })
        // !user && res.status(404).json('no email')
        // const validpass = await bcrypt.compare(req.body.password, user.password)
        // !validpass && res.status(400).json("wrong pass")
        const {email,password}=req.body;
       const user=  await User.login(email,password)
       const token=createTolken(user._id);
         res.cookie('pos-jwt',token,{httpOnly:true,maxAge:maxAge *1000})
        res.status(200).json({user})

    }
    catch (err) {
        const error=handelError(err)
        res.status(400).json({error})
    }
})


module.exports = router