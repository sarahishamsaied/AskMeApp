const Joi = require("joi");
const signUpValidation = {
    body:Joi.object().required().keys({
        name:Joi.string().required(),
        userName:Joi.string().required(),
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
            "string.empty":"email cannot be empty",    
            "string.email":"invalid email"    
        }),
        name:Joi.string(),
        password:Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        cPassword:Joi.ref("password"),
        picUrl:Joi.string()
    }),
};
module.exports = {signUpValidation};

// =============================================== JOI VALIDATOR ==============================================
// const {body,param} = require("express-validator");
// const signUpValidation = [
//     body("userName").isString(),
//     body("name").isString(),
//     body("email").isString().isEmail(),
//     body("password").isLength({min:5}).matches("^[a-zA-Z0-9]{3,30}$"),
//     body("cPassword").custom((value,{req})=>{
//         if(value!==req.body.password)
//         throw new Error("Passwords must match!");
//         return true;
//     })
// ];
// module.exports = {signUpValidation};