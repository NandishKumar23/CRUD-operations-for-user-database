const express=require("express")
const app=express()
const user=require("./routes/users")
const connectDB=require("./db/connect")
require("dotenv").config()

const authRoute=require("./routes/auth")


app.use(express.json())

app.use("/api/v1/auth",authRoute)
app.use('/api/v1/users',user)

const start=async()=>{
    try{
       await connectDB(`${process.env.MONGO_URl}`)
        app.listen(3000,()=>{
            console.log("Ready")
        })
    }catch(err){
        console.log(err)
    }
}
start()


