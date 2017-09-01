const router = require('express').Router();
let express = require('express')
let path = require('path')
const coinBaseController = require('../controllers/coinBaseController.js');
const stripeController = require('../controllers/stripeController.js');

router.post('/addAWallet', coinBaseController.addAWallet)
router.post('/buyCrypto', coinBaseController.buyCrypto)
router.post('/addACard', stripeController.addACard)
router.post('/makeSavings', stripeController.makePayment)

module.exports = router;
