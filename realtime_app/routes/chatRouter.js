var express = require('express');
var router = express.Router();

const chatController = require('../controllers/chatController');


router.post("/saveMessage", chatController.saveMessage);
router.get("/getMessages", chatController.getMessages);

module.exports = router;
