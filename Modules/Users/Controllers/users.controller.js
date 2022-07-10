const userModel = require("../../../Database/Models/users.model")
const signUp = async(req,res)=>{
    try{
        const {userName,age,email,password,cPassword,picUrl} = req.body;
        if(password === cPassword){
            const addedUser = new userModel({
                userName,
                age,
                email,
                password,
            })
            const user = await addedUser.save();
            res.json({
                message:'added successfully',
                data:user
            })
        }
        else{
            res.json({
                message:'Passwords do not match'
            });
        }
    }
    catch(e){
        res.json({
            message:'Email/Username already exist'
        });
    }

   
}
const signIn = async (req,res)=>{
    const {email,password} = req.body;
    const foundUser = await userModel.findOne({
        email
    })
    if(foundUser){
        if(foundUser.password === password)
        res.json({
            message:'Welcome',
            data:foundUser
        })
        else
        res.json({
            message:'Incorrect password'
        })
    }
    else
    res.json({
        message:'Not found!'
    })


}
const getAllUsers = async(req,res)=>{
  const allUsers =   await userModel.find({});
  res.json({
    message:'Done',
    data: allUsers
  })
}
module.exports = {
    signUp,
    signIn,
    getAllUsers
}