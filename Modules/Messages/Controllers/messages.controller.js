const messageModel = require("../../../Database/Models/message.model");
const userModel = require("../../../Database/Models/users.model");
const sendMessage = async(req,res) =>{
    try {
        const {sid,rid} = req.params;
        const {messageBody,sender,reciever} = req.body;
        const user = await userModel.findOne({_id:sid});
        if(user){
            const sentMessage = await messageModel.insertMany({
                messageBody,
                sender:sid,
                reciever:rid
            });
            res.json({
                message:'sent!',
                data:sentMessage
            })
        
        }
        else{
            res.json({
                message:"user does't exist" 
            })
        }  
    } catch (error) {
        res.json({
            message:"Error"
        })
    }
}
const getUserMessage = async(req,res)=>{
    const {rid} = req.params;
    const userMessage = await messageModel.find({reciever:rid})
    if(userMessage.length>0){
        res.json({
            message:'All your messages',
            data:userMessage
        })
    }
    else{
        res.json({
            message:'Cannot get messages'
        })
    }
}
module.exports = {
    sendMessage,
    getUserMessage
}