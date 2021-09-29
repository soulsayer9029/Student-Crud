const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized user"
        })
        
    }
    try{
        const verified=jwt.verify(token,process.env.TOKEN_SECRET)
        req.user=verified
        next()
    }catch(err){
        return res.status(401).json({
            success:false,
            message:"Invalid Token"
        })
    }
    
}
module.exports={verifyToken}