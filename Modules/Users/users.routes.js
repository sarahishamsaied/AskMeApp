const { signUp,signIn, getAllUsers } = require("./Controllers/users.controller");

const router = require("express").Router();
router.post("/signUp",signUp);
router.post("/signIn",signIn);
router.get("/getAllUsers",getAllUsers);
module.exports = router;