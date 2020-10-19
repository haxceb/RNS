var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');


router.post("/storeUser", userController.storeUser);

module.exports = router;
