const mongoose = require("mongoose");
const userSchema =  new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        unique:true,
        required:true,
        type:String
    },
    age:Number,
    phone:String,
    password:String,
    picUrl:String
})
const userModel = mongoose.model("users",userSchema);
module.exports = userModel;