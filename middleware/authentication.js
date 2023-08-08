const User=require("../models/User")
const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{

    const authHeader=req.headers.authorization;
    if(!authHeader|| !authHeader.startsWith("Bearer")){
        res.status(401).send("Unauthorized access")
    }
    const token=authHeader.split(' ')[1]
    try{
        const decode=jwt.verify(token,`${process.env.JWT_SECRET}`)
        const user=User.findById(decode.id).select("-password")
        req.user=user
        req.user={userID:decode.userId,name:decode.name}
        next()
    }catch(err){

    }
   

}
module.exports=auth