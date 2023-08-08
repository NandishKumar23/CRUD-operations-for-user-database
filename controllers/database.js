const User1=require("../models/database")



const getAllUsers=async(req,res) => {
const allUsers = await User1.find({})
res.status(201).json({allUsers})
}

const CreateUser = async(req,res)=>{
    try{
        const {Name,Email,Mobile,Password,profilePicture} = req.body;
        const salt= await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(Password,salt)
        const newUser=User1({Name:Name,Email:Email,Mobile:Mobile,Password:hashedPassword,profilePicture:profilePicture});
        const savedUser=await newUser.save()
        res.status(201).send("Success")
    }
    catch(err){
        res.status(400).send(err)
    }
}
const getSingleUser=async(req,res)=>{
    try{
    const {id:taskID}=req.params
        const task=await User1.findOne({_id:taskID})
        if(!task){
           return res.status(404).json({msg:"no task with id"})
        }
        res.status(201).json({task})   
    }catch(error){
        res.status(500).send({msg:error})
     }
    
}

const updateUser = async(req,res)=>{
    try{
        const{id:taskID}=req.params
        const task=await User1.findOneAndUpdate({_id:taskID},req.body)
          if(!task){
            return res.status(404).json("error")
          }
          res.status(200).send("Updated")
        
    }catch(err){
        console.log(err)
    }
}

const deleteUser = async(req,res)=>{
    try{
        const {id:taskID}=req.params.id
        
         const task=await User1.findOneAndDelete({_id:req.params.id})
        if(!req.params.id){
            return res.status(404).json({msg:`No user with id:${taskID}`})
        }
        res.status(200).json({task})
    }catch(err){
            console.log(err)
    }
}
 module.exports={
    getAllUsers,CreateUser,getSingleUser,deleteUser,updateUser
}