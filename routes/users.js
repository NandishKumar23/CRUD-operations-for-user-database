const express=require("express")

const router=express.Router()
const {getAllUsers,CreateUser,getSingleUser,updateUser,deleteUser}=require("../controllers/database")

router.route("/").get(getAllUsers).post(CreateUser)

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser)
module.exports=router