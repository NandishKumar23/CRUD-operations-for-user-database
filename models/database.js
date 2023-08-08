const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")
const userSchema=mongoose.Schema({
    Name:{
        type:String,
        required:[true,'UserName must be provided']
    },
    Email:{
        type:String,
       required:[true,"please check again"],
       unique:[true,"already present"],
      
       }, 

       profilePicture: {
        type: String, // You can store the image URL or file path
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKYApgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADwQAAICAQICBgUJBwUAAAAAAAABAgMEBRESMQYTIUFRcTJSgZGxIjM0YWKhwdHhFBUjRHJzkiVCVILx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9wAAAAAAAAAAAA5W5NFL2tthDzkB1BEWpYTeyya/eSK7q7Y8VU4zX2XuB7AAAAAAAAAAAAAAAAAAAAAD5JqMXJvZJbtn0pekWXwVxxq+c1xT28AIupaxZbKVeNJwr5cS5y/Iqm2223u3zZ8BUD1XZOqfHVOUJeKex5AGi0rV+ukqMrZWP0Z8lIuDC8nut0/FGu0rL/a8ONkvTXyZ+ZFTAAAAAAAAAAAAAAAAAAAMjq1nWajc+5PhXsNcYvN+mX/3JfEDiACoAAAXXRqx9bdVv2NKSKUtejn06f9t/FAaUAEUAAAAAAAAAAAAAAAAMnrdXU6jZ2bKe017f1NYVeu4TyKFbWt7K+7xXeBmQAVAAAC96NVfPXPl2QXxf4FLXCVs4wrW8pPZI1+DixxMWFMe1x5vxZFSAAAAAAAAAAAAAAAAAAAAOdl9VS3tthBfalsBValovWSldicMZPtcH2J+XgUl2LfS9raZxfl2e81D1TBX8zD2dp8/emB/yYe5gZPZ77bPfyJONp+VkNdXTJR9aS2Rolqenr+Yr9x9/euBv9Jh94HjTdMrw48TfHc+cmuXkWBEjqWFJ7LJr3+t7EmFkJreEoyXinuB6AAAAAAAAAAAAAAAAIedqNGEtpvis7oR5/oRtY1P9lXU0Ndc12v1DNyblJyk3KT5t94E/K1fKyG1GfVQ9WH5kBtt7ttvxZ8BUAAAAAA9VzlW+KuThLxi9meQBa4mt31NK/wDjQ8X2SL7Ey6cuHFTNPxXevMxh0pusosjZTLhku8DbAhaZnxzad/Rsj6UfxRNIoAAAAAAAAcsq1UY9lr5Qi3t4nUrekFnBpzW/pySAzNtkrbZzm95Se7Z5AKgAAAAAAAAAAAAAk6dkSxcyuxejvtLyfM2JhTaYc+sxaZr/AHQT+4iuwAAAAAAABSdJ5/Ix4eMm/d/6XZQdJ3/Ex19mX4AUgAKgAAAAAAAAAAAAAGt0WXHplD8E4+5syRqdAf8Aplf9UviRViAAAAAAAAUfSat8NFnNJuL+4vDnkUV5FUqrY8UJcwMSCyz9Hvx3KVSdtXiua80Vr7CoAAAAAAAAAAAAO/YAazRa3XptKfenL3sqdN0id0lZlJwqXKL5y/Q0cUorZJJLsSRFfQAAAAAAAAAAI2TgY2T89Um/WXY/eSQBSX9H4P5i6Ufqkt0Q7NDzIej1c19UtviacAZCem5kOePP2dpxeNfF/KotX/Rm1AGI6q1c6rP8GfVRc+VFv+DNsAMbDByp8sa32x2JFejZs+dcYf1SNUAKKjo++d9/sgvzLPF0/Gxe2qtcXrS7WSgA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==' // You can set a default profile picture
      },
    
    Mobile:{
        type:Number,
       min:10,
      unique:true
    },
    Password:{
        type:String,
        required:[true,"please check again"],
        min:8
    }
})
module.exports=mongoose.model("User",userSchema);