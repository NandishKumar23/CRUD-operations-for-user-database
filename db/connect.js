const mongoose=require("mongoose");


const connectDB=(connectString)=>{
 return mongoose.connect(connectString);
}



module.exports=connectDB;