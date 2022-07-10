const router = require("express").Router();
const {sendMessage, getUserMessage, getAllMessages} = require("../Messages/Controllers/messages.controller")
router.post("/sendMessage/:sid/:rid",sendMessage)
router.get("/getMessage/:rid",getUserMessage)
router.get("/getAllMessages/",getAllMessages)
module.exports = router; 