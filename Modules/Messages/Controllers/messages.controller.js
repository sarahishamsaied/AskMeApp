const messageModel = require("../../../Database/Models/message.model");
const userModel = require("../../../Database/Models/users.model");
const sendMessage = async(req,res) =>{
    try {
        const {sid,rid} = req.params;
        const {messageBody,sender,reciever,isAnonymous} = req.body;
        const user = await userModel.findOne({_id:sid});
        if(user){
            const sentMessage = await messageModel.insertMany({
                messageBody,
                sender:sid,
                reciever:rid,
                reply:'',
                isAnonymous
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
    const userMessage = await messageModel.find({reciever:rid}).populate([{
        path:'sender',
    }])
    if(userMessage.length>0){
        res.json({
            message:'All your messages',
            data:userMessage
        })
    }
    else{
        res.json({
            message:'No messages'
        })
    }
}
const getAllMessages = async(req,res) =>{
    try{
        const allMessages = await messageModel.find({}).populate([{
            path:'reciever',
            select:'userName'
        },
        {
            path:'sender',
            select:'userName'
        }]);
        res.json({
            message:'messages',
            data:allMessages
        })
    }catch(e){
        console.log(e)
    }

}
const replyToMessage = async(req,res)=>{
    const {mid} = req.params;
    console.log(mid)
    const {reply} = req.body;
    console.log(reply)
    const data = await messageModel.findByIdAndUpdate(mid,{
        reply
    },{new:true});
    res.json({
        message:'updated',
        data
    })
}
module.exports = {
    sendMessage,
    getUserMessage,
    getAllMessages,
    replyToMessage
}