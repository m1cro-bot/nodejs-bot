var express = require('express');
var router = express.Router();
var todo = require('../controller/user')

/* GET users listing. */
router.post('/', todo.register);

module.exports = router;
