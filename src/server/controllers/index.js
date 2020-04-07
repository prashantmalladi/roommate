const express = require('express');
const router = express.Router();

//controllers
const defaultController = require('./default');

router.get('/', defaultController);

module.exports = router;