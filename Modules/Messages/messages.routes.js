const router = require("express").Router();
const {sendMessage, getUserMessage} = require("../Messages/Controllers/messages.controller")
router.post("/sendMessage/:sid/:rid",sendMessage)
router.get("/getMessage/:rid",getUserMessage)
module.exports = router; 