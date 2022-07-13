const headerData = ["body","params","query"];
const userSignUpValidation = (schema)=>{
    return (req,res,next) =>{
        let errorList = [];
        headerData.forEach((key)=>{
            if(schema[key]){
                const validationResult = schema[key].validate(req.body)
                if(validationResult.error){
                    errorList.push(validationResult.error.details)
                }
            }
        })
        if(errorList.length){
            res.send({
                message:'Error',
                errorList
            })
        }
        else{
            next();
        }
    }
}
module.exports = {userSignUpValidation}