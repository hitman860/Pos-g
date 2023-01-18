module.exports=(req,res,next)=>{
    const authentecated=req.header('authentecated')
    if(authentecated==='yes'){
        next()
    }
    else{
      res.status(403).json({msg:'not Auth'})
    }
}

