const router = require("express").Router();
const {sendMessage, getUserMessage, getAllMessages, replyToMessage} = require("../Messages/Controllers/messages.controller")
router.post("/sendMessage/:sid/:rid",sendMessage)
router.get("/getMessage/:rid",getUserMessage)
router.get("/getAllMessages/",getAllMessages)
router.post("/replyToMessage/:mid",replyToMessage)
module.exports = router; 