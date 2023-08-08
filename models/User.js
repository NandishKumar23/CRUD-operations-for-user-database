const bcrypt = require("bcryptjs")
const mongoose=require("mongoose")

const userauthSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:29
    },
    email:{
        type:String,
        required:true,
       match:[
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
       ],
       unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength:89
     
    },

})
userauthSchema.methods.comparePasswords=async function(candidatePassword){
    const isMatch=await bcrypt.compare(candidatePassword,this.password)
    return isMatch
}


module.exports=mongoose.model("UserAuth",userauthSchema)