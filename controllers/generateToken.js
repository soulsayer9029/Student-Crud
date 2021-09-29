const jwt=require('jsonwebtoken')

const generateToken=async (req,res)=>{
    try{
        const {id}=req.body
        const token= await jwt.sign({id},process.env.TOKEN_SECRET);
        res.status(200).header('auth-token',token).json({
          sucess: true,
          token: token
        });
      }catch(e){
          console.log(e.message)
          return res.status(400).send("Token generation failed")
      }
    
}
module.exports={generateToken}