const router = require('express').Router();
let express = require('express')
let path = require('path')
const controller = require('../controllers/coinBaseController.js');

router.post('/addAWallet', controller.addAWallet)

module.exports = router;
