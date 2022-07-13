const userModel = require("../../../Database/Models/users.model")
const {ReasonPhrases,StatusCodes,getReasonPhrase,getStatusCode,} = require('http-status-codes');
let CryptoJs = require("crypto-js")
const signUp = async(req,res)=>{
    try{
        const {userName,age,email,password,cPassword,picUrl} = req.body;
        if(password === cPassword){
            let passEncryption = CryptoJs.AES.encrypt(password,process.env.SECRET_KEY).toString();
            console.log(passEncryption);
            const addedUser = new userModel({
                userName,
                age,
                email,
                password:passEncryption,
            })
            const user = await addedUser.save();
            res.json({
                message:'added successfully',
                data:user
            })
        }
        else{
            res.status(StatusCodes.BAD_REQUEST).json({
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
        const bytes = CryptoJs.AES.decrypt(foundUser.password,process.env.SECRET_KEY);
        const decryptedPass = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
        if(decryptedPass == password)
        res.status(StatusCodes.ACCEPTED).json({
            message:'success',
            data:foundUser
        })
        else
        res.status(StatusCodes.BAD_REQUEST).json({
            message:'Incorrect password',
            error:getReasonPhrase(StatusCodes.BAD_REQUEST)
        })
    }
    else
    res.status(StatusCodes.BAD_REQUEST).json({
        message:'Not found!'
    })


}
const getAllUsers = async(req,res)=>{
  const allUsers = await userModel.find({});
  if(allUsers.length>0)
  res.json({
    message:'Done',
    data: allUsers
  });
  else
  res.json({
    message:'No users found',
    data:allUsers
  });
}
const getUserByUsername = async(req,res)=>{
    const {userName} = req.params;
    const user = await userModel.find({
        userName
    }).select("userName age email");
    console.log("username is",user);
    res.json({
        data:user
    })
}
module.exports = {
    signUp,
    signIn,
    getAllUsers,
    getUserByUsername
}