const { userSignUpValidation } = require("../../middlewares/validaiton");
const { signUp,signIn, getAllUsers, getUserByUsername } = require("./Controllers/users.controller");
const {signUpValidation} = require("./users.validator")
const router = require("express").Router();
router.post("/signUp",userSignUpValidation(signUpValidation),signUp);
router.post("/signIn",signIn);
router.get("/getAllUsers",getAllUsers);
router.get("/getUserByUsername/:userName",getUserByUsername);
module.exports = router;