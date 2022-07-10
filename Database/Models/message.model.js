const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    messageBody:{
        type:String,
        required:true
    },
    sender:{
        type:mongoose.Types.ObjectId,
        ref:'users',
    },
    reciever:{
        type:mongoose.Types.ObjectId,
        ref:'users',  
    }
},{timestamps:true});
const messageModel = mongoose.model("messages",messageSchema);
module.exports =  messageModel;