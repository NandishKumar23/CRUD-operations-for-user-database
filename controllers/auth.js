const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const register=async(req,res)=>{
    const {name,email,password}=req.body
     const salt= await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(password,salt)
    const tempUser={name,email,password:hashedPassword}
    if(!name|| !email||!password){
        res.send("Please provide the required fields")
    }
    try{
        const user= User({
    
            ...tempUser
            })
            user.save()
           
            const token=jwt.sign({userId:user._id,name:user.name},`${process.env.JWT_SECRET}`,{expiresIn:'30d'})
             res.status(201).json({user:{user:user.name},token})
    } catch(err){
          console.log(err)
    }
    
}
const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(401).send("Please provide the required credentials")
    }
    const user=await User.findOne({email})

    if(!user){
        res.status(401).send("Invalid credentials or No user found")

    }
    const isPassword=await user.comparePasswords(password)
    if(!isPassword){
        res.status(401).send("Invalid credentials or wrong password")
    }
    const token=jwt.sign({userId:user._id,name:user.name},`${process.env.JWT_SECRET}`,{expiresIn:'30d'})
    res.status(201).json({user:{user:user.name},token})
   
}


module.exports={
    register,login
}